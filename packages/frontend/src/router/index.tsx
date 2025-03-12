import { createBrowserRouter, Navigate } from "react-router-dom";
import { Church, Error404, ProfileSelection, SignIn, TeamsModal } from "@/pages";
import { ModalCreateOrganisation } from "@/pages/ProfileSelection/ModalCreateOrganisation";
import { RouterPage } from "./RouterPage";
import { UnauthenticatedOnly } from "./UnauthenticatedOnly";
import { AuthenticatedOnly } from "./AuthenticatedOnly";
import { ErrorBoundary } from "./ErrorBoundary";

export const router = createBrowserRouter([
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
          {
            ErrorBoundary,
            children: [

          { path: "/", element: <Navigate to={"/profiles"} /> },
          {
            path: "/church",
            element: <Church />,
            children: [{ path: "teams/:id", element: <TeamsModal /> }],
          },
          { path: "/profiles", element: <ProfileSelection />, children: [{ path: 'create', element: <ModalCreateOrganisation /> }] },
            ]
          }
        ],
      },
    ],
  },
]);
