import "./index.scss";
import logo from "../../images/logo.png";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://662a6bda67df268010a3dc8f.mockapi.io/StaffManagement`
      );

      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log("Login successful!");
        navigate("/auctions");
      } else {
        // Hiển thị thông báo lỗi nếu email hoặc mật khẩu không chính xác
        setError("Email or password is incorectly.");
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error logging in:", error);
      setError("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="login">
      <iframe
        className="login__video"
        src="https://player.vimeo.com/video/952404352?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="intro"
      ></iframe>
      <div className="wrapper">
        <div className="login__logo">
          <img src={logo} alt="Logo" width={200} />
        </div>
        <div className="login__form">
          <h3>Login to your account</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="input__password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            className={`login-button ${email && password ? "active" : ""}`}
            onClick={handleLogin}
            disabled={!email || !password}
          >
            Login
          </button>
          <div className="back" onClick={() => navigate(-1)}>
            <DoubleLeftOutlined />
            Go Back
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
