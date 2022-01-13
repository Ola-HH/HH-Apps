import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import LiarsDice from './LiarsDice';
import Gruble from './Gruble';
import Hangman from './Hangman';
import NoMatch from './NoMatch';
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

const Theme = () => {
    const theme = createTheme({ palette: {mode: "dark", primary: {main: blue[500]}}});
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={responsiveFontSizes(theme)}>
                <CssBaseline />
                <Navigation />
                <Container maxWidth="md">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="liarsdice" element={<LiarsDice />} />
                    <Route path="gruble" element={<Gruble />} />
                    <Route path="hangman" element={<Hangman />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                </Container>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default Theme;
