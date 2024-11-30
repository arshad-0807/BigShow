// import "./signin.css";
// import { Link, useNavigate } from "react-router-dom";
// import Footer2 from "./Footer2";
// import { userlists } from "../../customData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

// const SignIn = (email, password) => {
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const alert = document.querySelector(".alert-box");

//     const user = userlists.find(function (user) {
//       return user.emailid === email && user.password === password;
//     });

//     if (user) {
//       sessionStorage.setItem("token", user.token);
//       console.log("login Successful");

//       alert.classList.remove("show-alert");
//       navigate("/dashboard", {
//         state: { message: "You are successfully logged in" },
//       });
//     } else {
//       alert.classList.toggle("show-alert");
//     }
//   };

//   return (
//     <>
//       <div className="form-page py-5">
//         <div className="logo py-4">
//           <img src="logo.png" alt="" />
//         </div>
//         <div className="alert-box mb-4">
//           <div className="alert-box-inner">
//             <h4>There was a problem</h4>
//             <FontAwesomeIcon
//               icon={faTriangleExclamation}
//               className="alert-icon"
//             />
//             <div className="alert-message">
//               <p className="text-dark">Invalid email or password</p>
//             </div>
//           </div>
//         </div>
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Sign In</h2>

//             <div className="form-content">
//               <label htmlFor="email" className="pt-3">
//                 Email or mobile phone number
//               </label>
//               <input type="text" name="email" id="email" className="mt-2" />

//               <div className="pswd-box pt-3">
//                 <label htmlFor="password" className="pswd-label ">
//                   Password
//                 </label>
//                 <Link to="/forgot-password">Forgot your password</Link>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="mt-2"
//               />

//               <button className="submit btn btn-warning my-4" type="submit">
//                 Sign In
//               </button>

//               <input
//                 type="checkbox"
//                 name="signed-in"
//                 id="signed-in"
//                 className="d-inline-block "
//               />
//               <label htmlFor="signed-in" className="d-inline">
//                 Keep me signed in
//               </label>

//               <p className="text-center my-4 text-secondary fs-6">
//                 New to BigShow?
//               </p>

//               <Link to="/sign-up" className="btn create-account-btn">
//                 <button>Create BigShow Account</button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer2 />
//     </>
//   );
// };

// export default SignIn;


// import "./signin.css";
// import { Link, useNavigate } from "react-router-dom";
// import Footer2 from "./Footer2";
// import { userlists } from "../../customData"; // Ensure this contains user data
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showAlert, setShowAlert] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = userlists.find((user) => user.emailid === email && user.password === password);

//     if (user) {
//       sessionStorage.setItem("token", user.token);
//       navigate("/dashboard", {
//         state: { message: "You are successfully logged in" },
//       });
//     } else {
//       setShowAlert(true);
//     }
//   };

//   return (
//     <>
//       <div className="form-page py-5">
//         <div className="alert-box mb-4" style={{ display: showAlert ? "block" : "none" }}>
//           <div className="alert-box-inner">
//             <h4>There was a problem</h4>
//             <FontAwesomeIcon icon={faTriangleExclamation} className="alert-icon" />
//             <p className="text-dark">Invalid email or password</p>
//           </div>
//         </div>
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Sign In</h2>
//             <label htmlFor="email" className="pt-3">Email or mobile phone number</label>
//             <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2" />

//             <div className="pswd-box pt-3">
//               <label htmlFor="password" className="pswd-label">Password</label>
//               <Link to="/forgot-password">Forgot your password?</Link>
//             </div>
//             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2" />

//             <button type="submit" className="submit btn btn-warning my-4">Sign In</button>
//             <p className="text-center my-4 text-secondary fs-6">New to BigShow?</p>
//             <Link to="/sign-up" className="btn create-account-btn">Create BigShow Account</Link>
//           </form>
//         </div>

//         <Footer2 />
//       </div>
//     </>
//   );
// };

// export default SignIn;




// 28november2024


import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "./Footer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(false); // Reset alert state

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      sessionStorage.setItem("token", data.user.token); // Store user token if needed
      navigate("/dashboard", {
        state: { message: "You are successfully logged in" },
      });
    } catch (error) {
      console.error("Error logging in:", error);
      setShowAlert(true);
    }
  };

  return (
    <>
      <div className="form-page py-5">
        <div className="alert-box mb-4" style={{ display: showAlert ? "block" : "none" }}>
          <div className="alert-box-inner">
            <h4>There was a problem</h4>
            <FontAwesomeIcon icon={faTriangleExclamation} className="alert-icon" />
            <p className="text-dark">Invalid email or password</p>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <label htmlFor="email" className="pt-3">Email or mobile phone number</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2" />

            <div className="pswd-box pt-3">
              <label htmlFor="password" className="pswd-label">Password</label>
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2" />

            <button type="submit" className="submit btn btn-warning my-4">Sign In</button>
            <p className="text-center my-4 text-secondary fs-6">New to BigShow?</p>
            <Link to="/sign-up" className="btn create-account-btn">Create BigShow Account</Link>
          </form>
        </div>

        <Footer2 />
      </div>
    </>
  );
};

export default SignIn;
