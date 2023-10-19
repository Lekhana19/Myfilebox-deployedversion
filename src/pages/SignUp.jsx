import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { Navigate } from "react-router-dom";
import userpool from "../utils/userpool";
import axios from "axios";
import constants from "../utils/constants";
// import { Password } from "@mui/icons-material";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [verifyProcess, setVerifyProcess] = useState(false);
  const [OTP, setOTP] = useState("");
  const verifyAccount = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: userpool,
    });
    console.log(user);
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't verify account");
      } else {
        console.log(data);
        alert("Account verified successfully");
        window.location.href = "/login";
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      })
    );
    let username = email;
    userpool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
        alert("Failed");
      } else {
        console.log(data);
        alert("user added successfully");
        setVerifyProcess(true);
        // Navigate("/files");
      }
    });
    axios
      .post(constants.BASE_URL + constants.PATHS.CREATE_ACCOUNT, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      {verifyProcess == true && (
        <form onSubmit={verifyAccount}>
          Enter the OTP:
          <input
            type="text"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
          <br />
          <button type="submit">Verify</button>
        </form>
      )}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
