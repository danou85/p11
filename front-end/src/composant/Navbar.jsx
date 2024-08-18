import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="logout">
      {user ? (
        <>
          <NavLink className="main-nav-item" to="/User">
            <FontAwesomeIcon icon={faUserCircle} />
            {user.userName}
          </NavLink>
          <span onClick={() => logout()}>
            <FontAwesomeIcon icon={faSignOut} />
            Sign Out
          </span>
        </>
      ) : (
        <NavLink className="main-nav-item" to="/Login">
          <FontAwesomeIcon icon={faUserCircle} />
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;