import {
  Badge,
  Box,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const AdminFilePage = () => {
  return (
    <Grid container spacing={2} mt={5} centered>
      <Grid item xs={2}>
        {/* <div>xs=8</div> */}
      </Grid>
      <Grid mt={10} item xs={8}>
        <Box
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          mb={3}
        >
          <Badge badgeContent={99} color="primary">
            <Typography variant="h3">Files</Typography>
          </Badge>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={2}>
        {/* <div>xs=8</div> */}
      </Grid>
    </Grid>
  );
};

export default AdminFilePage;
