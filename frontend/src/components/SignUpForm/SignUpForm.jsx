import React, { useState } from "react";
import "./SignUpForm.scss";

function SignUpForm() {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNo: ""
    });


    const onSubmit = (event) => {
        event.preventDefault()
        setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNo: ""
        });
        console.log("SIGN UO")

    };

    const userLogin = async () => {
        console.log("LOGIn")
    };

    const handleChangeInput = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        const newFormValues = {
            email: formValues.email,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            password: formValues.password,
            phoneNo: formValues.phoneNo,
            [name]: value
        };
        setFormValues(newFormValues);
    };
    return (
        <div className="sign-up">
            <form onSubmit={onSubmit}>
                <label className="form__label">
                    First Name
                    <input type="text" className="form__field" name="firstName" required onChange={handleChangeInput}
                           value={formValues.firstName}/>
                </label>
                <label className="form__label">
                    Last Name
                    <input type="text" className="form__field" name="lastName" required onChange={handleChangeInput}
                           value={formValues.lastName}/>
                </label>
                <label className="form__label">
                    Email
                    <input type="email" className="form__field" name="email" required onChange={handleChangeInput}
                           value={formValues.email}/>
                </label>
                <label className="form__label">
                    Password
                    <input type="password" className="form__field" name="password" required onChange={handleChangeInput}
                           value={formValues.password}/>
                </label>
                <label className="form__label">
                    Phone Number
                    <input type="number" className="form__field" name="phoneNo" required onChange={handleChangeInput}
                           value={formValues.phoneNo}/>
                </label>
                <button type="submit" className="btn-auth">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;