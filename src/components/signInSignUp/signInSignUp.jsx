import React from "react";

import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signUp/signUp";

import { SignInAndSignUpContainer } from "./signInSignUp.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
