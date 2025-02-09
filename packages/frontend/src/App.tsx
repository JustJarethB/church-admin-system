import { httpBatchLink } from '@trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";
import { SignIn, ProfileSelection, Church, TeamsModal } from "@/pages";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UnauthenticatedOnly, AuthenticatedOnly, RouterPage } from "@/router";
import { Error404 } from "./pages/404";
import { useEffect, useState } from "react";
import { trpc } from "./api";
import AuthProvider, { useAuth } from './providers/AuthProvider';


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
export const withAuth = (Component: React.FC) => () => {
  return <AuthProvider><Component /></AuthProvider>
}
function App() {
  const { session } = useAuth()
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient, setTrpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // headers: {
          //   "authorization": `${session?.token_type} ${session?.access_token}`
          // }
        }),
      ],
    }),
  );
  useEffect(() => {
    setTrpcClient(() => trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          headers: session ? {
            "authorization": `${session.token_type} ${session.access_token}`
          } : undefined
        }),
      ],
    }))
  }, [session])

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </trpc.Provider>
  )
}
export default withAuth(App);
