import { Link } from "react-router-dom";
import "./index.scss";
import logo from "../../images/logo.png";
import { UserOutlined } from "@ant-design/icons";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="" width={150} />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/auctions">AUCTIONS</Link>
          </li>
          <li>
            <Link to="/">BUYING</Link>
          </li>
          <li>
            <Link to="/">SELLING</Link>
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
      </nav>
    </header>
  );
}

export default Header;
