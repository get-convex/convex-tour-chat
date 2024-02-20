import MistralClient from "@mistralai/mistralai";
import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";

const apiKey = process.env.MISTRAL_API_KEY;

const client = new MistralClient(apiKey);

export const chat = action({
  args: {
    messageBody: v.string(),
  },
  handler: async (ctx, args) => {
    const response = await client.chat({
      model: "mistral-tiny",
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

    await ctx.runMutation(api.messages.send, {
      author: "MistralAI",
      body: messageContent || "Sorry, I don't have an answer for that.",
    });
  },
});
