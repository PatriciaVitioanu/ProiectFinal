import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const storedUserId = localStorage.getItem("userId");
  
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
    <header>
      <h3> Logo </h3>
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
            <li onClick={editUser}>Edit user</li>
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
    </header>
  );
}

export default Navbar;
