// import { useState } from "react";
// import "./signin.css";
// import { NavLink } from "react-router-dom";
// import Footer2 from "./Footer2";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     password: "",
//     cpassword: "",
//     gender: "",
//     // dob: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return regex.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (formData.name === "") {
//       newErrors.name = "Name cannot be empty";
//     }
//     if (formData.email === "") {
//       newErrors.email = "Email cannot be empty";
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (formData.number === "") {
//       newErrors.number = "Mobile number cannot be empty";
//     }
//     if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//     }
//     if (formData.cpassword !== formData.password) {
//       newErrors.cpassword = "Passwords do not match";
//     }
//     if (formData.gender === "") {
//       newErrors.gender = "Gender should be selected";
//     }
//     // if (formData.dob === "") {
//     //   newErrors.dob = "Date of birth cannot be empty";
//     // }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <>
//       <div className="form-page py-5">
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Create Account</h2>

//             <div className="form-content">
//               <label htmlFor="name" className="pt-3">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="mt-2"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <p className="error">{errors.name}</p>}

//               <label htmlFor="email" className="pt-3">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 className="mt-2"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}

//               <label htmlFor="number" className="pt-3">
//                 Mobile Number
//               </label>
//               <input
//                 type="number"
//                 name="number"
//                 id="number"
//                 className="mt-2"
//                 value={formData.number}
//                 onChange={handleChange}
//                 onKeyDown={(e) =>
//                   (e.key === "e" || e.key === "-" || e.key === "+") &&
//                   e.preventDefault()
//                 }
//                 onInput={(e) =>
//                   (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
//                 }
//               />
//               {errors.number && <p className="error">{errors.number}</p>}

//               <div className="pswd-box pt-3">
//                 <label htmlFor="password" className="pswd-label">
//                   Password
//                 </label>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}

//               <label htmlFor="cpassword" className="pswd-label pt-3">
//                 Re-Enter Password
//               </label>
//               <input
//                 type="password"
//                 id="cpassword"
//                 name="cpassword"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.cpassword}
//                 onChange={handleChange}
//               />
//               {errors.cpassword && <p className="error">{errors.cpassword}</p>}

//               <label htmlFor="gender" className="pt-3">
//                 Gender
//               </label>
//               <div>
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="male"
//                   className="d-inline gender-input mt-3"
//                   value="Male"
//                   checked={formData.gender === "male"}
//                   onChange={handleChange}
//                 />
//                 Male
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="Female"
//                   className="d-inline gender-input mt-3"
//                   value="female"
//                   checked={formData.gender === "female"}
//                   onChange={handleChange}
//                 />
//                 Female
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="Other"
//                   className="d-inline gender-input mt-3"
//                   value="other"
//                   checked={formData.gender === "other"}
//                   onChange={handleChange}
//                 />
//                 Other
//               </div>
//               {errors.gender && <p className="error">{errors.gender}</p>}

//               {/* <label htmlFor="dob" className="pt-3">
//                 Date Of Birth
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 id="dob"
//                 className="mt-2"
//                 value={formData.dob}
//                 onChange={handleChange}
//               />
//               {errors.dob && <p className="error">{errors.dob}</p>} */}

//               <button className="submit btn btn-warning my-4" type="submit">
//                 Continue
//               </button>

//               <p className="to-sign-in">
//                 Already have an account?
//                 <span>
//                   <NavLink to="/sign-in"> Sign in</NavLink>
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer2 />
//     </>
//   );
// };

// export default SignUp;






// import { useState } from "react";
// import "./signin.css";
// import { NavLink } from "react-router-dom";
// import Footer2 from "./Footer2";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     password: "",
//     cpassword: "",
//     gender: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return regex.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     // Validation logic...
//     // Set errors in newErrors object
//     validateEmail()
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Handle successful signup, e.g., API call to save user data
//       alert("Form submitted successfully!");
//       // Redirect or clear form
//     }
//   };

//   return (
//     <>
//       <div className="form-page py-5">
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Create Account</h2>
//             <div className="form-content">
//               <label htmlFor="name" className="pt-3">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="mt-2"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <p className="error">{errors.name}</p>}

//               <label htmlFor="email" className="pt-3">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 className="mt-2"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}

//               <label htmlFor="number" className="pt-3">
//                 Mobile Number
//               </label>
//               <input
//                 type="number"
//                 name="number"
//                 id="number"
//                 className="mt-2"
//                 value={formData.number}
//                 onChange={handleChange}
//                 onKeyDown={(e) =>
//                   (e.key === "e" || e.key === "-" || e.key === "+") &&
//                   e.preventDefault()
//                 }
//                 onInput={(e) =>
//                   (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
//                 }
//               />
//               {errors.number && <p className="error">{errors.number}</p>}

//               <div className="pswd-box pt-3">
//                 <label htmlFor="password" className="pswd-label">
//                   Password
//                 </label>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}

//               <label htmlFor="cpassword" className="pswd-label pt-3">
//                 Re-Enter Password
//               </label>
//               <input
//                 type="password"
//                 id="cpassword"
//                 name="cpassword"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.cpassword}
//                 onChange={handleChange}
//               />
//               {errors.cpassword && <p className="error">{errors.cpassword}</p>}

//               <label htmlFor="gender" className="pt-3">
//                 Gender
//               </label>
//               <div>
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="male"
//                   className="d-inline gender-input mt-3"
//                   value="male"
//                   checked={formData.gender === "male"}
//                   onChange={handleChange}
//                 />
//                 Male
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="Female"
//                   className="d-inline gender-input mt-3"
//                   value="female"
//                   checked={formData.gender === "female"}
//                   onChange={handleChange}
//                 />
//                 Female
//                 <input
//                   type="radio"
//                   name="gender"
//                   id="Other"
//                   className="d-inline gender-input mt-3"
//                   value="other"
//                   checked={formData.gender === "other"}
//                   onChange={handleChange}
//                 />
//                 Other
//               </div>
//               {errors.gender && <p className="error">{errors.gender}</p>}

//               {/* <label htmlFor="dob" className="pt-3">
//                 Date Of Birth
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 id="dob"
//                 className="mt-2"
//                 value={formData.dob}
//                 onChange={handleChange}
//               />
//               {errors.dob && <p className="error">{errors.dob}</p>} */}

//               <button className="submit btn btn-warning my-4" type="submit">
//                 Continue
//               </button>

//               <p className="to-sign-in">
//                 Already have an account?
//                 <span>
//                   <NavLink to="/sign-in"> Sign in</NavLink>
//                 </span>
//               </p>
//             </div>
//             {/* <button type="submit" className="submit btn btn-warning my-4">Continue</button>
//           <p className="to-sign-in">
//             Already have an account? <NavLink to="/sign-in">Sign in</NavLink>
//           </p> */}
//           </form>
//         </div>
//         <Footer2 />
//       </div>

//     </>
//   );
// };

// export default SignUp;





// latest

import { useState } from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";
import Footer2 from "./Footer2";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.number) newErrors.number = "Mobile number is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.cpassword) {
      newErrors.cpassword = "Passwords do not match.";
    }
    if (!formData.gender) newErrors.gender = "Gender is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Make API call to save user data
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.success) {
          alert("Form submitted successfully!");
          // Optionally redirect or clear the form
          setFormData({
            name: "",
            email: "",
            number: "",
            password: "",
            cpassword: "",
            gender: "",
          });
        } else {
          alert("Error: " + data.message); // Handle errors returned by the server
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="form-page py-5">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <div className="form-content">
              <label htmlFor="name" className="pt-3">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-2"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <label htmlFor="email" className="pt-3">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="mt-2"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <label htmlFor="number" className="pt-3">
                Mobile Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="mt-2"
                value={formData.number}
                onChange={handleChange}
                onKeyDown={(e) =>
                  (e.key === "e" || e.key === "-" || e.key === "+") &&
                  e.preventDefault()
                }
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
              />
              {errors.number && <p className="error">{errors.number}</p>}

              <div className="pswd-box pt-3">
                <label htmlFor="password" className="pswd-label">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2"
                placeholder="at least 8 characters"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <label htmlFor="cpassword" className="pswd-label pt-3">
                Re-Enter Password
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="mt-2"
                placeholder="at least 8 characters"
                value={formData.cpassword}
                onChange={handleChange}
              />
              {errors.cpassword && <p className="error">{errors.cpassword}</p>}

              <label htmlFor="gender" className="pt-3">
                Gender
              </label>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  className="d-inline gender-input mt-3"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  id="Female"
                  className="d-inline gender-input mt-3"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
                <input
                  type="radio"
                  name="gender"
                  id="Other"
                  className="d-inline gender-input mt-3"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
                Other
              </div>
              {errors.gender && <p className="error">{errors.gender}</p>}

              <button className="submit btn btn-warning my-4" type="submit">
                Continue
              </button>

              <p className="to-sign-in">
                Already have an account?
                <span>
                  <NavLink to="/sign-in"> Sign in</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
        <Footer2 />
      </div>
    </>
  );
};

