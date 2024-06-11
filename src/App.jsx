import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./page/login";
import Layout from "./components/layout";
import HomePage from "./page/home";
import BidRegister from "./page/bid";
import FormSign from "./page/form-sign";
import SendToCustomer from "./page/send-to-customer";
import ApproveAuctionRequest from "./page/approved";

import GetAllRequestByRequestId from "./page/get-all-request-by-requestId";
import AuctionRequestByStatus from "./page/get-auction-req-by-status";
import JewelryManagement from "./page/jewelry-management";
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
        {
          path: "/send-to-customer",
          element: <SendToCustomer />,
        },
        {
          path: "/approved",
          element: <ApproveAuctionRequest />,
        },
        {
          path: "/auction-requests/:status",
          element: <AuctionRequestByStatus />,
        },
        {
          path: "/requests/:requestId",
          element: <GetAllRequestByRequestId />,
        },
        {
          path: "/jewelry-management",
          element: <JewelryManagement />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
