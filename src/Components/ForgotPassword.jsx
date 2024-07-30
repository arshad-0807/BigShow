import "./signin.css";
import { useNavigate } from "react-router-dom";
import Footer2 from "./Footer2";
import { userlists } from "../../customData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    // const password = e.target.password.value;
    const alert = document.querySelector(".alert-box");

    const user = userlists.find(function (user) {
      return user.emailid === email;
    });

    if (user) {
      alert.classList.remove("show-alert");
      navigate("/otp-validation", {
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
              <p className="text-dark">Invalid email or mobile number</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Password Assistance</h2>
            <p>
              Enter the email address or mobile phone number associated with
              your IMDb account.
            </p>

            <div className="form-content">
              <label htmlFor="email" className="pt-3">
                Email or mobile phone number
              </label>
              <input type="text" name="email" id="email" className="mt-2" />

              <button className="submit btn btn-warning my-4" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default ForgotPassword;
