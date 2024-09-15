import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export interface Task {
  _id: string;         // Assuming Convex uses _id for task IDs
  category: string;
  date: string;
  description: string;
  name: string;
  priority: string;
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const task = await ctx.db.query("tasks").order("desc").take(100);
    // Reverse the list so that it's in a chronological order.
    return task.reverse();
  },
});

export const send = mutation({
    args: { category: v.string(), date: v.string(), description: v.string(), name: v.string(), priority: v.string()},
    handler: async (ctx, { category, date, description, name, priority }) => {
      // Send a new message.
      await ctx.db.insert("tasks", { category, date, description, name, priority });
    },
  });
  
  export const getTaskById = query({
    args: { _id: v.id("tasks") },
    handler: async (ctx, { _id }) => {
      const task = await ctx.db.get(_id); // Fetch the task by its ID
      if (!task) {
        throw new Error("Task not found");
      }
      return task;
    },
  });


  export const deleteTaskByName = mutation({
    args: { name: v.string() },
    handler: async (ctx, { name }) => {
  
      const task = await ctx.db.query("tasks").filter(q => q.eq(q.field("name"), name)).first();
      if (task) {
       
        await ctx.db.delete(task._id);
        return { success: true };
      } else {
      
        return { success: false, message: "Task not found" };
      }
    },
  });

