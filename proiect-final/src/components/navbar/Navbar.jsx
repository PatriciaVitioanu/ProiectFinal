import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const storedUserId = localStorage.getItem("userId");
  const navRef = useRef();

  const showNavbar = () => {
    // Toggle class on the navbar to show/hide it
    navRef.current.classList.toggle("responsive_nav");

    // Toggle class on other elements to hide/show them
    document.body.classList.toggle("hide-body-content");
  };

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setAuth("");
    navigate("login");
  }

  function editUser() {
    navigate(`/edit-user/${storedUserId}`);
  }

  return (
    <header className="nav-header">
      <h3>TravelTribe</h3>
      <nav ref={navRef}>
        <Link to="/">Destinations</Link>
        {auth ? (
          <>
            <Link to="/create-destination">Create destination</Link>
            <a onClick={editUser}>Edit user</a>
            <a onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
