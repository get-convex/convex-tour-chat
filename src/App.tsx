import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import * as React from 'react';
// For demo purposes. In a real app, you'd have real user data.
const NAME = faker.person.firstName();

export default function App() {
  const task = useQuery(api.tasks.list);
  // send adds a new row to the table
  const sendTask = useMutation(api.tasks.send);

  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    // Make sure scrollTo works on button click in Chrome
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 0);
  }, [task]);

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPriority = event.target.value;
    setNewPriority(selectedPriority);
};


const priorityOrder: { [key in "high" | "medium" | "low"]: number } = { high: 1, medium: 2, low: 3 };

// Sort tasks by priority
const sortedTasks = task?.slice().sort((a, b) => {
  return priorityOrder[a.priority as "high" | "medium" | "low"] - priorityOrder[b.priority as "high" | "medium" | "low"];
});

  return (
    <main className= "chat">
      <header>
        <h1>Reach for the Tasks</h1>
      </header>
      {sortedTasks?.map((tasks) => (
        <article className={`task-box priority-${tasks.priority}`}>

          <p>Task name: {tasks.category} <br></br>
          Description: {tasks.description} <br></br>
          Category: {tasks.category} <br></br>
          Priority: {tasks.priority} <br></br>
          Date due: {tasks.date}
          </p>
        </article>
      ))}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await sendTask({ name: newName, category: newCategory, date: newDate, priority: newPriority, description: newDescription});
          setNewName("");
          setNewCategory("");
          setNewDate("");
          setNewPriority("");
          setNewDescription("");
        }}
      >
        <input
          value={newName}
          onChange={async (e) => {
            const text = e.target.value;
            setNewName(text);
          }}
          placeholder="Task name"
        />
        <input
          value={newCategory}
          onChange={async (e) => {
            const text = e.target.value;
            setNewCategory(text);
          }}
          placeholder="Task category"
        />
           
        <input
          value={newDescription}
          onChange={async (e) => {
            const text = e.target.value;
            setNewDescription(text);
          }}
          placeholder="Task description"
        />
        
        <input
          value={newDate}
          onChange={async (e) => {
            const text = e.target.value;
            setNewDate(text);
          }}
          placeholder="Date due"
        />
        <label htmlFor="priority"></label>
          <select name="chosen-priority" id="priority-answer" onChange={handlePriorityChange}>     
              <option value="" disabled selected hidden>Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              setNewPriority();
              
          </select>
          

        <button type="submit" disabled={!newName}>
          Send
        </button>
      </form>
    </main>
  );
}
