import { Container,Paper, makeStyles, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";


const theme = createTheme({
    palette: {
      primary: {
        main: '#1976D2', // Customize the primary color
      },
      secondary: {
        main: '#FFC107', // Customize the secondary color
      },
    },
    typography: {
      h4: {
        fontWeight: 600, // Make heading text bold
        marginBottom: '20px', // Add spacing below the heading
      },
      body1: {
        fontSize: '1.2rem', // Increase the font size of the body text
      },
    },
  });

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '20px',
      marginTop: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent white background
    },
  }));

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