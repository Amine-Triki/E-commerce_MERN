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
  CartPage,
  CheckoutPage,
} from "./pages/index";
import AuthProvider from "./context/Auth/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import CartProvider from "./context/Cart/CartProvider";
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

      /*start protect route for cart */
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/cart", element: <CartPage /> },
          { path: "/checkout", element: <CheckoutPage /> },
        ],
      },
      /*end protect route for cart */
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
