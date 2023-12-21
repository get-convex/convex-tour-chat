import OpenAI from "openai";
import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";

// Initialize the OpenAI client with the given API key
const apiKey = process.env.OPENAI_API_KEY!;
const openai = new OpenAI({ apiKey });

export const chat = action({
  args: {
    messageBody: v.string(),
  },
  handler: async (ctx, args) => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // "gpt-4" also works, but is so slow!
      messages: [
        {
          // Provide a 'system' message to give GPT context about how to respond
          role: "system",
          content:
            "You are a terse bot in a group chat responding to questions with 1-sentence answers.",
        },
        {
          // Pass on the chat user's message to GPT
          role: "user",
          content: args.messageBody,
        },
      ],
    });

    // Pull the message content out of the response
    const messageContent = response.choices[0].message?.content;

    // Send GPT's response as a new message
    await ctx.runMutation(api.messages.send, {
      author: "ChatGPT",
      body: messageContent || "Sorry, I don't have an answer for that.",
    });
  },
});
