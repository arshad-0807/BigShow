import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "./Footer2";
import { userlists } from "../../customData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const OtpValidation = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const otp = e.target.otp.value;
    // const password = e.target.password.value;
    const alert = document.querySelector(".alert-box");

    const user = userlists.find(function (user) {
      return user.otp === otp;
    });

    if (user) {
      alert.classList.remove("show-alert");
      navigate("/reset-password", {
        state: { message: "You are successfully logged in" },
      });
    } else {
      alert.classList.toggle("show-alert");
    }
  };
  return (
    <>
      <div className="form-page py-5">
        <div className="logo py-4">
          <img src="logo.png" alt="" />
        </div>
        <div className="alert-box mb-4">
          <div className="alert-box-inner">
            <h4>There was a problem</h4>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="alert-icon"
            />
            <div className="alert-message">
              <p className="text-dark">Invalid OTP</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Verification Required</h2>
            <p>
              To continue, complete this verification step. We've sent an OTP to
              the email . Please enter it below to complete verification.
            </p>

            <div className="form-content">
              <label htmlFor="otp" className="pt-3">
                Enter OTP
              </label>
              <input type="text" name="otp" id="otp" className="mt-2" />

              <button className="submit btn btn-warning my-4" type="submit">
                Continue
              </button>

              <Link to="" className="text-center d-block">
                Resend OTP
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default OtpValidation;
