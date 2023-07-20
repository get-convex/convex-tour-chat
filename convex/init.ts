import { api } from "./_generated/api";
import { internalMutation } from "./_generated/server";

const seedMessages = [
  ["Omar", "Hey there!", 0],
  ["Arya", "What's up? Have a good weekend?", 1000],
  ["Omar", "Yeah! I spent most of it reading about AI :)", 1500],
  ["Arya", "Oh cool, I need to learn more about that!", 1700],
  [
    "Omar",
    "It would be great if we could chat here with an AI assistant",
    3000,
  ],
  ["Evelyn", "Hey folks! Ooh I like that idea", 2000],
  ["Arya", "Hi :) Yeah me too!", 1000],
  [
    "Evelyn",
    "I was playing with ChatGPT this weekend and I think we could hook it up to this app!",
    600,
  ],
  ["Omar", "Sounds like a plan", 5000],
] as const;

export const seed = internalMutation({
  args: {},
  handler: async (ctx) => {
    let totalDelay = 0;
    for (const [author, body, delay] of seedMessages) {
      totalDelay += delay;
      await ctx.scheduler.runAfter(totalDelay, api.messages.send, {
        author,
        body,
      });
    }
  },
});

export default internalMutation({
  args: {},
  handler: async (ctx) => {
    const anyMessage = await ctx.db.query("messages").first();
    if (anyMessage) return;
    await seed(ctx, {});
  },
});
