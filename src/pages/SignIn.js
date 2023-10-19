import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { authenticate } from "../services/authenticate";
import constants from "../utils/constants";
import axios from "axios";
import { Alert } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("admin.com")) {
      axios
        .get(constants.BASE_URL + constants.PATHS.LOGIN, {
          params: {
            email,
            password,
          },
        })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem("email", email);
            window.location = "/admin";
          }
        })
        .catch(function (error) {
          console.log(error);
          setShow(true);
        });
    }
    authenticate(email, password)
      .then(
        (data) => {
          console.log(data);
          localStorage.setItem("email", email);
          window.location = "/files";
        },
        (err) => {
          console.log(err);
          setShow(true);
        }
      )
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {show && (
          <Alert variant="outlined" severity="error">
            Invalid credentials!
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            value={email}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            value={password}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
