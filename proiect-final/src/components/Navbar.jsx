import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("accessToken");
    setAuth("");
    navigate("login");
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Destination List</Link>
        </li>
        {auth ? (
          <>
            <li onClick={logout}>Logout</li>
            <li>
              <Link to="/create-destination">Create destination</Link>
            </li>
          </>
        ) : (
          <><li>
              <Link to="/login">Login</Link>
            </li><li>
            <Link to="/register">Register</Link>
              </li></>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
