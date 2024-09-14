import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
  }),
  categories: defineTable({
    category: v.string(),
  }),
  tasks: defineTable({
    category: v.string(),
    date: v.string(),
    description: v.string(),
    name: v.string(),
    priority: v.string(),
  })
  
});


