import React from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";
import Footer2 from "./Footer2";

const SignUp = () => {
  return (
    <>
      <div className="form-page py-5">
        <div className="logo py-4">
          <img src="logo.png" alt="" />
        </div>
        <div className="form-container">
          <form action="https://api.web3forms.com/submit" method="post">
            <input
              type="hidden"
              name="access_key"
              value="5a150960-277f-4888-b1b4-0c51ccde442a"
            />
            <h2>Create Account</h2>

            <div className="form-content">
              <label htmlFor="name" className="pt-3">
                Your Name
              </label>
              <input type="text" name="name" id="name" className="mt-2" />

              <label htmlFor="email" className="pt-3">
                Email
              </label>
              <input type="text" name="email" id="email" className="mt-2" />

              <div className="pswd-box pt-3">
                <label htmlFor="password" className="pswd-label ">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2"
                placeholder="at least 8 characters"
              />
              <p className="mt-2 text-secondary">
                Passwords must be at least 8 characters.
              </p>

              <label htmlFor="c-password" className="pswd-label">
                Re-Enter Password
              </label>
              <input
                type="password"
                id="c-password"
                name="c-password"
                className="mt-2"
                placeholder="at least 8 characters"
              />

              <NavLink to="/sign-in">
                <button className="submit btn btn-warning my-4" type="submit">
                  Create Your BigShow Account
                </button>
              </NavLink>

              <p className="to-sign-in">
                Already have an account?
                <span>
                  <NavLink to="/sign-in"> Sign in</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default SignUp;
