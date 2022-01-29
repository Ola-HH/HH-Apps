import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Dialog, Link, Slider, Stack, Typography } from "@mui/material";
import HHButton from "../HH-Button";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";
import { LinearProgress } from "@mui/material";
import Pdf from './gruble.pdf';
import { useTranslation } from "react-i18next";

function Gruble() {
  const { t } = useTranslation();
  const [time, setTime] = useState(75);
  const [timeLeft, setTimeLeft] = useState(75);
  const [timerActive, setTimerActive] = useState(false);
  const [usedTopics, setUsedTopics] = useState([]);
  const [currentTopics, setCurrentTopics] = useState([]);
  const [letters, setLetters] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
 
  const bokstaver = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', '?'];

  const temaer = ['Idretter', 'Idrettsutøvere', 'Kjente nordmenn', 'Drikker', 'Desserter', 'Byer', 'Hovedsteder', 'Språk', 'Spill', 'Bakverk', 'Øyer', 'Filmer', 'Artister', 'Godteri', 'Butikker', 'Dyr', 'TV-serier', 'Låter', 'Klesplagg', 'Kjøretøy', 'Fotballag', 'Land', 'Kjendiser', 'Skuespillere', 'Middagsretter', 'Sykdommer', 'Grunnstoffer', 'Krydder', 'Hunderaser', 'Møbler', 'Aviser/blader', 'Kommuner', 'Adjektiver', 'Telefonapp', 'Instrument', 'Yrker', 'Pålegg', 'Jentenavn', 'Guttenavn', 'Forfattere', 'Bøker', 'Bedrifter', 'Klesmerker', 'Fjell', 'Bilmerker', 'Grønnsaker', 'Kjente bygninger', 'Frukt', 'Planter', 'Verb'];

  const handleChange = (e, val) => {
    setTime(val);
    setTimeLeft(val);
  }
  const startTime = () => {
    setTimeLeft(time);
    setTimerActive(true);
  }
  const closeModal = () => {
    setModalOpen(false);
    setTimerActive(false);
    setTimeLeft(time);
  }
  const showTopic = () => {
      if (usedTopics.length === temaer.length) {
        setUsedTopics([]);
        alert('Du har nå vært igjennom alle temaene. Temaene vil fra neste runde bli brukt på nytt i tilfeldig rekkefølge!')
        return
      }
      const newTopics = [];
      for (let i = 0; i < 5; i++) {
        const n = Math.floor(Math.random() * temaer.length);
        if (newTopics.includes(temaer[n]) || usedTopics.includes(temaer[n])) {
          i--;
          continue
        }
        newTopics[i] = temaer[n]
      }
      setUsedTopics(usedTopics.concat(newTopics))
      setCurrentTopics(newTopics);
    }
  const showLetters = () => handleLetters(5)
  const showLetter = () => handleLetters(1)

  const handleLetters = (a) => {
    setTimeLeft(time)
    setModalOpen(true)
    if (a < 2) {
      setLetters(bokstaver[Math.floor(Math.random() * bokstaver.length)])
    } else {
      const newLetters = [];
      for (let i = 0; i < 5; i++) {
        const n = Math.floor(Math.random() * bokstaver.length);
        if (newLetters.includes(bokstaver[n])) {
          i--;
          continue
        }
        newLetters[i] = bokstaver[n]
      }
      setLetters(newLetters);
    }
  }
  useEffect(() => {
    if (!timeLeft) {
      const sound = new Audio(require('./airhorn.mp3'));
      sound.play();
      setTimerActive(false);
      return;
    }
    if (timerActive) {
      const i = setInterval(()=> {
      setTimeLeft(() => timeLeft - 1);
    }, 1000);
    return () => clearInterval(i);  
  } 
  }, [timeLeft, timerActive]);

  return (
    <Stack textAlign="center" spacing={2}>
      <Typography variant="h3" color="primary">Gruble</Typography>
      <Link variant="h7" href={Pdf} target="_blank" rel="noreferrer">{t('gruble.download')}</Link>
      <Typography variant="h6" color="primary">{t('gruble.sliderInstruction')}</Typography>
      <Slider onChange={handleChange} valueLabelDisplay="auto" defaultValue={75} step={15} marks min={45} max={450} />
      <Typography variant="h7" color="primary">{time} {t('gruble.sliderComment')}</Typography>
      <HHButton click={showTopic} text={t('gruble.topicBTN')} />
    { currentTopics.length > 0 ? (
      <>
        <Box >
          {currentTopics.map((val, i) => (
                <Typography variant="h6" key={i} color="primary"> {currentTopics[i]} </Typography>
            ))}
        </Box>
        <HHButton click={showLetter} text={t('gruble.oneLetterBTN')}/>
        <HHButton click={showLetters} text={t('gruble.fiveLetterBTN')} />
      </>
    ):''}

        <Dialog
        fullWidth
        open={modalOpen}
        onClose={closeModal}
        sx={{textAlign: "center", py: "20px"}}
        >
          <CloseIcon onClick={closeModal} sx={{ position: "absolute", top: 5, right: 5, cursor: "pointer"}}/>
          <Stack width={9/10} spacing={1.5} sx={{position: "relative", left: "5%", my: 1}}>
          <Typography variant="h3" color="primary">{letters}</Typography>
          <Divider color="primary">{t('gruble.time')}</Divider>
          <LinearProgress variant="determinate" value={(time - timeLeft)/time * 100} min={0} max={100}
          sx={{
            height: 10, borderRadius: 5
          }}/>
          <Typography variant="h7" color="primary">{timeLeft} {t('gruble.countdownComment')}</Typography>
          {!timerActive ? (
            <Stack>
            <Button onClick={startTime} variant="outlined" sx={{mb: 2}}>{t('gruble.timeBTN')}</Button>
              <Divider variant="middle">{t('gruble.newLetters')}</Divider>
              <Button onClick={showLetter}>{t('gruble.oneLetterBTN')}</Button>
              <Divider variant="middle" sx={{width: 1/2, margin: 'auto'}}/>  
              <Button onClick={showLetters}>{t('gruble.fiveLetterBTN')}</Button>
            </Stack>
            ):("")}
          </Stack>
        </Dialog>
    </Stack>
  );
}


export default Gruble;