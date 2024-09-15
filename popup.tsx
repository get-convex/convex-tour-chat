import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const Popup = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(<Popup />, document.getElementById("app"));

