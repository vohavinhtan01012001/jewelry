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
      const response = await axios.post(
        `https://jewerly-api.azurewebsites.net/api/User/login?email=${email}&password=${password}`
      );
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data))
        console.log(response.data)
        navigate("/auctions");
        window.location.reload();
      } else {
        setError("Email or password is incorrect.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred while logging in. Please try again later.");
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
            type="text"
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
