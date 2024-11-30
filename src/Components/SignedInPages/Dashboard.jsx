import React from "react";
import styles from "./dashboard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { userlists } from "../../../customData";
import {
  faAddressCard,
  faCamera,
  faCreditCard,
  faGear,
  faHeadset,
  faHeart,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const navigate = useNavigate();
  function logOut() {
    sessionStorage.removeItem("token");
    alert("You have been logged out!");
    navigate("/", {});
  }
  return (
    <>
      <div className={styles.page_content}>
        <div className={styles.sidebar}>
          <div
            className={`${styles.sidebar_header} d-flex justify-content-between `}
          >
            <h3 className="text-white align-self-center">Hi! User</h3>
            {/* <FontAwesomeIcon
              icon={faUser}
              className={`${styles.nav_icon} text-white`}
            /> */}
            <div className="position-relative">
              <img src="arsh.jpg" alt="" className={`${styles.user_img} `} />
              <FontAwesomeIcon
                icon={faCamera}
                className={`${styles.change_img} text-warning position-absolute`}
              />
            </div>
          </div>
          <div>
            <ul className={styles.dashboard_nav}>
              <li>
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className={styles.ad_icon}
                />
                <span>My Profile</span>
              </li>

              <li>
                <FontAwesomeIcon icon={faGear} className={styles.nav_icon} />
                <span>Settings</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className={styles.nav_icon}
                />
                <span>My Purchases</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} className={styles.nav_icon} />
                <span>Wishlist</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faReceipt} className={styles.nav_icon} />
                <span>Coupons</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeadset} className={styles.nav_icon} />
                <span>Help Center</span>
              </li>
              <li>
                <button className={styles.logout} onClick={logOut}>
                  <Link>Log Out</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.main_page_content}>
          <Link to="/main-home" className={styles.main_button}>
            Browse Content
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
