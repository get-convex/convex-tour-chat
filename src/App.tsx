import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// For demo purposes. In a real app, you'd have real user data.
const NAME = faker.person.firstName();

function Chat() {
  const messages = useQuery(api.messages.list);
  const sendMessage = useMutation(api.messages.send);

  const [newMessageText, setNewMessageText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 0);
  }, [messages]);

  return (
    <main className="chat">
      <header>
        <h1>Convex Chat</h1>
        <p>
          Connected as <strong>{NAME}</strong>
        </p>
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
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await sendMessage({ body: newMessageText, author: NAME });
          setNewMessageText("");
        }}
      >
        <input
          value={newMessageText}
          onChange={async (e) => {
            const text = e.target.value;
            setNewMessageText(text);
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



function PatientAnalytics() {
  useEffect(() => {
    // Create and append the Visme script for both embeds
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/visme-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="h-screen w-screen bg-slate-200">
      <div>
        <h1>Patient Disease Classification</h1>
        <p>This is the page about disease classification.</p>

        {/* Flex container for both images side by side */}
        <div className="row" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          
          {/* First column with increased width */}
          <div className="column" style={{ width: "600px", height: "500px", padding: "10px" }}>
            <div
              className="visme_d"
              data-title="patient reaction time"
              data-url="76rqjxez-site-traffic-line-graph-square"
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >
                
              </a>
            </p>
          </div>

          {/* Second column with increased width */}
          <div className="column" style={{ width: "600px", height: "500px", padding: "10px" }}>
            <div
              className="visme_d"
              data-title="patient hold time"
              data-url="x40pxvwn-patient-hold-time"
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >
                
              </a>
            </p>
          </div>
        </div>
        {/* Flex container for both images side by side */}
        <div className="row" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          
          {/* First column with increased width */}
          <div className="column" style={{ width: "600px", height: "500px", padding: "10px" }}>
            <div
              className="visme_d"
              data-title="patient hold time compared to baseline and parkinson&#x27;s"
              data-url="6x0j4473-patient-hold-time-compared-to-baseline-and-parkinson-s"
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >
                
              </a>
            </p>
          </div>

          {/* Second column with increased width */}
          <div className="column" style={{ width: "600px", height: "500px", padding: "10px" }}>
            <div
              className="visme_d"
              data-title="patient reaction time comparison" 
              data-url="kkgm333x-patient-reaction-time-comparison" 
              data-w="600"
              data-full-h="false"
              data-h="500"
              data-domain="my"
              style={{ width: "100%", height: "100%" }}
            ></div>
            <p
              style={{
                width: "142px",
                borderRadius: "3px",
                padding: "3px",
                fontSize: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#314152",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              <a
                href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                  color: "#314152",
                  whiteSpace: "nowrap",
                }}
              >
                
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}



export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Chat</Link>
          </li>
          <li>
            <Link to="/analytics">Patient Analytics</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/analytics" element={<PatientAnalytics />} />
      </Routes>
    </Router>
  );
}