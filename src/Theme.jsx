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
import { ModeContext } from './ModeContext';



const Theme = () => {
    const [mode, setMode] = useState(localStorage.getItem("hhAppsMode"));
    
    const [theme, setTheme] = useState(createTheme({ palette: 
        {
        mode: localStorage.getItem("hhAppsMode") === "light" ? "light" : "dark",
        primary: {main: "#2B88D8"},
        }
    }));

    useEffect(()=>{
        setTheme(createTheme({ palette: 
            {
            mode: localStorage.getItem("hhAppsMode") === "light" ? "light" : "dark",
            primary: {main: "#2B88D8"},
            }
        }));
    }, [mode])

    return (
        <StyledEngineProvider>
            <ModeContext.Provider value={{ mode, setMode}}>
            <ThemeProvider theme={responsiveFontSizes(theme)}>
                <CssBaseline />
                <Navigation />
                <Container maxWidth="md">
                    <Routes>  
                        <Route exact path="/" element={<Home />} />
                        <Route path="liarsdice" element={<LiarsDice />} />
                        <Route path="gruble" element={<Gruble />} />
                        <Route path="hangman" element={<Hangman />} />
                        <Route path="ringoffire" element={<Ringoffire />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </Container>
            </ThemeProvider>
            </ModeContext.Provider>
        </StyledEngineProvider>
    )
}

export default Theme;
