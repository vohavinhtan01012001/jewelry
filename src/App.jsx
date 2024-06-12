import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./page/login";
import Layout from "./components/layout";
import HomePage from "./page/home";
import BidRegister from "./page/bid";
import FormSign from "./page/form-sign";
import Selling from "./page/selling/Selling";
import Requirements from "./page/admin/staff/Requirements";
import { useEffect, useState } from "react";

function App() {
  const [role, setRole] = useState(2)

  useEffect(() => {
    const userJsonString = localStorage.getItem('user');
    if (userJsonString !== null) {
      setRole(JSON.parse(userJsonString)?.userRoleId)
    }
  }, [localStorage.getItem('user')])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/auctions",
          element: <BidRegister />,
        },
        {
          path: "/form-sign",
          element: <FormSign />,
        },
        {
          path: "/selling",
          element: <Selling />,
        },
        {
          path: "/requirements",
          element: role === 3 ? <Requirements /> :  <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
