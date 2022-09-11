import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//to check if the user is Authenticated
//if yes,take him to the protected route
//else navigate/edirect him to the login page

export const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
//   console.log(location);

  if (!auth) {
    //send him to login page
    return (
      <Navigate
       to="/login"
        replace
         state={{ data: location.pathname}} />
    );
  }

  return children;
};
