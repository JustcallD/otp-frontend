// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../store/slices/isAuthenticationSlice";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const loginUser = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         email,
//         password,
//       });
//       setMessage(response.data.message);
//       dispatch({ type: login });
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       setMessage("Error logging in");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button onClick={loginUser}>Login</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Login;

// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/isAuthenticationSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      setMessage(response.data.message);
      dispatch(login());
      // Redirect to home after successful login
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("Error logging in");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={loginUser}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
