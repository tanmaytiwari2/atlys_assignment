import RootLayout from "./components/organisms/RootLayout";
import LoginForm from "./pages/LoginForm";

export const routes = [
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <LoginForm /> }],
  },
];
