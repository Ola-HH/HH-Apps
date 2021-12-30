import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';

const Home = () => {
  return (
    <div className="page-content">
      <p className="site-title">Velkommen til HH Apps</p>
      <p className="second-title">Velg et spill!</p>
      <div>
        <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
          <NavLink to="/liars-dice">
            <Button>         
              Liars dice
            </Button>
          </NavLink>
          <NavLink to="/gruble">
            <Button>
              Gruble
            </Button>
          </NavLink> 
        </ButtonGroup>
      </div>
    </div>
    
  );
}

export default Home;