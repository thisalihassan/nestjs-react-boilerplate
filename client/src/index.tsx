import React from "react";
import ReactDOM from "react-dom/client";
import App from "@client/App";

const container = document.getElementById("app");
// create a root
const root = ReactDOM.createRoot(container);
// render app to root
root.render(<App />);