/* import React, { useState } from "react"; */
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Button, ButtonGroup, Avatar, Divider} from "@mui/material";
import { Box } from "@mui/system";
/* import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material"; */

const Navigation = () => {

  /* const [mode, setMode] = useState(localStorage.getItem("hhAppsMode"))
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark")
      localStorage.setItem("hhAppsMode", "dark");
    } else {
      setMode("light")
      localStorage.setItem("hhAppsMode", "light");
    }
    console.log(localStorage) 
  }; */

  const location = useLocation();
  return (
      <Box fullwidth alignItems="center" sx={{
        backgroundColor: "nav",
        boxShadow: "0px 1px 6px black", display: "flex", height: 50, mb: 2
      }}>
          <Avatar component={RouterLink} to="/" src={require('./hh.logo.png')} alt="Logo" sx={{ ml:0.8 }} />
          <Divider orientation="vertical" sx={{ m: 1 }}/>
          {/* {mode === "light" ? (
            <DarkModeOutlined color="primary" onClick={handleMode} sx={{ cursor: "pointer" }}/>
          ):(
            <LightModeOutlined color="primary" onClick={handleMode} sx={{ cursor: "pointer" }}/>
          )} */}
          <ButtonGroup variant="text" sx={{
            position: "absolute", right: 10, display: {
              sm: "inline-block",
              xs: "none"
            }
          }}>
              <Button component={RouterLink} to="/" variant="outlined"
                sx={{
                  color: location.pathname === "/" ? "secondary" : "secondary" 
                }}>         
                Hjem
              </Button>
              <Button component={RouterLink} to="liarsdice" variant="outlined"
                sx={{
                  color: location.pathname === "/liarsdice" ? "secondary" : "primary", 
                }}>         
                Liar's dice
              </Button>
              <Button component={RouterLink} to="gruble" variant="outlined"
                sx={{
                  color: location.pathname === "/gruble" ? "secondary" : "primary", 
                }}>         
                Gruble
              </Button>
              <Button component={RouterLink} to="hangman" variant="outlined"
                sx={{
                  color: location.pathname === "/hangman" ? "secondary" : "primary", 
                }}>         
                Hangman
              </Button>
          </ButtonGroup>
        </Box>
  );
}

export default Navigation;