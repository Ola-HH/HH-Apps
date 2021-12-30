import { Slider } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HHButton from "./HH-Button";

const LiarsDice = () => {
  const [dices, setDices] = useState(Array(5).fill(6));
  const [started, setStarted] = useState(false);

  const handleChange = (e, val) => setDices(Array(val).fill(6));
  const startLiars = () => setStarted(true); 
  const removeDice = () => setDices(dices.slice(0, -1));

  const restartDice = () => {
    setDices(Array(5).fill(6));
    setStarted(false);
  }

  const throwDice = () => {
    setDices(dices.map(() => Math.floor(Math.random() * 6) + 1).sort());
    document.querySelectorAll('.dice').forEach((el)=>el.style.transition = '0.6s');
    document.querySelectorAll('.dice').forEach((el)=>el.style.transform = 'rotateZ(360deg)');
    setTimeout(()=> {
      document.querySelectorAll('.dice').forEach((el)=>el.style.transition = '0s');
      document.querySelectorAll('.dice').forEach((el)=>el.style.transform = 'rotateZ(0deg)');
    }, 600);
  }

  return (
    <div className="page-content">
      <p className="site-title">Liars Dice</p>
      {!started ? (
        <div className="game-settings">
          <p className="second-title">Velg antall terninger du skal starte med</p>
          <Slider onChange={(handleChange)} className="slider" valueLabelDisplay="auto" step={1} marks min={1} max={10} value={dices.length} />
          <p className="slider-comment">Du har valgt {dices.length} terninger</p>
          <HHButton click={startLiars} text="Start" />
        </div>
      ) : (    
        <>
      { dices.length ? (
        <div> 
            <p>Du har {dices.length} terninger igjen</p>
            <div className="dice-container">
              {dices.map((val, i) => (
                <img key={i} className="dice" src={require(`./${dices[i]}dice.png`)} alt="test" />
              ))}
            </div>
            <HHButton icon={<ShuffleIcon />} text="Kast terningene" click={throwDice} /> <br></br>
            <HHButton icon={<DeleteIcon />} text="Fjern en terning" click={removeDice} colorType="error" />
        </div>
        ) : (
          <div className="restart-button">
            <HHButton icon={<RestartAltIcon />} click={restartDice} text="Start på nytt" />
          </div>
        )
      }
      </>
      )
    }
    </div>
  );
}

export default LiarsDice;