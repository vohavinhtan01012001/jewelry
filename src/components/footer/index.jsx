import "./index.scss";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icon">
        <FaFacebook className="icon__facebook" />
        <FaYoutube className="icon__youtube" />
        <FaInstagram className="icon__instagram" />
        <FaTwitter className="icon__twitter " />
      </div>
      <div className="footer__title">
        <h1>© WILLOWY AUCTION 2024</h1>
      </div>
    </div>
  );
}

export default Footer;
