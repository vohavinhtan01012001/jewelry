import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./page/login";
import Layout from "./components/layout";
import HomePage from "./page/home";
import BidRegister from "./page/bid";
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
