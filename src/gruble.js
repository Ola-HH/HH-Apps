import React from "react";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";

function Gruble() {
  return (
    <div className="page-content">
      <p className="site-title">Gruble</p>
      <p className="second-title">Velg hvor lang tid hver runde skal vare</p>
      <Slider onChange={handleChange} className="slider" valueLabelDisplay="auto" defaultValue={75} step={15} marks min={45} max={450} />
      <p className="slider-comment">Du har valgt 75 sekunder</p>
      <Button onClick={showTopic} variant="contained">Vis nye temaer</Button>
      <div className="game-content">
        <div className="topic-container">
          <p className="topic"></p>
          <p className="topic"></p>
          <p className="topic"></p>
          <p className="topic"></p>
          <p className="topic"></p>
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
          <Slider className="countdown" value={time} step={1} min={0} max={80}></Slider>
          <p className="time-remain">Det er 60 sekunder igjen</p>
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

const bokstaver = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', '?'];

const temaer = ['Idretter', 'Idrettsutøvere', 'Kjente nordmenn', 'Drikker', 'Desserter', 'Byer', 'Hovedsteder', 'Språk', 'Spill', 'Bakverk', 'Øyer', 'Filmer', 'Artister', 'Godteri', 'Butikker', 'Dyr', 'TV-serier', 'Sanger', 'Klesplagg', 'Kjøretøy', 'Fotballag', 'Land', 'Kjendiser', 'Skuespillere', 'Middagsretter', 'Sykdommer', 'Grunnstoffer', 'Krydder', 'Hunderaser', 'Møbler', 'Aviser/blader', 'Språk', 'Adjektiver', 'Telefonapp', 'Instrument', 'Yrker', 'Pålegg', 'Jentenavn', 'Guttenavn', 'Forfattere', 'Bøker', 'Bedrifter', 'Klesmerker', 'Fjell', 'Bilmerker', 'Grønnsaker', 'Kjente bygninger', 'Frukt', 'Planter', 'Verb'];

let time = 75;
let timeLeft = time;
const handleChange = (e, val) => {
  time = val;
  timeLeft = time;
  document.querySelectorAll('.slider-comment').forEach((el)=>el.innerHTML = `Du har valgt ${time} sekunder`);
  if (time>60) {
    let minutes = Math.floor(time/60);
    let seconds = time - (minutes*60);
    if (minutes === 1) {
      document.querySelectorAll('.slider-comment').forEach((el)=>el.innerHTML = `Du har valgt ${minutes} minutt og ${seconds} sekunder`);
      return;
    }
    document.querySelectorAll('.slider-comment').forEach((el)=>el.innerHTML = `Du har valgt ${minutes} minutter og ${seconds} sekunder`);
  }
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
  document.querySelectorAll('.time-remain').forEach(el=>el.innerHTML = `Det er ${timeLeft} sekunder igjen`);
}

const showLetter = (amount) => {
  timeLeft = time;
  document.querySelectorAll('.time-remain').forEach(el=>el.innerHTML = `Det er ${timeLeft} sekunder igjen`);
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

let countdown
const sound = new Audio();
sound.src = require('./airhorn.mp3')

const startTime = () => {
  timeLeft = time;
  document.querySelectorAll('.start-btn').forEach(el=>el.setAttribute('disabled', 'true'))
  document.querySelectorAll('.time-remain').forEach(el=>el.innerHTML = `Det er ${timeLeft} sekunder igjen`);
  countdown = setInterval(() => {
    timeLeft--;
    document.querySelectorAll('.countdown').forEach(el=>el.value = timeLeft);
    document.querySelectorAll('.time-remain').forEach(el=>el.innerHTML = `Det er ${timeLeft} sekunder igjen`);
    if (timeLeft === 0) {
      sound.play();
      document.querySelectorAll('.start-btn').forEach(el=>el.removeAttribute('disabled'));
      clearInterval(countdown);
    }
  }, 1000);
  
}

const closeModal = () => {
  document.querySelectorAll('.modal-container').forEach(el=>el.style.display = 'none');
  clearInterval(countdown);
  document.querySelectorAll('.start-btn').forEach(el=>el.removeAttribute('disabled'));
  timeLeft = time;
}



export default Gruble;