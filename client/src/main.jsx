import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import App from "./App";

import PrivateRoute from "./components/PrivateRoute";

import Acceuil from "./pages/Acceuil";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Deconnexion from "./pages/Deconnexion";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Acceuil /> },
      { path: "/game", element: <Home /> },
      { path: "/inscription", element: <Inscription /> },
      { path: "/connexion", element: <Connexion /> },
      { path: "/deconnexion", element: <Deconnexion /> },
      {
        path: "/admin",
        element: (
          <PrivateRoute requiredRole={1}>
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
