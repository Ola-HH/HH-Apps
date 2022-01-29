import { Avatar, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HHButton from "../HH-Button";
import { useTranslation } from "react-i18next";

const LiarsDice = () => {
  const { t } = useTranslation();

  const [dices, setDices] = useState(Array(5).fill(6));
  const [started, setStarted] = useState(false);
  const [rotate, setRotate] = useState(false)

  const handleChange = (e, val) => setDices(Array(val).fill(6));
  const startLiars = () => setStarted(true); 
  const removeDice = () => setDices(dices.slice(0, -1));

  const restartDice = () => {
    setDices(Array(5).fill(6));
    setStarted(false);
  }

  const throwDice = () => {
    setDices(dices.map(() => Math.floor(Math.random() * 6) + 1).sort());
    setRotate(true)
    setTimeout(()=> {
      setRotate(false)
    }, 600);
  }

  return (
    <Stack textAlign="center" spacing={2}>
      <Typography variant="h3" color="primary">Liars dice</Typography>
      {!started ? (
        <Stack spacing={2}>
          <Typography variant="h6" color="primary">{t('ld.sliderInstruction')}</Typography>
          <Slider onChange={(handleChange)} className="slider" valueLabelDisplay="auto" step={1} marks min={1} max={10} value={dices.length} />
          <Typography variant="body1" color="primary">{dices.length} {t('ld.sliderComment')}</Typography>
          <HHButton click={startLiars} text="Start" />
        </Stack>
      ) : (    
        <>
      { dices.length ? (
        <> 
            <Stack direction="row" justifyContent="center" sx={{ flexWrap: "wrap"}}>
              {dices.map((val, i) => (
                <Avatar key={i} src={require(`./dices/${dices[i]}dice.png`)} alt="test" sx={{
                  borderRadius: 0, width: 50, height: 50, margin: 1, 
                  transition: rotate ? "0.6s" : "0", 
                  transform: rotate ? "rotateZ(360deg)" : "rotateZ(0deg)"
                }}/>
              ))}
            </Stack>
            <Typography variant="body1" color="primary">{dices.length} {t('ld.diceComment')}</Typography>
            <HHButton icon={<ShuffleIcon />} text={t('ld.throwBTN')} click={throwDice} />
            <HHButton icon={<DeleteIcon />} text={t('ld.removeBTN')} click={removeDice} colorType="error" />
        </>
        ) : (
            <HHButton icon={<RestartAltIcon />} click={restartDice} text={t('ld.restartBTN')} />
        )
      }
      </>
      )
    }
    </Stack>
  );
}

export default LiarsDice;