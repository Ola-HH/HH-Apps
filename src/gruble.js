import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";
import { LinearProgress } from "@mui/material";

function Gruble() {
  const [time, setTime] = useState(75);
  const [timeLeft, setTimeLeft] = useState(75);
  const [timerActive, setTimerActive] = useState(false);
 
  const bokstaver = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', '?'];

  const temaer = ['Idretter', 'Idrettsutøvere', 'Kjente nordmenn', 'Drikker', 'Desserter', 'Byer', 'Hovedsteder', 'Språk', 'Spill', 'Bakverk', 'Øyer', 'Filmer', 'Artister', 'Godteri', 'Butikker', 'Dyr', 'TV-serier', 'Sanger', 'Klesplagg', 'Kjøretøy', 'Fotballag', 'Land', 'Kjendiser', 'Skuespillere', 'Middagsretter', 'Sykdommer', 'Grunnstoffer', 'Krydder', 'Hunderaser', 'Møbler', 'Aviser/blader', 'Språk', 'Adjektiver', 'Telefonapp', 'Instrument', 'Yrker', 'Pålegg', 'Jentenavn', 'Guttenavn', 'Forfattere', 'Bøker', 'Bedrifter', 'Klesmerker', 'Fjell', 'Bilmerker', 'Grønnsaker', 'Kjente bygninger', 'Frukt', 'Planter', 'Verb'];

  const handleChange = (e, val) => {
    setTime(val);
    setTimeLeft(val);
    /* if (time>60) {
      let minutes = Math.floor(time/60);
      let seconds = time - (minutes*60);
      if (minutes === 1) {
        document.querySelectorAll('.slider-comment').forEach((el)=>el.innerHTML = `Du har valgt ${minutes} minutt og ${seconds} sekunder`);
        return;
      }
      document.querySelectorAll('.slider-comment').forEach((el)=>el.innerHTML = `Du har valgt ${minutes} minutter og ${seconds} sekunder`);
    } else {
      document.querySelectorAll('.slider-comment').forEach((el)=>el.innerHTML = `Du har valgt ${time} sekunder`);
    } */
  }

  let usedTopics = [];

  const showTopic = () => {
      if (usedTopics.length === temaer.length) {
        usedTopics = [];
        alert('Du har nå vært igjennom alle temaene. Temaene vil nå bli brukt på nytt i tilfeldig rekkefølge!')
        return
      }

      let topics = document.querySelectorAll('.topic');
      for (let i = 0; i < 5; i++) {
      let number = Math.floor(Math.random() * temaer.length);
      if (usedTopics.includes(number)) {
        i--;
        continue;
      }
      usedTopics.push(number);
      topics[i].innerHTML = temaer[number];
    }
    document.querySelectorAll('.game-content').forEach((el)=>el.style.display = "block");
  }

  const showLetter = (amount) => {
    setTimeLeft(time);
    document.querySelectorAll('.modal-container').forEach(el=>el.style.display = 'block');
    document.querySelectorAll('.letters').forEach(el=>el.innerHTML = "");
    document.querySelectorAll('.countdown').forEach(el=>el.value = time);
    document.querySelectorAll('.countdown').forEach(el=>el.max = time);
    let usedLetters = [];
    if (amount === 1) {
      let number = Math.floor(Math.random() * bokstaver.length);
      document.querySelectorAll('.letters').forEach(el=>el.innerHTML = bokstaver[number]);
    } else {
      for (let i = 0; i < 5; i++) {
        let number = Math.floor(Math.random() * bokstaver.length);
        if (usedLetters.includes(number)) {
          i--;
          continue;
        }
        usedLetters.push(number)
        document.querySelectorAll('.letters').forEach(el=>el.innerHTML += bokstaver[number]);
        console.log(bokstaver[number]);
      }
    }
  }

  const sound = new Audio(require('./airhorn.mp3'));

  useEffect(() => {
    if (!timeLeft) {
      sound.play();
      document.querySelectorAll('.start-btn').forEach(el=>el.removeAttribute('disabled'));
      document.querySelectorAll('.new-letter-btn').forEach(el=>el.removeAttribute('disabled'));
      setTimerActive(false);
      return;
    }
    if (timerActive) {
      console.log('test' + timeLeft);
      setTimeout(()=> {
      setTimeLeft(() => timeLeft - 1);
    }, 1000);
    } 
  }, [timeLeft, timerActive, sound]);

  const startTime = () => {
    document.querySelectorAll('.start-btn').forEach(el=>el.setAttribute('disabled', 'true'));
    document.querySelectorAll('.new-letter-btn').forEach(el=>el.setAttribute('disabled', 'true'));
    setTimeLeft(time);
    setTimerActive(true);
  }

  const closeModal = () => {
    document.querySelectorAll('.modal-container').forEach(el=>el.style.display = 'none');
    /* clearInterval(countdown); */
    document.querySelectorAll('.start-btn').forEach(el=>el.removeAttribute('disabled'));
    document.querySelectorAll('.new-letter-btn').forEach(el=>el.removeAttribute('disabled'));
    setTimerActive(false);
    setTimeLeft(time);
  }

  return (
    <div className="page-content">
      <p className="site-title">Gruble</p>
      <p className="second-title">Velg hvor lang tid hver runde skal vare</p>
      <Slider onChange={handleChange} className="slider" valueLabelDisplay="auto" defaultValue={75} step={15} marks min={45} max={450} />
      <p className="slider-comment">Du har valgt {time} sekunder</p>
      <Button onClick={showTopic} variant="contained">Vis nye temaer</Button>
      <div className="game-content">
        <div className="topic-container">
          <p className="topic" />
          <p className="topic" />
          <p className="topic" />
          <p className="topic" />
          <p className="topic" />
        </div>
      <Button onClick={()=>showLetter(1)} variant="outlined" className="letter-btn">Få en bokstav</Button>
      <Button onClick={()=>showLetter(5)} variant="outlined" className="letter-btn">Få alle 5 bokstavene</Button>
      </div>
      <div className="modal-container">
        <div onClick={closeModal} className="overlay" />
        <div className="modal"> 
          <CloseIcon onClick={closeModal} className="close-icon"/>
          <p className="letters">AEJKL</p>
          <Divider>Tid</Divider>
          <LinearProgress className="countdown" variant="determinate" value={(time - timeLeft)/time * 100} min={0} max={100}/>
          <p className="time-remain">Det er {timeLeft} sekunder igjen</p>
          <Button className="start-btn" onClick={startTime} variant="contained">Start tiden</Button> 
          <Divider variant="middle">Nye bokstaver</Divider>
          <div className="new-letter-container"> 
          <Button className="new-letter-btn" onClick={()=>showLetter(1)}>Få en ny bokstav</Button>
          <Divider variant="middle" flexItem ></Divider>  
          <Button className="new-letter-btn" onClick={()=>showLetter(5)}>Få fem nye bokstaver</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gruble;