import { Link as RouterLink } from "react-router-dom";
import { Avatar, Button, ButtonGroup, Dialog, DialogTitle, Divider, Popover, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useContext, useState } from "react";
import { ModeContext } from "./ModeContext";
import { DarkModeOutlined, LightModeOutlined, LanguageOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

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
  let isAuthenticated = useIsAuthenticated();

  const { i18n, t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const {mode, setMode} = useContext(ModeContext)
  const handleMode = () => {
    if (mode === "light") {
    setMode("dark");
    localStorage.setItem("hhAppsMode", "dark");
    } else {
    setMode("light");
    localStorage.setItem("hhAppsMode", "light");
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openPopover = (event) => setAnchorEl(event.currentTarget);
  const closePopover = () => setAnchorEl(null);
  const isPopoverOpen = Boolean(anchorEl);
  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'simple-popover' : undefined;

  return (
      <>
      <Box fullwidth alignItems="center" sx={{
        backgroundColor: mode === "light" ? "white" : "#111",
        boxShadow: "0px 1px 6px black", display: "flex", height: 50, mb: 2, position: "sticky", top: 0, zIndex: 10
      }}>
          <Avatar component={RouterLink} to="/" src={require('./hh.logo.png')} alt="Logo" sx={{ ml:0.8 }} />
          <Divider orientation="vertical" sx={{ m: 1, height: "40px !important" }}/>
          {mode === "light" ? (
                <DarkModeOutlined color="primary" onClick={handleMode} sx={{ cursor: "pointer", position: "fixed", top: 13, left: 94}}/>
                ):(
                <LightModeOutlined color="primary" onClick={handleMode} sx={{ cursor: "pointer", position: "fixed", top: 13, left: 94 }}/>
          )}
          <LanguageOutlined color="primary" onClick={openPopover} sx={{ cursor: "pointer", position: "fixed", top: 13, left: 64}}/>
          <Popover
          id={id}
          open={isPopoverOpen}
          anchorEl={anchorEl}
          onClose={closePopover}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 50, left: 55 }}
          >
            <ButtonGroup variant="text" orientation="vertical" sx={{width: "150px"}}>
              <Button sx={{fontWeight: i18n.resolvedLanguage === 'en' ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage('en')}>
                <Avatar src={require('./Flags/united-kingdom.png')} alt="en" sx={{
                  width: "20px", height: "20px", mr: "3px"
                }}/> 
                {t('nav.en')}
              </Button>
              <Button sx={{ textAlign: "left !important",fontWeight: i18n.resolvedLanguage === 'no' ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage('no')}>
                <Avatar src={require('./Flags/norway.png')} alt="no" sx={{
                  width: "20px", height: "20px", mr: "3px"
                }}/> 
                {t('nav.no')}
              </Button>
            </ButtonGroup>
          </Popover>

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
        <DialogTitle color="primary" mb={10}>{t('nav.hi')}, <FirstName/> </DialogTitle>
        <SignOutButton/>
        <CloseIcon onClick={closeModal} sx={{ position: "absolute", top: 5, right: 5, cursor: "pointer"}}/>
      </Dialog>
    </>
  );
}

export default Navigation;