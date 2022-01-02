import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';


const Navigation = () => {
  return (
      <nav className="navigation navbar-expand">
          <NavLink to="/">
            <img className="navbar-logo" src={require('./hh.logo.png')} alt="" />
          </NavLink>
          <div className="nav-list-container">
          <ButtonGroup className="nav-button-group" variant="text" aria-label="x-large text button group">
            <NavLink to="/">
              <Button className="nav-button" variant="outlined">
                Hjem
              </Button>
            </NavLink>
            <NavLink to="/liars-dice">
              <Button className="nav-button" variant="outlined">         
                Liars dice
              </Button>
            </NavLink>
            <NavLink to="/gruble">
              <Button className="nav-button" variant="outlined">
                Gruble
              </Button>
            </NavLink> 
            <NavLink to="/hangman">
              <Button className="nav-button" variant="outlined">
                Hangman
              </Button>
            </NavLink> 
          </ButtonGroup>
          </div>
      </nav>
  );
}

export default Navigation;