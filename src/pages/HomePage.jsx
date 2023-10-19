import { Container,Paper, Typography } from "@mui/material";
import React from "react";
const HomePage = () => {
  return (
    <Container maxWidth="md">
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" component="h1">
        Welcome to Myfilebox
      </Typography>
      <Typography variant="body1">
        We're delighted to have you here! Navigate to the login page to explore more about the application
      </Typography>
    </Paper>
  </Container>
  );
};

export default HomePage;