import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Theme from './Theme';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import Navigation from './Navigation';


const msalInstance = new PublicClientApplication(msalConfig);

function App () {
    return (
        <MsalProvider instance={msalInstance}>
            <BrowserRouter>
                <Theme>
                    <Navigation />
                    <Container maxWidth="md">
                        <Routes>  
                            <Route exact path="/" element={<Home />} />
                            <Route path="liarsdice" element={<LiarsDice />} />
                            <Route path="gruble" element={<Gruble />} />
                            <Route path="hangman" element={<Hangman />} />
                            <Route path="ringoffire" element={<Ringoffire />} />
                            <Route path="wordpuzz" element={<WordPuzz />} />
                            <Route path="*" element={<NoMatch />} />
                        </Routes>
                    </Container>
                </Theme>
            </BrowserRouter>
        </MsalProvider>
    );
}