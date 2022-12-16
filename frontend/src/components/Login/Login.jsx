import React, { useState } from "react";
import "./Login.scss";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        await userLogin();
    };
    const userLogin = async () => {
        console.log("login")
    };

    return (
        <div className="login">
            <form onSubmit={onSubmit}>
                <label className="form__label">
                    Email
                    <input type="email" className="form__field" name="firstName" required
                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <label className="form__label">
                    Password
                    <input type="password" className="form__field" name="firstName" required
                           onChange={e => setPassword(e.target.value)} value={password}/>
                </label>
                <div>
                    <button className="btn-auth">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;