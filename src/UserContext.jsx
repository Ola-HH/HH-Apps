import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, Avatar, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

export const UserContext = () => {
  const { i18n, t } = useTranslation();
  const clientId = '47690181877-7bls7frkubm8e8vbhtb3263l7sesdct1.apps.googleusercontent.com';
  const [ profile, setProfile ] = useState([]);
  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
      };
      gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <>
    {profile ? (
      <>
        <Dialog
          fullWidth
          open={open}
          onClose={closeModal}
          sx={{textAlign: "center", py: "20px"}}
        >
        <DialogTitle color="primary" mb={10}>{t('nav.hi')}, {profile.givenName} </DialogTitle>
        <GoogleLogout 
          clientId={clientId} 
          buttonText="Log out" 
          onLogoutSuccess={logOut} 
          render={renderProps => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>{t('nav.logout')}</ Button>
        )} />
        <CloseIcon onClick={closeModal} sx={{ position: "absolute", top: 5, right: 5, cursor: "pointer"}}/>
      </Dialog>
      <Avatar onClick={handleOpen} src={profile.imageUrl} alt="Profile picture" sx={{position: "absolute", top: 5, right: 5, cursor: "pointer"}}/>
</>
    ) : (
        <GoogleLogin
            style={{float: "right"}}
            clientId={clientId}
            buttonText="Sign in"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            render={renderProps => (
              <Button onClick={renderProps.onClick} disabled={renderProps.disabled} sx={{position: "absolute", right: 5}}>{t('nav.login')}</ Button>
            )}
        />
    )}
    </>
  );
}
