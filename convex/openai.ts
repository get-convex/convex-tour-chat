"use node";
import { OpenAI } from "openai";
import { internalAction } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";
import { api } from "./_generated/api";

type ChatParams = {
  messages: Doc<"messages">[];
  messageId: Id<"messages">;
};
export const chat = internalAction({
  handler: async ({ runMutation }, { messages, messageId }: ChatParams) => {
    // Initialize the OpenAI client with the given API key
    const apiKey = process.env.OPENAI_API_KEY!;
    const openai = new OpenAI({ apiKey });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // "gpt-4" also works, but is so slow!
      messages: [
        {
          role: "system",
          content:
            "You are a terse bot in a group chat responding to questions with 1-sentence answers.",
        },
        ...messages.map(({ body, author }) => ({
          role:
            author === "ChatGPT" ? ("assistant" as const) : ("user" as const),
          content: body,
        })),
      ],
    });

    const messageContent = response.choices[0].message?.content;
    if (messageContent) {
      await runMutation(api.messages.send, {
        author: "ChatGPT",
        body: messageContent,
      });
    } else {
      throw new Error("No message received from OpenAI");
    }
  },
});
