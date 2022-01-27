import { Link as RouterLink } from "react-router-dom";
import { Avatar, Dialog, DialogTitle, Divider, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useState } from "react";

function ProfileContent() {
  const { accounts } = useMsal();

  const name = accounts[0].name;
  return (
      <>
          {name}
      </>
  );
};

function FirstName() {
  const { accounts } = useMsal();

  const firstname = accounts[0].name.replace(/ .*/,'');
  return (
      <>
          {firstname}
      </>
  );
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  let isAuthenticated = useIsAuthenticated();
  const handleOpen = () => setOpen(true)
  const closeModal = () => setOpen(false)
  return (
      <>
      <Box fullwidth alignItems="center" backgroundColor="secondary" sx={{
        backgroundColor: "primary",
        boxShadow: "0px 1px 6px black", display: "flex", height: 50, mb: 2, position: "sticky", top: 0
      }}>
          <Avatar component={RouterLink} to="/" src={require('./hh.logo.png')} alt="Logo" sx={{ ml:0.8 }} />
          <Divider orientation="vertical" sx={{ m: 1, height: "40px !important" }}/>
          { isAuthenticated ? <Typography color="primary" onClick={handleOpen} sx={{
            position: "absolute", right: 10, cursor: "pointer"
          }}><ProfileContent /></Typography> : <Box sx={{position: "absolute", right: "10px"}}>
            <SignInButton/></Box>}
      </Box>
      <Dialog
      fullWidth
      open={open}
      onClose={closeModal}
      sx={{textAlign: "center", py: "20px"}}
      >
        <DialogTitle color="primary" mb={10}>Hei, <FirstName/> </DialogTitle>
        <SignOutButton/>
        <CloseIcon onClick={closeModal} sx={{ position: "absolute", top: 5, right: 5, cursor: "pointer"}}/>
      </Dialog>
    </>
  );
}

export default Navigation;