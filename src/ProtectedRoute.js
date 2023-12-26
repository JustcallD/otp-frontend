// import React from "react";
// import { useNavigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ isAuthenticated }) => {
//   const navigate = useNavigate();
//   if (!isAuthenticated) {
//     if (
//       window.location.pathname === "/login" ||
//       window.location.pathname === "/register"
//     ) {
//       navigate("/login");
//     }
//   } else {
//     return <Outlet />;
//   }
// };

// export default ProtectedRoute;

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ isAuthenticated }) => {
//   if (!isAuthenticated) {
//     if (
//       window.location.pathname !== "/login" &&
//       window.location.pathname !== "/register"
//     ) {
//       // Redirect to login when not authenticated and not on the login/register page
//       return <Navigate to="/login" />;
//     }
//     // Return null or some loading component while redirecting
//     return null;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;

// ProtectedRoute.js
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ isAuthenticated }) => {
//   if (isAuthenticated === false) {
//     return <Outlet />;
//   }

//   // Allow access to other routes if not authenticated
//   return <Navigate to="/login" />;
// };

// export default ProtectedRoute;

// const ProtectedRoute = ({ isAuthenticated, isRegistered }) => {
//   const navigate = useNavigate();
//   if (!isAuthenticated) {
//     if (window.location.pathname !== "/login") {
//       navigate("/login");
//     }
//   }
//   // else if (!isRegistered && window.location.pathname === "/verification") {
//   //   // Handle verification access error
//   //   navigate("/"); // Or redirect to a suitable page
//   // }
//   else {
//     return <Outlet />;
//   }
// };

import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = ({ isAuthenticated, redirectPath = "/login" }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
