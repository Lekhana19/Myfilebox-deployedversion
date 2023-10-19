import "./App.css";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "./components/Navbar";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  document.body.style.backgroundColor = "#f2f2f2";

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>

      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
      </Container>

      <Outlet />
    </>
  );
}

export default App;
