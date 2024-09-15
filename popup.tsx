import { ConvexProvider, useQuery } from "convex/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./src/App";

const Popup = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(<Popup />, document.getElementById("app"));

