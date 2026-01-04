import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/User/Dashboard";
import { Layout } from "./Layout/Layout";
import { Login } from "./components/auth/Login";

const router = createBrowserRouter([
  
  {
    element: <Layout />,   
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
