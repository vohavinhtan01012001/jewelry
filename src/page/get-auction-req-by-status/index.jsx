import { useState, useEffect } from "react";
import axios from "axios";

function AuctionRequestByStatus({ status }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Gửi yêu cầu lấy danh sách yêu cầu đấu giá theo trạng thái
        const response = await axios.get(
          `/api/AuctionRequest/get-auction-req-by-status/${status}`
        );
        setRequests(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Kiểm tra nếu requests không phải là một mảng
  if (!Array.isArray(requests)) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <h1>Auction Requests by Status: {status}</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>{request.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionRequestByStatus;
