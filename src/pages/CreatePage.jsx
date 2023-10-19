import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import constants from "../utils/constants";
import axios from "axios";

function CreatePage() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(file, description);
    let formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    formData.append("email", localStorage.getItem("email"));
    console.log(localStorage.getItem("email"));
    try {
      axios
        .post(constants.BASE_URL + "/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // window.location.reload();
            window.location = "/files";
          }
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // setShow(true);
          }
        });
    } catch {
      // setShow(true);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0].size > 10485760) {
      // 10 MB in bytes
      alert("File size should be less than or equal to 10 MB");
      setFile(null);
    } else {
      setFile(e.target.files[0]);
    }
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
          Create File
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={handleFileChange}
            margin="normal"
            required
            fullWidth
            name="file"
            type="file"
            id="file"
          />
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
            endIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CreatePage;
