import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Stack textAlign="center" spacing={2}>
      <Typography variant="h3" color="primary">{t('home.welcome')}</Typography>
      <Typography variant="h4" color="primary">{t('home.pickGame')}</Typography>
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
        <Button component={RouterLink} to="ringoffire">
            Ring of fire
        </Button>
        <Button component={RouterLink} to="wordpuzz">
            WordPuzz (BETA)
        </Button>
      </ButtonGroup>
    </Stack>
  );
}

export default Home;