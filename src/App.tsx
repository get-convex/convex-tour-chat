import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { faker } from "@faker-js/faker";

// For demo purposes. In a real app, you'd have real user data.
const NAME = faker.person.firstName();

export default function App() {
  const messages = useQuery(api.messages.list);
  const sendMessage = useMutation(api.messages.send);
  const typers = useQuery(api.typing.list);

  const otherTypers = typers?.filter(({ author }) => author !== NAME);

  const setTyping = useMutation(api.typing.set);

  const [newMessageText, setNewMessageText] = useState("");

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [messages, otherTypers]);

  return (
    <main className="chat">
      <header>
        <h1>Convex Chat</h1>
        <p>
          Connected as <strong>{NAME}</strong>
        </p>
        <p>Typing: {typers?.length || 0} </p>
      </header>
      {messages?.map((message) => (
        <article
          key={message._id}
          className={message.author === NAME ? "message-mine" : ""}
        >
          <div>{message.author}</div>
          <p>{message.body}</p>
        </article>
      ))}
      {otherTypers?.length ? (
        <article key="typers">
          <div>
            {otherTypers.length <= 3
              ? otherTypers.map(({ author }) => author).join(" & ")
              : "Several people"}
            &nbsp;typing...
          </div>
        </article>
      ) : null}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await sendMessage({ body: newMessageText, author: NAME });
          setNewMessageText("");
          await setTyping({ author: NAME, typing: false });
        }}
      >
        <input
          value={newMessageText}
          onChange={async (e) => {
            const text = e.target.value;
            setNewMessageText(text);
            await setTyping({ author: NAME, typing: !!text });
          }}
          placeholder="Write a message…"
        />
        <button type="submit" disabled={!newMessageText}>
          Send
        </button>
      </form>
    </main>
  );
}
