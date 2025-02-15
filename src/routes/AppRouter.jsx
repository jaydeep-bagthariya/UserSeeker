import AppLayout from "@/layouts/app-layout";
import LandingPage from "@/pages/landing";
import SearchHistory from "@/pages/search-history";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/history", element: <SearchHistory /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
