import { useState, useEffect } from "react";
import axios from "axios";

function GetAllRequestByRequestId({ requestId }) {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://your-api-url/api/AuctionRequest/get-all-request-by-requestId/${requestId}`
        );
        setRequests(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, [requestId]);

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {requests.map((request, index) => (
          <li key={index}>{/* Hiển thị thông tin của mỗi yêu cầu ở đây */}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetAllRequestByRequestId;
