import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, ButtonGroup, Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack>
      <p className="site-title">Velkommen til HH Apps</p>
      <p className="second-title">Velg et spill!</p>
      <ButtonGroup orientation="vertical" size="large" fullWidth>
        <Button component={RouterLink} to="liarsdice">
            Liars dice
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