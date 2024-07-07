import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "./components/organisms/RootLayout";
import Feeds from "./pages/Feeds";
import Login from "./pages/Login/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "feeds",
        element: <Feeds />,
      },
    ],
  },
]);
