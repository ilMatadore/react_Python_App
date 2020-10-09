import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.jsx";
import CustomButton from "../custom-button/custom-button.jsx";
import { Link } from "react-router-dom";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./signin.styles";
import { setCurrentUser } from "../../redux/user/user.actions.js";

const SignIn = (props) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <Link to="/register">
            <CustomButton>Not registered yet?</CustomButton>
          </Link>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
