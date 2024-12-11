import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Layouts
import Layout from "@/layouts/MainLayout";

// pages
import Personal from "@/pages/Personal";
import Financial from "@/pages/Financial";

// routes
const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard/hrManager/employees/1/personal" />,
  },
  {
    path: "/dashboard/hrManager/employees",
    element: <Layout />,
    children: [
      { path: ":id/personal", element: <Personal /> },
      { path: ":id/financial", element: <Financial /> },
    ],
  },
];

const router = createBrowserRouter(routes);

// component
const Router: React.FC = () => <RouterProvider router={router} />;
export default Router;
