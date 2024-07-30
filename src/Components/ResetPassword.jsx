import "./signin.css";
import { useNavigate } from "react-router-dom";
import Footer2 from "./Footer2";
import { userlists } from "../../customData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    // const password = e.target.password.value;
    const alert = document.querySelector(".alert-box");
    const successBox = document.querySelector(".password-reset-success");
    const returnLogin = document.querySelector(".return-to-login");
    const formPage = document.querySelector(".form-page");

    const user = userlists.find(function (user) {
      return user.password === password;
    });

    if (user) {
      alert.classList.remove("show-alert");
      //   navigate("/sign-in", {
      //     state: { message: "You are successfully logged in" },
      //   });
      formPage.style.display = "none";
      successBox.style.display = "block";
      successBox.style.top = "0";
    } else {
      alert.classList.toggle("show-alert");
    }
  };

  const returnToLogin = () => {
    navigate("/sign-in");
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
              <p className="text-dark">
                Passwword should be atleast 8 characters
              </p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Reset password</h2>

            <div className="form-content">
              <label htmlFor="password" className="pt-3">
                Enter New Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="mt-2"
                placeholder="at least 8 characters"
              />

              <label htmlFor="c-password" className="pswd-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="c-password"
                name="c-password"
                className="mt-2"
                placeholder="password should be match"
              />

              <button
                className="submit btn btn-warning my-4 password-change-button"
                type="submit"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="password-reset-success" onSubmit={handleSubmit}>
        <div className="success-box">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="success-icon text-success fs-1"
          />
          <h2 className="pt-3">Password Changed!</h2>
          <p>Your password has been changed successfully.</p>
          <button
            className="submit btn btn-warning my-4 return-to-login"
            type="submit"
            onClick={returnToLogin}
          >
            Return to Sign In
          </button>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default ResetPassword;
