import React from "react";
import { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import HHButton from "../HH-Button";
import { useTranslation } from "react-i18next";
import { noCards, enCards } from "./cards";


function Ringoffire() {
  const { t, i18n } = useTranslation();
  let cards;
  if ( i18n.resolvedLanguage === 'no') {
    cards = noCards;
  } else {
    cards = enCards;
  }
  const [usedCards, setUsedCards] = useState([]);
  const [card, setCard] = useState(-1);
  const [done, setDone] = useState(false)
  const newCard = () => {
    if (usedCards.length === cards.length) {
      setDone(true);
      return;
    }
    for (let i = 0; i < 2; i++) {
      const random = Math.floor(Math.random()* cards.length)
      if (usedCards.includes(random)) {
        i--;
        continue
      }
      setCard(random);
      setUsedCards(usedCards.concat(random));
    }
  }
  const restart = () => {
    setUsedCards([])
    setDone(false)
    setCard(-1);
  }
  

  return (
    <Stack textAlign="center" spacing={2}>
      <Typography variant="h3" color="primary">Ring of fire</Typography>
      
      { done ? (
        <>
          <HHButton click={restart} text={t('rof.newRoundBTN')} />
          <Typography variant="h5" color="primary">{t('rof.done')}</Typography>
        </>
      ):(
        <HHButton click={newCard} text={t('rof.cardBTN')}/>
      )}

      { card > -1 && !done ? (
          <Stack textAlign="center" direction="row" justifyContent="center" 
          sx={{ flexWrap: "wrap" }}>
            <Stack mb={2} border="1px solid #2b88d8" spacing={1} borderRadius={1} p={1} sx={{
              width: {
                sm: "40%",
                xs: "100%"
              },
              mr: {
                sm: 5,
                xs: 0
              }
            }}>
              <Typography variant="h4" color="primary">{cards[card].title}</Typography>
              <Divider />
              <Typography variant="body1" color="primary">{cards[card].desc}</Typography>
            </Stack>
            <Box sx={{ justifyContent: "center", textAlign: "center",
              width: {
                sm: "40%",
                xs: "100%"
              }
            }}>
            <img src={require(`./card-imgs/${cards[card].src}`)} alt={cards[card].title} width="100%"/>
            </Box>
          </Stack>
        ):("")}
      
    </Stack>
  );
}


export default Ringoffire;