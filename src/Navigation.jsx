import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Button, ButtonGroup, Avatar } from "@mui/material";

const Navigation = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
      <nav className="navigation navbar-expand">
          <Avatar component={RouterLink} to="/" className="navbar-logo" src={require('./hh.logo.png')} alt="Logo" />
          <div className="nav-list-container">
          <ButtonGroup variant="text" aria-label="x-large text button group">
              <Button component={RouterLink} to="/" variant="outlined" color={location.pathname === "/" ? "secondary" : "primary"}>
                Hjem
              </Button>
              <Button component={RouterLink} to="liarsdice" variant="outlined"
                sx={{
                color: location.pathname === "/liarsdice" ? "#fff" : "primary"
              }}>         
                Liars dice
              </Button>
              <Button component={RouterLink} to="gruble" variant="outlined" 
                sx={{
                color: location.pathname === "/gruble" ? "#fff" : "primary"
              }}>
                Gruble 
              </Button>
              <Button component={RouterLink} to="hangman" variant="outlined" 
                sx={{
                color: location.pathname === "/hangman" ? "#fff" : "primary"
              }}>
                Hangman
              </Button>
          </ButtonGroup>
          </div>
      </nav>
  );
}

export default Navigation;