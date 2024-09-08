import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material"; 

const StyledAppBar = styled(AppBar)(() => ({
  background: 'linear-gradient(20deg, #2196F3 30%, #21CBF3 90%)',
  boxShadow: '0px 4px 5px -1px rgba(0,0,0,0.2)',
}));

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <EditIcon />
        </IconButton>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
        >
          Text Master
        </Typography>
        <Box ml="auto">
          <Typography
            variant="h6"
            component={Link}
            to="/about"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            About Us
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
