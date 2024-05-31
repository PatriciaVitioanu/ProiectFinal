import { useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate ();
    function register(event) {
        event.preventDefault();
    
    const formElement = event.target;
    const{ email, firstName, lastName, password, reTypePassword} = formElement;

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

fetch ("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(user)
}).then(() => navigate("/login"));
}

    return (
        <form onSubmit={register}>
            <filedset>
                <label htmlFor="firstName">First name:</label>
                <div>
                <input type="text" id="firstName" name="firstName"/>
                </div>
            </filedset>

            <filedset>
                <label htmlFor="lastName">Last name:</label>
                <div>
                <input type="text" id="lastName" name="lastName"/>
                </div>
            </filedset>

            <filedset>
                <label htmlFor="email">Email:</label>
                <div>
                <input type="email" id="email" name="email"/>
                </div>
            </filedset>

            <filedset>
                <label htmlFor="password">Password:</label>
                <div>
                <input type="password" id="password" name="password"/>
                </div>
            </filedset>

            <filedset>
                <label htmlFor="reTypepassword">Re type password:</label>
                <div>
                <input type="password" id="reTypepassword" name="reTypePassword"/>
                </div>
            </filedset>

            <button>Register</button>

        </form>
    );
}