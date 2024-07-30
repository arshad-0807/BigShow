import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
const Footer3 = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="container-fluid">
          <div className="footer-head py-2">
            <h2 className="box-title p-0">Recently Watched</h2>
            <div>
              <button className="btn btn-warning">See More</button>
            </div>
          </div>
          <p className="text-secondary">You have no recently viewed pages</p>
        </div>

        <div className="boxes flex-lg-nowrap flex-wrap mt-5">
          <div className="social-box">
            <h3 className="text-center fs-4 py-4">Follow BigShow on social</h3>
            <div className="icon-box">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </div>
          </div>
          <div className="social-box app-download-call">
            <div className="titles pt-4">
              <h3 className="fs-4">Get BigShow App</h3>
              <p>For Android and iOS</p>
            </div>
            {/* <div className="qr-code"> */}
            <img src="qrcode.png" alt="" />
            {/* </div> */}
          </div>
        </div>
        <div className="footer-links pt-5">
          <ul className="py-1">
            <li>
              <Link to="#" className="nav-link">
                Help
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Advertising
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Press Room
              </Link>
            </li>
            <li>
              <Link to="/error" className="nav-link">
                Error
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            © 2024 by{" "}
            <span>
              <Link to="/" className="text-decoration-none">
                BigShow.com
              </Link>
            </span>
            , Inc.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer3;
