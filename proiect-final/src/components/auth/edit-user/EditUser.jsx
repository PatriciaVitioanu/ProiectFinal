import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../App";
import "./EditUser.css";

async function fetchUser(setUser, userId, auth) {
  const response = await fetch(`http://localhost:3000/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  const userData = await response.json();
  setUser(userData);
}

export default function EditUser() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { idFromPath } = useParams();
  const [user, setUser] = useState({});

  if (!auth) {
    navigate("/login");
  }

  useEffect(() => {
    fetchUser(setUser, idFromPath, auth);
  }, [idFromPath, auth]);

  async function editUser(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, firstName, lastName, password, reTypePassword } =
      formElement;

    if (password.value !== reTypePassword.value) {
      alert("Passwords dont match!");
      return;
    }

    const updatedUser = {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };

    await fetch(`http://localhost:3000/users/${idFromPath}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify(updatedUser),
    }).then((response) => {
      if (!response.ok) alert("Wrong password!");
    });

    navigate("/");
  }

  return (
    <form onSubmit={editUser} className="edit-user">
      <label htmlFor="firstName">First name:</label>
      <div className="edit-row">
        <input
          type="text"
          id="firstName"
          name="firstName"
          defaultValue={user.firstName}
        />
      </div>

      <label htmlFor="lastName">Last name:</label>
      <div className="edit-row">
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue={user.lastName}
        />
      </div>

      <label htmlFor="email">Email:</label>
      <div className="edit-row">
        <input type="email" id="email" name="email" defaultValue={user.email} />
      </div>

      <label htmlFor="password"></label>
      <div className="edit-row">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <label htmlFor="reTypePassword"></label>
      <div className="edit-row">
        <input
          type="password"
          id="reTypePassword"
          name="reTypePassword"
          placeholder="Re type password"
          required
        />
      </div>

      <button type="submit" className="edit-button">
        Save Changes
      </button>
    </form>
  );
}
