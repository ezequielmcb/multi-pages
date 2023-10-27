import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import Rickandmorty from "./components/ApiRickandMorty/Rickandmorty.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Rickandmorty />
  </React.StrictMode>
);
