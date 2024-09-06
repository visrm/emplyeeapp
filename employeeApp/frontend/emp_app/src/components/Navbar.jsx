import React from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ mr: "auto" }}>
            emp app
          </Typography>
          <Stack direction="row" spacing={1}>
            <Link to="/view">
              <Button variant="contained">View</Button>
            </Link>
            <Link to="/">
              <Button variant="contained">Add</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
