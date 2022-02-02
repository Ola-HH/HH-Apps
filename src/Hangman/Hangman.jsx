import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import HHButton from "../HH-Button";
import LetterButton from "../LetterButton";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";

const Hangman = () => {
    const { t, i18n } = useTranslation();
    const [rules, setRules] = useState(false);
    const [currentWord, setCurrentWord] = useState([]);
    const [lives, setLives] = useState(8);
    const [started, setStarted] = useState(false);
    const [correct, setCorrect] = useState([]);
    const [won, setWon] = useState('unknown');

    const noWords = [
        'CIDERFYLLA', 'BÅNNSKI', 'HANGOVER', 'FYLLEANGST', 'ØLBRILLER', 'DRIKKELEK', 'NATTMAT', 'DRAMAQUEEN', 'FJORTISFYLLA', 'SHOT', 'PILS', 'RUSSEBUSS', 'VORSPIEL', 'NACHSPIEL', 'SIXPACK', 'BREEZER', 'NATTKLUBB', 'UTESTED', 'MAXITAXI', 'CARLSBERG', 'GUTTASTEMNING', 'HALVLITER', 'SHOTGUN', 'CHUGGING', 'ABSOLUT', 'JAGERMEISTER', 'SNUSBOKS', 'FESTRØYKER', 'BARTENDER', 'COCKTAIL', 'GLATTCELLA', 'ALKOHOL', 'BRISEN', 'BEERPONG', 'VINKVELD', 'VINMONOPOLET', 'BLACKJACK', 'CASINO', 'AFTERSKI', 'RØLP'
        ]
    const enWords = [
            'BEER', 'DRUNK', 'AFTERSKI', 'ALCOHOL', 'PARTY', 'COCKTAIL', 'BARTENDER', 'WASTED'
        ]

    const handleRules = () => setRules(!rules);
    const newWord = () => {
        setStarted(true)
        setWon('unknown')
        setLives(8)
        if (i18n.resolvedLanguage === 'no') {
            const number = Math.floor(Math.random() * noWords.length)
            setCurrentWord(noWords[number])
            setCorrect(Array(noWords[number].length).fill(""))
        } else {
            const number = Math.floor(Math.random() * enWords.length)
            setCurrentWord(enWords[number])
            setCorrect(Array(enWords[number].length).fill(""))
        }
        
    }
    const guess = (test) => {
        const letter = test
        if (currentWord.includes(letter)) {
            let position = 0;
            let updatedCorrect = correct;
            while (position !== -1) {
                position = currentWord.indexOf(letter, position);
                if (position === -1) {
                    continue
                }  
                updatedCorrect.splice(position, 1, letter);
                position++
            }
            setCorrect(updatedCorrect)
            setWon(won + "n")
            if (!updatedCorrect.includes("")) {
                setStarted(false)
                setWon('yes');
            }
        } else {
            setLives(lives - 1);
            if (lives === 1) {
                setStarted(false);
                setWon('no');
            }
        }
    }
  return (
        <Stack textAlign="center" spacing={2}>
          <Typography variant="h3" color="primary">Hangman</Typography>
          <HHButton text={t('rulesBTN')} click={handleRules} />
          { rules ? (
          <Typography variant="body1" align="center" color="primary" sx={{ border: "1px solid #2b88d8", borderRadius: 1, padding: 1}}>{t('hm.rules')}</Typography>
          ):("")}
          <HHButton text={t('wordBTN')} click={newWord} />
          <Typography variant="body1" color="primary">{lives} {t('hm.lives')}</Typography>
          <Box alignItems="center">
            <img src={require(`./hangman-imgs/${lives}liv.png`)} width="35%" alt="liv igjen" />
          </Box>
          <Stack direction="row" spacing={1} justifyContent="center">
            {correct.map((val, i) => (
                <Box key={i} sx={{borderBottom: "2px solid #2b88d8", width: "4vw", height: 30}} >
                    <Typography variant="h5" color="primary">{correct[i]}</Typography>
                </Box>
            ))}
          </Stack>
          { started ? (
            <Stack justifyContent="center" direction="row" sx={{flexWrap: "wrap", margin: "auto"}}>
                <LetterButton text="A" click={() => guess("A")} />
                <LetterButton text="B" click={() => guess("B")} />
                <LetterButton text="C" click={() => guess("C")} />
                <LetterButton text="D" click={() => guess("D")} />
                <LetterButton text="E" click={() => guess("E")} />
                <LetterButton text="F" click={() => guess("F")} />
                <LetterButton text="G" click={() => guess("G")} />
                <LetterButton text="H" click={() => guess("H")} />
                <LetterButton text="I" click={() => guess("I")} />
                <LetterButton text="J" click={() => guess("J")} />
                <LetterButton text="K" click={() => guess("K")} />
                <LetterButton text="L" click={() => guess("L")} />
                <LetterButton text="M" click={() => guess("M")} />
                <LetterButton text="N" click={() => guess("N")} />
                <LetterButton text="O" click={() => guess("O")} />
                <LetterButton text="P" click={() => guess("P")} />
                <LetterButton text="Q" click={() => guess("Q")} />
                <LetterButton text="R" click={() => guess("R")} />
                <LetterButton text="S" click={() => guess("S")} />
                <LetterButton text="T" click={() => guess("T")} />
                <LetterButton text="U" click={() => guess("U")} />
                <LetterButton text="V" click={() => guess("V")} />
                <LetterButton text="W" click={() => guess("W")} />
                <LetterButton text="X" click={() => guess("X")} />
                <LetterButton text="Y" click={() => guess("Y")} />
                <LetterButton text="Z" click={() => guess("Z")} />
                <LetterButton text="Æ" click={() => guess("Æ")} />
                <LetterButton text="Ø" click={() => guess("Ø")} />
                <LetterButton text="Å" click={() => guess("Å")} />
            </Stack>
            ) : ("")
            }
            {won === 'yes' ? (
                <Typography variant="body1" color="primary">{t('hm.victory')}</Typography>
            ) : won === 'no' ? (
                <>
                    <Typography variant="h4" color="primary">{t('hm.loose')}</Typography>
                    <Typography variant="h6" color="primary">{t('correctWord')} {currentWord}.</Typography>
                </>
            ): ("")}   
      </Stack>
  )
}

export default Hangman;