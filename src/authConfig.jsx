export const msalConfig = {
    auth: {
      clientId: process.env.REACT_APP_CLIENT_ID,
      authority: "https://login.microsoftonline.com/common", 
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", 
      storeAuthStateInCookie: false, 
    }
  };
  
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };