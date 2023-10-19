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
        We're delighted to have you here! Explore our content, products, and services. 
      </Typography>
    </Paper>
  </Container>
  );
};

export default HomePage;