import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="body">
        <Link
          to={"https://github.com/Pumbahlata"}
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default Footer;
