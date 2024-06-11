import { useState } from "react";
import axios from "axios";

function SendToCustomer() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://jewerly-api.azurewebsites.net/api/AuctionRequest/send-to-customer",
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
      <button onClick={handleSubmit}>Send Request</button>
      {error && <p>{error}</p>}
      {responseData && (
        <div>
          <p>Response Data:</p>
          {responseData.data && <p>Data: {responseData.data}</p>}
          {responseData.messages && <p>Messages: {responseData.messages}</p>}
          {responseData.isSuccess && (
            <p>Is Success: {responseData.isSuccess.toString()}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SendToCustomer;