export default SignUp;







//------------------------------------------------
// import React, { useState } from "react";
// import "./signin.css";
// import { NavLink } from "react-router-dom";
// import Footer2 from "./Footer2";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     password: "",
//     cpassword: "",
//     gender: "",
//     dob: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return regex.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (formData.name === "") {
//       newErrors.name = "Name can not be empty";
//     } else if (formData.email === "") {
//       newErrors.email = "Email can not be empty";
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Invalid email address";
//     } else if (formData.number === "") {
//       newErrors.number = "Mobile number can not be empty";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//     } else if (formData.cpassword !== formData.password) {
//       newErrors.cpassword = "password didn't match";
//     } else if (formData.gender === "") {
//       newErrors.gender = "Gender can not be empty";
//     }

//     setErrors(newErrors);

//     return object.keys(newErrors).length === 0;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       alert("Form submitted successfully!");
//     }
//   };
//   return (
//     <>
//       <div className="form-page py-5">
//         {/* <div className="logo py-4">
//           <img src="logo.png" alt="" />
//         </div> */}
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Create Account</h2>

//             <div className="form-content">
//               <label htmlFor="gender" className="pt-3">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="mt-2"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <p className="error">{errors.name}</p>}
//               <label htmlFor="email" className="pt-3">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 className="mt-2"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}
//               <label htmlFor="number" className="pt-3">
//                 Mobile Number
//               </label>
//               <input
//                 type="number"
//                 name="number"
//                 id="number"
//                 className="mt-2"
//                 value={formData.number}
//                 onChange={handleChange}
//                 onInput={(e) =>
//                   (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
//                 }
//               />
//               {errors.number && <p className="error">{errors.number}</p>}
//               <div className="pswd-box pt-3">
//                 <label htmlFor="password" className="pswd-label ">
//                   Password
//                 </label>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}
//               <p className="mt-2 text-secondary">
//                 Passwords must be at least 8 characters.
//               </p>
//               <label htmlFor="cpassword" className="pswd-label">
//                 Re-Enter Password
//               </label>
//               <input
//                 type="password"
//                 id="cpassword"
//                 name="cpassword"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.cpassword}
//                 onChange={handleChange}
//               />
//               {errors.cpassword && <p className="error">{errors.cpassword}</p>}
//               <label htmlFor="gender" className="pt-3">
//                 Gender
//               </label>
//               <input
//                 type="radio"
//                 name="gender"
//                 id="male"
//                 className="d-inline gender-input mt-3"
//                 value={formData.gender}
//                 onChange={handleChange}
//               />
//               {errors.gender && <p className="error">{errors.gender}</p>}
//               Male
//               <input
//                 type="radio"
//                 name="gender"
//                 id="female"
//                 className="d-inline gender-input mt-3"
//                 value={formData.gender}
//                 onChange={handleChange}
//               />
//               {errors.gender && <p className="error">{errors.gender}</p>}
//               Female
//               <input
//                 type="radio"
//                 name="gender"
//                 id="other"
//                 className="d-inline gender-input mt-3"
//                 value={formData.gender}
//                 onChange={handleChange}
//               />
//               {errors.gender && <p className="error">{errors.gender}</p>}
//               Other
//               <label htmlFor="dob" className="pt-3">
//                 Date Of Birth
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 id="dob"
//                 className="mt-2"
//                 value={formData.dob}
//                 onChange={handleChange}
//               />
//               {/* <NavLink to=""> */}
//               <button className="submit btn btn-warning my-4" type="submit">
//                 Continue
//               </button>
//               {/* </NavLink> */}
//               <p className="to-sign-in">
//                 Already have an account?
//                 <span>
//                   <NavLink to="/sign-in"> Sign in</NavLink>
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer2 />
//     </>
//   );
// };

