import { useNavigate } from "react-router-dom";
import "./Register.css";

export function Register() {
  const navigate = useNavigate();
  function register(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, firstName, lastName, password, reTypePassword } =
      formElement;

    if (password.value !== reTypePassword.value) {
      console.warn("Passwords don't match");
      return;
    }

    const user = {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };

    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => navigate("/login"));
  }

  return (
    <form onSubmit={register} className="register">
      <label htmlFor="firstName"></label>
      <div className="register-row">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
        />
      </div>

      <label htmlFor="lastName"></label>
      <div className="register-row">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
        />
      </div>

      <label htmlFor="email"></label>
      <div className="register-row">
        <input type="email" id="email1" name="email" placeholder="Email" />
      </div>

      <label htmlFor="password"></label>
      <div className="register-row">
        <input
          type="password"
          id="password1"
          name="password"
          placeholder="Password"
        />
      </div>

      <label htmlFor="reTypepassword"></label>
      <div className="register-row">
        <input
          type="password"
          id="reTypepassword"
          name="reTypePassword"
          placeholder="Confirm password"
        />
      </div>

      <button className="register-button">Register</button>
    </form>
  );
}
