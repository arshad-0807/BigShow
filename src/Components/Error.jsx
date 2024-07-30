import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./error.css";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Error = () => {
  return (
    <>
      <div className="content">
        <div className="error-info">
          <h2 className="py-2">Oops!</h2>
          <h1 className="er">404</h1>
          <h1 className="py-2">PAGE NOT FOUND</h1>
          <p className="py-2">
            Sorry, the page you are looking for does not found.
          </p>

          <Link to="/" className="btn btn-warning py-2">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Back To Home
          </Link>
        </div>
        <img src="error404.png" alt="" />
      </div>
    </>
  );
};

export default Error;
