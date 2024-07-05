import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
