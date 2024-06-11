import React, { useState, useEffect } from "react";
import axios from "axios";

function GetAllRequestByRequestId() {
  const [requestId, setRequestId] = useState(""); // State lưu trữ requestId
  const [requestData, setRequestData] = useState(null); // State lưu trữ dữ liệu yêu cầu
  const [error, setError] = useState(null); // State lưu trữ thông báo lỗi

  // Hàm xử lý sự kiện khi người dùng thay đổi requestId
  const handleRequestIdChange = (event) => {
    setRequestId(event.target.value);
  };

  // Hàm xử lý khi người dùng gửi yêu cầu
  const handleSubmit = async (event) => {
    event.preventDefault(); // Ngăn chặn việc reload trang khi submit form
    try {
      const response = await axios.get(
        `https://jewerly-api.azurewebsites.net/api/AuctionRequest/get-all-request-by-requestId/${requestId}`
      );
      setRequestData(response.data.data);
      setError(null);
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Request ID:
          <input
            type="text"
            value={requestId}
            onChange={handleRequestIdChange}
          />
        </label>
        <button type="submit">Fetch Data</button>
      </form>
      {error && <div>Error: {error}</div>}
      {requestData && (
        <div>
          <p>Request ID: {requestData.requestId}</p>
          <p>Request Code: {requestData.requestCode}</p>
          <p>Jewelry ID: {requestData.jewelryId}</p>
          {requestData.jewelry && (
            <div>
              <p>Jewelry Name: {requestData.jewelry.jewelryName}</p>
              <p>Jewelry Brand: {requestData.jewelry.jewelryBrand}</p>
              {requestData.jewelry.image && (
                <img src={requestData.jewelry.image} alt="Jewelry" />
              )}
              {/* Hiển thị các thông tin khác của món đồ trang sức */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GetAllRequestByRequestId;
