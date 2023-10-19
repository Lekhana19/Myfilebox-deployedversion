import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { red } from "@mui/material/colors";

const File = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      {data ? (
        data.map((file, index) => (
          <Card
            key={index}
            sx={{ minWidth: 275, margin: "10px" }}
            // style={{ width: "800px" }}
            style={{ backgroundColor: "#d2bcd6" }}
            variant="outlined"
          >
            <CardContent>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Created at : {file[5]}
                </Typography>
                <Typography variant="h5" component="div">
                  {file[1]}
                </Typography>

                <Typography variant="h6" component="div">
                  {file[2]}
                </Typography>
              </Box>
            </CardContent>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href={`${file[4]}`} download target="_blank">
                <IconButton color="primary" aria-label="delete" size="large">
                  <FileDownloadIcon fontSize="inherit" />
                </IconButton>
              </a>
              <Link to={`/edit/${file[0]}`} state={file}>
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Link>
              <Link to={`/delete/${file[0]}`} state={file}>
                <IconButton color="error" aria-label="delete" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Link>
            </Box>
          </Card>
        ))
      ) : (
        <p>No files to display..</p>
      )}
    </>
  );
};

export default File;
