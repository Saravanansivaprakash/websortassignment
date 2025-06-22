import "./Notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="notfound-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="notfound-style"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-description">
      We are sorry, the page you requested could not be found
    </p>
    <Link to="/">
      <button className="retry-btn"> Retry</button>
    </Link>
  </div>
);

export default NotFound;
