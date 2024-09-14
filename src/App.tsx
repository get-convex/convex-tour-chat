import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

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

  return (
    <main className="chat">
      <header>
        <h1>Reach for the Tasks</h1>
      </header>
      {task?.map((tasks) => (
        <article>

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
        <input
          value={newPriority}
          onChange={async (e) => {
            const text = e.target.value;
            setNewPriority(text);
          }}
          placeholder="Priority"
        />
        <button type="submit" disabled={!newName}>
          Send
        </button>
      </form>
    </main>
  );
}
