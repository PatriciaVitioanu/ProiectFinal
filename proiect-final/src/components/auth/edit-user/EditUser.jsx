import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../App";

async function fetchUser(setUser, userId, auth) {
  const response = await fetch(`http://localhost:3000/users/${userId}`, {
    headers: {
      "Authorization": `Bearer ${auth}`
    }
  });
  const userData = await response.json();
  setUser(userData);
}

export default function EditUser() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { idFromPath } = useParams();
  const [user, setUser] = useState({});

  if (!auth){
    navigate("/login")
  }

  fetchUser(setUser, idFromPath, auth);

  async function editUser(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, firstName, lastName, password, reTypePassword } = formElement;
    console.log(firstName.value, lastName.value);
    
    if (password.value !== reTypePassword.value) {
      console.log("Passwords don't match");
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
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${auth}`
      },
      body: JSON.stringify(updatedUser),
    });

    navigate("/");
  }

  return (
    <form onSubmit={editUser}>
      <fieldset>
        <label htmlFor="firstName">First name:</label>
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={user.firstName}
          />
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="lastName">Last name:</label>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={user.lastName}
          />
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email:</label>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
          />
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password:</label>
        <div>
          <input type="password" id="password" name="password" />
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="reTypePassword">Re type password:</label>
        <div>
          <input type="password" id="reTypePassword" name="reTypePassword" />
        </div>
      </fieldset>

      <button type="submit">Save Changes</button>
    </form>
  );
}
