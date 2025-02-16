import { httpBatchLink } from '@trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";
import {
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "./api";
import AuthProvider, { useAuth } from './providers/AuthProvider';
import { router } from './router';
import { ErrorProvider } from './providers/ErrorProvider';


export const withAuth = (Component: React.FC) => () => {
  return <AuthProvider><Component /></AuthProvider>
}
function App() {
  const { session } = useAuth()
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient, setTrpcClient] = useState(() =>
    api.createClient({
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
    setTrpcClient(() => api.createClient({
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
    <ErrorProvider>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </api.Provider>
    </ErrorProvider>
  )
}
export default withAuth(App);
