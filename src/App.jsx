import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./page/login";
import Layout from "./components/layout";
import HomePage from "./page/home";
import BidRegister from "./page/bid";
import FormSign from "./page/form-sign";
function App() {
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
