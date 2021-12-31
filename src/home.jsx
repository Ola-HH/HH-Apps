import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import HHButton from "./HH-Button";

const Home = () => {
  return (
    <div className="page-content">
      <p className="site-title">Velkommen til HH Apps</p>
      <p className="second-title">Velg et spill!</p>
      <div>
        <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" className="meny">
          <NavLink to="/liars-dice">
            <HHButton text="Liars dice" />         
          </NavLink>
          <br></br>
          <NavLink to="/gruble">
            <HHButton text="Gruble" />  
          </NavLink> 
        </ButtonGroup>
      </div>
    </div>
    
  );
}

export default Home;