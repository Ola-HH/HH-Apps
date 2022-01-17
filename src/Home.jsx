import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, ButtonGroup, Stack, Typography } from '@mui/material';

const Home = () => {
  return (
    <Stack textAlign="center" spacing={2}>
      <Typography variant="h3" color="primary">Velkommen til HH Apps</Typography>
      <Typography variant="h6" color="primary">Velg et spill!</Typography>
      <ButtonGroup orientation="vertical" size="large" fullWidth>
        <Button component={RouterLink} to="liarsdice">
            Liar's dice
        </Button>
        <Button component={RouterLink} to="gruble">
            Gruble
        </Button>  
        <Button component={RouterLink} to="hangman">
            Hangman
        </Button>
      </ButtonGroup>
    </Stack>
  );
}

export default Home;