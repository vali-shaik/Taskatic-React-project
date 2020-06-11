import React, { useState } from "react";
import SocialMedia from "../SignUp/SocialMedia";
import {
  TextField,
  Button,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";
import "./Login.css";
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
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <TextField
            id="emailInput"
            label="Email"
            variant="outlined"
            aria-describedby="my-helper-text"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <FormHelperText id="my-helper-text">
            <p className="ErrorText">{passwordError}</p>
          </FormHelperText>
        </FormGroup>
        <Button
          onClick={validateForm}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <br></br>
        <br></br>
        <FormGroup>
          <a href="https://www.google.com">Forgot Password?</a>
        </FormGroup>
      </form>
      <br></br>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};
export default Login;
