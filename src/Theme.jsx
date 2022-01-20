import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import LiarsDice from './Liarsdice/LiarsDice';
import Gruble from './Gruble/Gruble';
import Hangman from './Hangman/Hangman';
import Ringoffire from './Ringoffire/Ringoffire';
import NoMatch from './NoMatch';
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import { Button } from 'bootstrap';

function ProfileContent() {
    const { accounts } = useMsal();

    const name = accounts[0] && accounts[0].name;
    console.log(accounts)
    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
        </>
    );
};

const Theme = () => {

    const [mode, setMode] = useState(localStorage.getItem("hhAppsMode"))

    const handleMode = () => {
        if (mode === "light") {
        setMode("dark")
        localStorage.setItem("hhAppsMode", "dark");
        } else {
        setMode("light")
        localStorage.setItem("hhAppsMode", "light");
        }
    };
    
    const [theme, setTheme] = useState(createTheme({ palette: 
        {
        mode: localStorage.getItem("hhAppsMode") === "light" ? "light" : "dark",
        primary: {main: "#2B88D8"},
        secondary: {main: "#34dbf4"},
        }
    }));

    useEffect(()=>{
        setTheme(createTheme({ palette: 
            {
            mode: localStorage.getItem("hhAppsMode") === "light" ? "light" : "dark",
            primary: {main: "#2B88D8"},
            secondary: {main: "#34dbf4"},
            }
        }));
    }, [mode])    

    return (
        <StyledEngineProvider>
            <ThemeProvider theme={responsiveFontSizes(theme)}>
                <CssBaseline />
                <Navigation />
                {mode === "light" ? (
                <DarkModeOutlined color="primary" onClick={handleMode} sx={{ cursor: "pointer", position: "absolute", top: 13, left: 64}}/>
                ):(
                <LightModeOutlined color="primary" onClick={handleMode} sx={{ cursor: "pointer", position: "absolute", top: 13, left: 64 }}/>
                )}
                <Container maxWidth="md">
                <ProfileContent></ProfileContent>
                <Routes>  
                    <Route path="/" element={<Home />} />
                    <Route path="liarsdice" element={<LiarsDice />} />
                    <Route path="gruble" element={<Gruble />} />
                    <Route path="hangman" element={<Hangman />} />
                    <Route path="ringoffire" element={<Ringoffire />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                </Container>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default Theme;
