import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";

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
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />;
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="notes" element={<Notes />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />;
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
