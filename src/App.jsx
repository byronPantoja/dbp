import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import AppLayout from "./ui/AppLayout";
import Signin from "./pages/Signin";
import Admin from "./pages/Admin";
import ProtectedRoute from "./features/projects/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="reactdev" />} />;
            <Route path="reactdev" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="notes" element={<Notes />} />
            <Route path="signin" element={<Signin />} />
          </Route>
          n
          <Route path="*" element={<PageNotFound />} />;
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
