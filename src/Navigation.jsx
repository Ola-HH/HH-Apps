import { Link as RouterLink, useLocation } from "react-router-dom";
import { Button, ButtonGroup, Avatar, Divider, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";

const Navigation = () => {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();
  return (
      <Box fullwidth alignItems="center" sx={{
        backgroundColor: "nav",
        boxShadow: "0px 1px 6px black", display: "flex", height: 50, mb: 2
      }}>
          <Avatar component={RouterLink} to="/" src={require('./hh.logo.png')} alt="Logo" sx={{ ml:0.8 }} />
          <Divider orientation="vertical" sx={{ m: 1, mr: 10 }}/>
          <ButtonGroup variant="text" sx={{
            position: "absolute", left: "50%", transform: "translateX(-50%)", display: {
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
              <Button component={RouterLink} to="ringoffire" variant="outlined"
                sx={{
                  color: location.pathname === "/ringoffire" ? "secondary" : "primary", 
                }}>         
                Ring of fire
              </Button>
          </ButtonGroup>
          { isAuthenticated ? <Typography color="primary" sx={{
            position: "absolute", right: 10
          }}>Innlogget</Typography> : <SignInButton/> }
        </Box>
  );
}

export default Navigation;