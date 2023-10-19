import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import constants from "../utils/constants";

const DeletePage = () => {
  const location = useLocation();
  const state = location.state;
  let navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("clicked");
    let email = localStorage.getItem("email");
    axios
      .delete(constants.BASE_URL + `/deletefileS3/${email}/${state[1]}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        return navigate("/files");
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Delete File
        </Typography>
        <Typography variant="p">
          Are you sure want to delete the file?
        </Typography>
        <Typography variant="p">{state[1]}</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Button
            type="button"
            color="error"
            onClick={handleDelete}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            delete
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DeletePage;
