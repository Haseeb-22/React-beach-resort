import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {RoomProvider} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RoomProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RoomProvider>
);
reportWebVitals();
