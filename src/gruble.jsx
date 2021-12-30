import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Slider } from "@mui/material";
import HHButton from "./HH-Button";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";
import { LinearProgress } from "@mui/material";
let brukteTemaer = [];

function Gruble() {
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
    <div className="page-content">
      <p className="site-title">Gruble</p>
      <p className="second-title">Velg hvor lang tid hver runde skal vare</p>
      <Slider onChange={handleChange} className="slider" valueLabelDisplay="auto" defaultValue={75} step={15} marks min={45} max={450} />
      <p className="slider-comment">Du har valgt {time} sekunder</p>
      <HHButton click={showTopic} text="Vis nye temaer" />
    { currentTopics.length > 0 ? (
      <div className="game-content">
        <div className="topic-container">
          {currentTopics.map((val, i) => (
                <p key={i} className="topic"> {currentTopics[i]} </p>
            ))}
        </div>
        <HHButton click={showLetter} text="Få en bokstav"/>
        <HHButton click={showLetters} text="Få fem bokstaver" />
      </div>
    ):''}

      { modalOpen === true ? (
        <div className="modal-container">
          <div onClick={closeModal} className="overlay" />
          <div className="modal"> 
            <CloseIcon onClick={closeModal} className="close-icon"/>
            <p className="letters">{letters}</p>
            <Divider>Tid</Divider>
            <LinearProgress className="countdown" variant="determinate" value={(time - timeLeft)/time * 100} min={0} max={100}/>
            <p className="time-remain">Det er {timeLeft} sekunder igjen</p>
            {!timerActive ? (
            <>
            <HHButton className="start-btn" click={startTime} text="Start tiden" /> 
            <Divider variant="middle">Nye bokstaver</Divider>
            <Button onClick={showLetter}>Få en ny bokstav</Button>
            <Divider variant="middle" sx={{width: 1/2, margin: 'auto'}}/>  
            <Button onClick={showLetters}>Få fem ny bokstaver</Button>
            </>
            ):("")}
          </div>
        </div>
      ):""}
    </div>
  );
}


export default Gruble;