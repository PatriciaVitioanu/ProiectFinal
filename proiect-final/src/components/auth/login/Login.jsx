import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState();

  async function login(event) {
    event.preventDefault();
    setError(null);

    const formElement = event.target;
    const { email, password } = formElement;

    const user = {
      email: email.value,
      password: password.value,
    };

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();
    if (response.status === 400) {
      setError(body);
      return;
    }

    if (response.ok) {
      localStorage.setItem("accessToken", body.accessToken);
      localStorage.setItem("userId", body.user.id);
      setAuth(body.accessToken);
      navigate("/");
    }
  }

  return (
    <>
      <form onSubmit={login} className="login">
        <h2 className="login-heading">Login </h2>
        {error ? <p className="error">{error}</p> : ""}
        <label htmlFor="email"></label>
        <div className="row">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>

        <label htmlFor="password"></label>
        <div className="row">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button className="login-button">Login</button>
      </form>
    </>
  );
}