// export default SignUp;

// import React, { useState } from "react";
// import "./signin.css";
// import { NavLink } from "react-router-dom";
// import Footer2 from "./Footer2";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.cPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:5000/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert("Account created successfully!");
//       } else {
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       alert(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <>
//       <div className="form-page py-5">
//         <div className="logo py-4">
//           <img src="logo.png" alt="" />
//         </div>
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Create Account</h2>

//             <div className="form-content">
//               <label htmlFor="name" className="pt-3">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="mt-2"
//                 value={formData.name}
//                 onChange={handleChange}
//               />

//               <label htmlFor="email" className="pt-3">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 className="mt-2"
//                 value={formData.email}
//                 onChange={handleChange}
//               />

//               <div className="pswd-box pt-3">
//                 <label htmlFor="password" className="pswd-label ">
//                   Password
//                 </label>
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               <p className="mt-2 text-secondary">
//                 Passwords must be at least 8 characters.
//               </p>

//               <label htmlFor="cPassword" className="pswd-label">
//                 Re-Enter Password
//               </label>
//               <input
//                 type="password"
//                 id="cPassword"
//                 name="cPassword"
//                 className="mt-2"
//                 placeholder="at least 8 characters"
//                 value={formData.cPassword}
//                 onChange={handleChange}
//               />

//               <button className="submit btn btn-warning my-4" type="submit">
//                 Create Your BigShow Account
//               </button>

//               <p className="to-sign-in">
//                 Already have an account?
//                 <span>
//                   <NavLink to="/sign-in"> Sign in</NavLink>
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer2 />
//     </>
//   );
// };

// export default SignUp;
