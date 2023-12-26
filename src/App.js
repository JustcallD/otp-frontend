// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Register from "./pages/Register";
// import Verification from "./pages/verification";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import ProtectedRoute from "./ProtectedRoute";
// import { useSelector } from "react-redux";

// const App = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthentication);

//   return (
//     <>
//       <Routes>
//         {!isAuthenticated ? (
//           <>
//             <Route path="/register" element={<Register />} />
//             <Route path="/verification" element={<Verification />} />
//             <Route path="/login" element={<Login />} />
//           </>
//         ) : (
//           <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
//             <Route path="/" element={<Home />} />
//           </Route>
//         )}
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Verification from "./pages/verification";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthentication);
  console.log("Is Authenticated:", isAuthenticated);

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
          </Route>
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/login" element={<Login />} />
            {/* Redirect to login if not authenticated */}
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
