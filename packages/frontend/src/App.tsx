import { initializeApp } from "firebase/app";

import "./App.css";
import firebaseConfig from "./firebaseConfig";
import { SignIn, ProfileSelection, Church, TeamsModal } from "@/pages";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UnauthenticatedOnly, AuthenticatedOnly, RouterPage } from "@/router";
import { Error404 } from "./pages/404";
import { useEffect } from "react";
import { hello } from "./api";

// side-effect
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    element: <UnauthenticatedOnly />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
  {
    element: <AuthenticatedOnly />,
    children: [
      {
        element: <RouterPage />,
        children: [
          { path: "/", element: <Navigate to={"/profiles"} /> },
          {
            path: "/church",
            element: <Church />,
            children: [{ path: "teams/:id", element: <TeamsModal /> }],
          },
          { path: "/profiles", element: <ProfileSelection /> },
        ],
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    hello('Frontend').then(console.log)
  })
  return <RouterProvider router={router} />;
}
export default App;
