import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async ({ db }) => {
    return await db
      .query("typers")
      .filter((q) => q.eq(q.field("typing"), true))
      .collect();
  },
});

export const set = mutation({
  args: { author: v.string(), typing: v.boolean() },
  handler: async ({ db }, { author, typing }) => {
    const authorTyper = await db
      .query("typers")
      .filter((q) => q.eq(q.field("author"), author))
      .first();
    if (authorTyper) {
      await db.patch(authorTyper._id, { typing });
    } else {
      await db.insert("typers", { author, typing });
    }
  },
});
