import { useState } from "react";
import axios from "axios";

function ApproveAuctionRequest() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  const handleApprove = async () => {
    try {
      const response = await axios.post(
        "https://jewerly-api.azurewebsites.net/api/AuctionRequest/approved",
        {}
      );
      setResponseData(response.data);
      setError("");
    } catch (error) {
      console.error("Error sending request:", error);
      setError(
        "An error occurred while sending the request. Please try again later."
      );
      setResponseData(null);
    }
  };

  return (
    <div>
      <button onClick={handleApprove}>Approve Auction Request</button>
      {error && <p>{error}</p>}
      {responseData && <p>{responseData.message}</p>}
    </div>
  );
}

export default ApproveAuctionRequest;
