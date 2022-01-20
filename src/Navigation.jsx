import { Link as RouterLink } from "react-router-dom";
import { Avatar, Divider, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";

function ProfileContent() {
  const { accounts } = useMsal();

  const name = accounts[0] && accounts[0].name;
  return (
      <>
          {name}
      </>
  );
};

const Navigation = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
      <Box fullwidth alignItems="center" sx={{
        backgroundColor: "nav",
        boxShadow: "0px 1px 6px black", display: "flex", height: 50, mb: 2
      }}>
          <Avatar component={RouterLink} to="/" src={require('./hh.logo.png')} alt="Logo" sx={{ ml:0.8 }} />
          <Divider orientation="vertical" sx={{ m: 1, height: "40px !important" }}/>
          { isAuthenticated ? <Typography color="primary" sx={{
            position: "absolute", right: 10
          }}><ProfileContent /></Typography> : <SignInButton/> }
        </Box>
  );
}

export default Navigation;