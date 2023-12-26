import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        password,
      });
      setMessage(response.data.message);
      if (response.data.success === true) {
        setTimeout(() => {
          navigate("/verification");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error registering user");
    }
  };

  return (
    <div>
      <h2>Registration</h2>
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
      <button onClick={registerUser}>Register</button>
      <p>{message}</p>
    </div>
  );
};

export default Register;
