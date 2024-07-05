import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
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
