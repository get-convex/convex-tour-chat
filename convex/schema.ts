import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
  }),
  typers: defineTable({
    author: v.string(),
    typing: v.boolean(),
  }),
});
