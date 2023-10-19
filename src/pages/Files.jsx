import { Badge, Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import File from "../components/File";
import axios from "axios";
import constants from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Files = () => {
  const [user, setUser] = useState(localStorage.getItem("email"));
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const userAuthenticated = () => {
    // console.log(typeof localStorage.getItem("email"));
    setUser(localStorage.getItem("email"));
  };
  const redirect = () => {
    return navigate("/auth");
  };
  useEffect(() => {
    axios
      .post(constants.BASE_URL + "/filemanager", {
        email: localStorage.getItem("email"),
      })
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  }, []);
  // useEffect(() => {
  //   userAuthenticated();

  //   console.log(user);
  //   if (!user) {
  //     redirect();
  //   } else if (user === "one_d@admin.com") {
  //     return navigate("/admin");
  //   }
  // }, [user]);
  return (
    <>
      {user && (
        <Grid container spacing={2} mt={5} centered>
          <Grid item xs={3}>
            {/* <div>xs=8</div> */}
          </Grid>
          <Grid item xs={6}>
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
              <Button
                size="large"
                variant="contained"
                color="secondary"
                endIcon={<AddIcon />}
                href="/create"
              >
                Add File
              </Button>
            </Box>

            <File data={data} />
          </Grid>
          <Grid item xs={3}>
            {/* <div>xs=4</div> */}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Files;
