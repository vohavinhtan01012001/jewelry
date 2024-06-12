import { Link } from "react-router-dom";
import "./index.scss";
import logo from "../../images/logo.png";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function Header() {
  const [role, setRole] = useState(2)

  useEffect(() => {
    const userJsonString = localStorage.getItem('user');
    if (userJsonString !== null) {
      setRole(JSON.parse(userJsonString)?.userRoleId)
    }
  }, [localStorage.getItem('user')])
  
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="" width={150} />
        </Link>
      </div>

      <nav className="header__nav">
        {
          role === 2 ?
            <ul>
              <li>
                <Link to="/auctions">AUCTIONS</Link>
              </li>
              <li>
                <Link to="/">BUYING</Link>
              </li>
              <li>
                <Link to="/selling">SELLING</Link>
              </li>
              <li>
                <Link to="/">EXOLORE</Link>
              </li>
              <li>
                <Link to="/">CONTACT</Link>
              </li>
              <li>
                <Link to="/login">
                  <UserOutlined />
                </Link>
              </li>
            </ul>
            : role === 3 ?
              <ul>
                <li>
                  <Link to="/requirements">Browse customer requirements</Link>
                </li>
                <li>
                  <Link to="/login">
                    <UserOutlined />
                  </Link>
                </li>
              </ul>
              : ""
        }
      </nav>
    </header>
  );
}

export default Header;
