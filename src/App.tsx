import { initializeApp } from "firebase/app";

import "./App.css";
import firebaseConfig from "./firebaseConfig";
import { SignIn, ProfileSelection } from "@/pages";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UnauthenticatedOnly, AuthenticatedOnly, RouterPage } from "@/router";

// side-effect
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    element: <UnauthenticatedOnly />,
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
          { path: "/profiles", element: <ProfileSelection /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
