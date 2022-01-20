import { Link as RouterLink, useLocation } from "react-router-dom";
import { Button, ButtonGroup, Avatar, Divider, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";

const Navigation = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
      <Box fullwidth alignItems="center" sx={{
        backgroundColor: "nav",
        boxShadow: "0px 1px 6px black", display: "flex", height: 50, mb: 2
      }}>
          <Avatar component={RouterLink} to="/" src={require('./hh.logo.png')} alt="Logo" sx={{ ml:0.8 }} />
          <Divider orientation="vertical" sx={{ m: 1, mr: 10 }}/>
          { isAuthenticated ? <Typography color="primary" sx={{
            position: "absolute", right: 10
          }}>Innlogget</Typography> : <SignInButton/> }
        </Box>
  );
}

export default Navigation;