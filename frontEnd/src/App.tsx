import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Theme from "./components/Theme";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import {
  Home,
  Skills,
  Projects,
  Contact,
  NotFound,
  Ecommerce,
  RegisterPage,
  LoginPage,
} from "./pages/index";
import AuthProvider from "./context/Auth/AuthProvider";
const Layout = () => (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "/Ecommerce", element: <Ecommerce /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
