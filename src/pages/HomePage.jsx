import { Box, Typography } from "@mui/material";
import React from "react";
const HomePage = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">
        Welcome to Myfilebox , Navigate to login page to explore more about the services
    
      </Typography>
    </Box>
  );
};

export default HomePage;