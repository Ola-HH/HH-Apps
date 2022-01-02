import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import HomeButton from "./HomeButton";

const Home = () => {
  return (
    <div className="page-content">
      <p className="site-title">Velkommen til HH Apps</p>
      <p className="second-title">Velg et spill!</p>
      <div>
        <div className="meny">
          <NavLink to="/liars-dice">
            <HomeButton className="home-btn" text="Liars dice" />       
          </NavLink>
          <NavLink to="/gruble">
            <HomeButton className="home-btn" text="Gruble" />  
          </NavLink> 
          <NavLink to="/hangman">
            <HomeButton className="home-btn" text="Hangman"/>  
          </NavLink> 
        </div>
      </div>
    </div>
    
  );
}

export default Home;