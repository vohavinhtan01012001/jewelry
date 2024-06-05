import "./index.scss";
import logo from "../../images/logo.png";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <div className="login">
          <iframe
            className="login__video"
            src="https://player.vimeo.com/video/952404352?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&loop=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="intro"
          ></iframe>
          <div className="wrapper">
            <div className="login__logo">
              <img src={logo} alt="" width={200} />
            </div>
            <div className="login__form">
              <h3>Login your account</h3>
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
              <button className={email && password ? "active" : ""}>
                Login
              </button>
              <div className="back">
                <DoubleLeftOutlined />
                Go Back
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
