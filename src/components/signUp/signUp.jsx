import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.jsx";
import CustomButton from "../custom-button/custom-button.jsx";
import { Link } from "react-router-dom";

import { setCurrentUser } from "../../redux/user/user.actions";

import { SignUpContainer, SignUpTitle } from "./signup.styles";
import { ButtonsBarContainer } from "../signin/signin.styles";

const SignUp = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: displayName,
        email: email,
        pwd: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        props.setCurrentUser(user);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">SIGN UP</CustomButton>
          <Link to="/login">
            <CustomButton>Have an account?</CustomButton>
          </Link>
        </ButtonsBarContainer>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
