import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Badge, Box, Grid, IconButton, Typography } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import axios from "axios";
import constants from "../utils/constants";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("resume.pdf", "12 Oct 2023", "Jeswanth vadlamudi"),
  createData("resume.pdf", "12 Oct 2023", "Jeswanth vadlamudi"),
  createData("resume.pdf", "12 Oct 2023", "Jeswanth vadlamudi"),
  createData("resume.pdf", "12 Oct 2023", "Jeswanth vadlamudi"),
];

export default function AdminPage() {
  const [data, setData] = useState([]);
  const [uploaded, setUploaded] = useState(0);
  const [deleted, setDeleted] = useState(0);
  const [modified, setModified] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .post(constants.BASE_URL + "/filemanager", {
        email: localStorage.getItem("email"),
      })
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setDeleted(response.data.file_deleted);
        setModified(response.data.file_modified);
        setUploaded(response.data.file_insert);
      });
    axios
      .post(constants.BASE_URL + "/listusers", {
        email: localStorage.getItem("email"),
      })
      .then((response) => {
        console.log(response);
        setUsers(response.data.data);
      });
  }, []);
  return (
    <>
      <Grid container spacing={2} mt={5} centered>
        <Grid item xs={2}>
          {/* <div>xs=8</div> */}
        </Grid>
        <Grid item xs={8}>
          <Box
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            mb={3}
          >
            <Typography variant="h3">Users</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell align="center">Username</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>lekhana.gadde@sjsu.edu</TableCell>
                <TableCell align="center">Lekhana Gadde</TableCell>
              </TableBody>
            </Table>
            {/* {users.map((user, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user[3]}
                    </TableCell>
                    <TableCell align="center">{user[0]}</TableCell>
                  </TableRow>
                ))} */}
          </TableContainer>
        </Grid>
        <Grid item xs={2}>
          {/* <div>xs=8</div> */}
        </Grid>
        <Grid item xs={2}>
          {/* <div>xs=8</div> */}
        </Grid>
        <Grid mt={10} mb={5} item xs={8}>
          <Box
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            mb={3}
          >
            <Typography variant="h3">Files</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Filename</TableCell>
                  <TableCell align="right">File description</TableCell>
                  <TableCell align="right">Last modified date</TableCell>
                  <TableCell align="right">User</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>Lekhana_gadde_cv.pdf</TableCell>
                <TableCell align="right">Lekhana resume 1</TableCell>
                <TableCell align="right">17 oct 2023</TableCell>
                <TableCell align="right">Lekhana Gadde</TableCell>
                <TableCell align="right">
                  <Link to={`/delete/1`}>
                    <IconButton color="error" aria-label="delete" size="large">
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Link>
                </TableCell>
              </TableBody>
            </Table>
            {/* {rows.map((file, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {file[1]}
                    </TableCell>
                    <TableCell align="right">{file[7]}</TableCell>
                    <TableCell align="right">{file[4]}</TableCell>
                    <TableCell align="right">
                      <Link to={`/delete/${file[0]}`} state={file}>
                        <IconButton
                          color="error"
                          aria-label="delete"
                          size="large"
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))} */}
          </TableContainer>
        </Grid>
        <Grid item xs={2}>
          {/* <div>xs=8</div> */}
        </Grid>
      </Grid>
    </>
  );
}
