import React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";


const NavButton = ({ comp, text }) => {
    const location = useLocation();
    console.log(location.pathname)
    return (
    <Button component={RouterLink} to={comp} variant="outlined"
    sx={{ fontSize: 15 }}>         
    {text}
  </Button>
    );
}

  export default NavButton;