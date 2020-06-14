import React, { useState } from "react";
import SocialMedia from "../SignUp/SocialMedia";

import {
  TextField,
  Button,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";
import "./Login.css";
import NewUser from "./NewUser";
const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    console.log("Clicked");
  };

  const validateForm = () => {
    if (email.length === 0) {
      setEmailError("* email id cannot be empty");
    }
    if (password.length === 0) {
      setPasswordError("* password cannot be empty");
    }
  };

  return (
    <div className="LoginHomePage container">
      <div className="row">
        <NewUser />
      </div>
      <div className="Login row">
        <p className="Title">Log In</p>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              id="emailInput"
              label="Email"
              variant="outlined"
              aria-describedby="my-helper-text"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className={emailError.length > 0 ? "errorTextField" : ""}
            />
            <FormHelperText id="my-helper-text">
              <p className="ErrorText">{emailError}</p>
            </FormHelperText>
          </FormGroup>
          <FormGroup>
            <TextField
              id="passwordInput"
              label="Password"
              variant="outlined"
              aria-describedby="my-helper-text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              type="password"
            />
            <FormHelperText id="my-helper-text">
              <p className="ErrorText">{passwordError}</p>
            </FormHelperText>
          </FormGroup>
          {/* <FormGroup>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
          </FormGroup>
          <br></br> */}
          <Button
            onClick={validateForm}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <br></br>
          <br></br>
          <FormGroup>
            <a href="https://www.google.com">Forgot Password?</a>
          </FormGroup>
        </form>
        <br></br>
        <p className="NormalText">or Login with </p>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
export default Login;
