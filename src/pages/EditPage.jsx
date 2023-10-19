import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { MuiFileInput } from "mui-file-input";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import constants from "../utils/constants";

const EditPage = () => {
  const location = useLocation();
  const state = location.state;
  let navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [description, setDescription] = useState(state[2]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(file, description);
    if (file) {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("filename", state[1]);
      formData.append("description", description);
      formData.append("email", localStorage.getItem("email"));

      let email = localStorage.getItem("email");
      axios
        .post(constants.BASE_URL + `/modifyfileS3/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          return navigate("/files");
        });
    }
  };

  const handleChange = (newValue) => {
    setFile(newValue);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#d2bcd6",
          padding: "10px",
          borderRadius: "5px",
          color: "#000",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit File
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <MuiFileInput value={file} onChange={handleChange} />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="text"
            id="description"
          />

          <Button
            type="button"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Upload
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditPage;
