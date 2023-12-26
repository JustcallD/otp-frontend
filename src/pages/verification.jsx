// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Verification = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/verify", {
//         email,
//         otp,
//       });
//       setMessage(response.data.message);
//       if (response.data.success === true) {
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Error registering user");
//     }
//   };

//   return (
//     <div>
//       <h2>Email Verification</h2>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Otp:</label>
//         <input
//           type="otp"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />
//       </div>
//       <button onClick={verifyOtp}>Verify Email</button>
//       <br></br>
//       <span>{message}</span>
//     </div>
//   );
// };

// export default Verification;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Verification = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/verify", {
//         email,
//         otp,
//       });
//       setMessage(response.data.message);
//       if (response.data.success === true) {
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Error verifying email");
//     }
//   };

//   return (
//     <div>
//       <h2>Email Verification</h2>
//       <div>
//         <label>Email:</label>
//         <input
//           type="string"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>OTP:</label>
//         <input
//           type="number"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />
//       </div>
//       <button onClick={verifyOtp}>Verify Email</button>
//       <br />
//       <span>{message}</span>
//     </div>
//   );
// };

// export default Verification;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify", {
        email,
        otp,
      });
      setMessage(response.data.message);
      if (response.data.success === true) {
        setTimeout(()=>{
            navigate("/login");
        }, 2000)
       
      }
    } catch (error) {
      console.error(error);
      setMessage("Error verifying email");
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <div>
        <label>Email:</label>
        <input
          type="email" // Changed to "email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>OTP:</label>
        <input
          type="number" // Changed to "text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <button onClick={verifyOtp}>Verify Email</button>
      <br />
      <span>{message}</span>
    </div>
  );
};

export default Verification;
