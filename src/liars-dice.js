import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const LiarsDice = () => {
  return (
    <div className="page-content">
      <p className="site-title">Liars Dice</p>
      <div className="game-settings">
      <p className="second-title">Velg antall terninger du skal starte med</p>
      <Slider onChange={(handleChange)} className="slider" valueLabelDisplay="auto" defaultValue={5} step={1} marks min={1} max={10} />
      <p className="slider-comment">Du har valgt {numberOfDices} terninger</p>
      <Button onClick={startLiars} variant="contained">Start</Button>
      </div>
      <div className="game-content"> 
          <p>Terninger</p>
          <div className="dice-container" />
          <div className="midgame-buttons">
            <Button onClick={throwDice} className="dice-button" variant="contained" startIcon={<ShuffleIcon />}>Kast terningene</Button>
            <Button onClick={removeDice} className="dice-button" variant="outlined" startIcon={<DeleteIcon />} color="error">Fjern en terning</Button>
          </div>
      </div>
      <div className="restart-button">
       <Button onClick={restartDice} className="dice-button" variant="outlined" startIcon={<RestartAltIcon />}>Start på nytt</Button> 
      </div>
    </div>
  );
}

let numberOfDices = 5;
let dices;

const handleChange = (e, val) => {
  numberOfDices = val;
  document.querySelectorAll('.slider-comment').forEach((el)=>el.innerHTML = `Du har valgt ${numberOfDices} terninger`)
}

const showDices = () => {
  const currentDices = document.querySelectorAll('.dice')
  for (let i = 0; i < currentDices.length; i++) {
    currentDices[i].src = require(`./${dices[i]}dice.png`)
  }
}

const startLiars = () => {
  dices = [];
  document.querySelectorAll('.dice-container').forEach((el) => el.innerHTML = '');
  for (let i = 0; i < numberOfDices; i++) {
    dices.push(6)
    const dice = document.createElement('img');
    dice.classList.add('dice');
    dice.src = require(`./6dice.png`);
    document.querySelectorAll('.dice-container').forEach(el => el.appendChild(dice));
  }
  document.querySelectorAll('.game-settings').forEach((el) => el.style.display = 'none');
  document.querySelectorAll('.game-content').forEach((el) => el.style.display = 'block');
}

const throwDice = () => {
  dices = dices.map(() => Math.floor(Math.random() * 6) + 1).sort()
  document.querySelectorAll('.dice').forEach((el)=>el.style.transform = 'rotateY(180deg)');
  setTimeout(()=> {
    document.querySelectorAll('.dice').forEach((el)=>el.style.transform = 'rotateY(0deg)');
    showDices();
  }, 300)
}

const removeDice = () => {
  dices.pop()
  document.querySelectorAll('.dice-container').forEach(el => el.lastChild.remove());

  if (dices.length === 0) {
    document.querySelectorAll('.game-content').forEach((el) => el.style.display = 'none');
    document.querySelectorAll('.restart-button').forEach((el) => el.style.display = 'block');
  }
}

const restartDice = () => {
  document.querySelectorAll('.restart-button').forEach((el) => el.style.display = 'none');
  document.querySelectorAll('.game-settings').forEach((el) => el.style.display = 'block');
}

export default LiarsDice;