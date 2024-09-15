import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: {},
    handler: async (ctx) => {
      // Grab the most recent messages.
      const categories = await ctx.db.query("categories").order("desc").take(100);
      // Reverse the list so that it's in a chronological order.
      return categories.reverse();
    },
  });

export const send = mutation({
    args: { category: v.string()},
    handler: async (ctx, { category }) => {
      // Send a new message.
      await ctx.db.insert("categories", { category });
    },
  });

