import { Button } from "@mui/material";
import React from "react";
import GoogleLogin from 'react-google-login'

const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser: ', res.profileObj);
    };

    const onFailure  = (res) => {
        console.log('[Login failed] res: ', res);
    }

    return (
        <>
         <GoogleLogin
          clientId={clientID}
          render={renderProps => (
              <Button variant="text" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  Logg inn
              </Button>
          )}
          buttonText="Logg inn"
          onSuccess={onSuccess}
          onFailure={onFailure}
/*           cookiePolicy={'single_host_origin'} */
          style={{ marginTop: '100px'}}
         />
        </>
    )
}

export default Login;