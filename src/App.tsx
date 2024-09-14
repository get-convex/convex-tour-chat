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
        <h1>Convex Chat</h1>
        <p>
          Connected as <strong>{NAME}</strong>
        </p>
      </header>
      {/* {task?.map((tasks) => (
        <article
          key={tasks._id}
          className={tasks.name === NAME ? "message-mine" : ""}
        >
          <div>{tasks.date}</div>

          <p>{tasks.category}</p>
        </article>
      ))} */}
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
          placeholder="Write the name of the task"
        />
        <input
          value={newCategory}
          onChange={async (e) => {
            const text = e.target.value;
            setNewCategory(text);
          }}
          placeholder="Write the category of your task"
        />
           
        <input
          value={newDescription}
          onChange={async (e) => {
            const text = e.target.value;
            setNewDescription(text);
          }}
          placeholder="Describe your task"
        />
        <input
          value={newDate}
          onChange={async (e) => {
            const text = e.target.value;
            setNewDate(text);
          }}
          placeholder="Enter the date it the task is due"
        />
        <input
          value={newPriority}
          onChange={async (e) => {
            const text = e.target.value;
            setNewPriority(text);
          }}
          placeholder="Choose your priority (easy/medium/hard)"
        />
        <button type="submit" disabled={!newName}>
          Send
        </button>
      </form>
    </main>
  );
}
