import { query, mutation } from "./_generated/server";
import { Doc } from "./_generated/dataModel";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async ({ db }): Promise<Doc<"messages">[]> => {
    // Grab the most recent messages.
    const messages = await db.query("messages").order("desc").take(100);
    // Reverse the list so that it's in chronological order.
    return messages.reverse();
  },
});

export const send = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async ({ db }, { body, author }) => {
    // Send our message.
    await db.insert("messages", { body, author });
  },
});
