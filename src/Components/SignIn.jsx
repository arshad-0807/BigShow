import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "./Footer2";
import { userlists } from "../../customData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const alert = document.querySelector(".alert-box");

    const user = userlists.find(function (user) {
      return user.emailid === email && user.password === password;
    });

    if (user) {
      alert.classList.remove("show-alert");
      navigate("/", {
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
              <p className="text-dark">Invalid email or password</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>

            <div className="form-content">
              <label htmlFor="email" className="pt-3">
                Email or mobile phone number
              </label>
              <input type="text" name="email" id="email" className="mt-2" />

              <div className="pswd-box pt-3">
                <label htmlFor="password" className="pswd-label ">
                  Password
                </label>
                <Link to="/forgot-password">Forgot your password</Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2"
              />

              <button className="submit btn btn-warning my-4" type="submit">
                Sign In
              </button>

              <input
                type="checkbox"
                name="signed-in"
                id="signed-in"
                className="d-inline-block "
              />
              <label htmlFor="signed-in" className="d-inline">
                Keep me signed in
              </label>

              <p className="text-center my-4 text-secondary fs-6">
                New to BigShow?
              </p>

              <Link to="/sign-up" className="btn create-account-btn">
                <button>Create BigShow Account</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default SignIn;
