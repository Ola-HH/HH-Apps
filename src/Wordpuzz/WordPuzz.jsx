import { useEffect, useState } from "react";
import { Dialog, Stack, Typography } from "@mui/material";
import HHButton from "../HH-Button";
import { useTranslation } from "react-i18next";
import LetterContainer from "./LetterContainer";
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardButton from "./Keyboard-Button";
import { noWords, enWords } from "./Words";

const WordPuzz = () => {
    const { t, i18n} = useTranslation();
    const [rules, setRules] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [word, setWord] = useState(null);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentLetter, setCurrentLetter] = useState(0);
    const [rend, setRend] = useState(true);
    const [guesses, setGuesses] = useState([
      ["", "", "", "", ""], 
      ["", "", "", "", ""], 
      ["", "", "", "", ""], 
      ["", "", "", "", ""], 
      ["", "", "", "", ""], 
      ["", "", "", "", ""]
    ]);
    const [colors, setColors] = useState([
      [0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
    const [currentMarker, setCurrentMarker] = useState(Array(30).fill(0));

    const [keyboardColors, setKeyboardColors] = useState(Array(29).fill(0));
    const alphabet = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"
    ]

    const closeModal = () => setModalOpen(false);
    const handleRules = () => setRules(!rules);

    const newWord = () => {
      if (i18n.resolvedLanguage === "no") {
        setWord(noWords[Math.floor(Math.random()*noWords.length)].toUpperCase())
      } else {
        setWord(enWords[Math.floor(Math.random()*enWords.length)].toUpperCase())
      }
      setLost(false);
      setWon(false);
      setModalOpen(false);
      setCurrentLetter(0);
      setCurrentGuess(0);
      setKeyboardColors(Array(29).fill(0));
      setGuesses([
        ["", "", "", "", ""], 
        ["", "", "", "", ""], 
        ["", "", "", "", ""], 
        ["", "", "", "", ""], 
        ["", "", "", "", ""], 
        ["", "", "", "", ""]
      ])
      setColors([
        [0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ])
    }

    const handleCurrent = (row, column) => {
      if (row === currentGuess) {
        setCurrentLetter(column);
      }
    }

    const handleLetter = (letter) => {
      console.log(letter);
      let temporaryGuesses = guesses;
      temporaryGuesses[currentGuess][currentLetter] = letter.toUpperCase();
      setGuesses(temporaryGuesses);
      if (currentLetter < 4 ) {
        setCurrentLetter(currentLetter + 1);
      } else {
        setRend(!rend)
      }
    }

    const handleRemove = () => {
      let temporaryGuesses = guesses;
      if (temporaryGuesses[currentGuess][currentLetter] === "" && currentLetter > 0) {
        temporaryGuesses[currentGuess][currentLetter - 1] = ""
        setCurrentLetter(currentLetter - 1);
      }
      temporaryGuesses[currentGuess][currentLetter] = "";
      setGuesses(temporaryGuesses);
      setRend(!rend)
    }
    const allEnglishWords = require('an-array-of-english-words');
    const handleGuess = async () => {
      let correct = 0;
      let temporaryGuesses = guesses;
      for (let i = 0; i < 5; i++) {
        if (temporaryGuesses[currentGuess][i] === "") {
          alert("Du må fylle ut alle fem bokstavene for å gjette!")
          return
        }
      }

      const gl = guesses[currentGuess];
      let guessedWord = gl[0]+gl[1]+gl[2]+gl[3]+gl[4]
      if (i18n.resolvedLanguage === "en") {
        if (!allEnglishWords.includes(guessedWord.toLowerCase())) {
          alert(`Ooops! We couldt find ${guessedWord.toLowerCase()} in the dictionary!`)
          return;
        }
      }

      let temporaryColors = colors;
      let temporaryKeyboardColors = keyboardColors;
      for (let i = 0; i < 5; i++) {
        temporaryColors[currentGuess][i] = 1;
        if (temporaryKeyboardColors[alphabet.indexOf(guesses[currentGuess][i])] < 1) {
              temporaryKeyboardColors[alphabet.indexOf(guesses[currentGuess][i])] = 1;
        }
        for (let k = 0; k < 5; k++) {
          if (guesses[currentGuess][i] === word.charAt(k)) {
            temporaryColors[currentGuess][i] = 2;
            if (temporaryKeyboardColors[alphabet.indexOf(guesses[currentGuess][i])] < 3) {
              temporaryKeyboardColors[alphabet.indexOf(guesses[currentGuess][i])] = 2;
            }
          }
        }
        if (guesses[currentGuess][i] === word.charAt(i)) {
          temporaryColors[currentGuess][i] = 3;
          temporaryKeyboardColors[alphabet.indexOf(guesses[currentGuess][i])] = 3;
          correct++;
        }
      }

      setColors(temporaryColors);
      setKeyboardColors(temporaryKeyboardColors);
      
      if (correct === 5) {
        setWon(true);
        setModalOpen(true);
        return;
      } else if (currentGuess === 5) {
        setLost(true)
        setModalOpen(true);
        return;
      }

      setCurrentGuess(currentGuess + 1);
      setCurrentLetter(0)
    }

    useEffect(() => {
      let temporaryCurrent = Array(30).fill(0);
      temporaryCurrent[currentGuess * 5 + currentLetter] = 1;
      setCurrentMarker(temporaryCurrent);
    }, [currentGuess, currentLetter]);
   
  return (
        <Stack textAlign="center" spacing={2}>
          <Typography variant="h3" color="primary">WordPuzz</Typography>
          { !word ? (
          <>
            <HHButton text={t('rulesBTN')} click={handleRules} />
            { rules ? (
            <Typography variant="body1" align="center" color="primary" sx={{ border: "1px solid #2b88d8", borderRadius: 1, padding: 1}}>
              {t('wp.rules')}
            </Typography>
            ):("")}
            <HHButton text={t('wordBTN')} click={newWord} />
          </>
          ):(
            <>
            <Dialog
              fullWidth
              open={modalOpen}
              onClose={closeModal}
              py={2}
              sx={{textAlign: "center", padding: "20px"}}
            >
            
            <CloseIcon onClick={closeModal} sx={{ position: "absolute", top: 5, right: 5, cursor: "pointer"}}/>
            <Stack spacing={2} sx={{p:2}}>
              {won ? (
                <>
                  <Typography variant="h3">{t('wp.victory')}</Typography>
                  <Typography variant="h6">{t('wp.tries')} {currentGuess + 1}.</Typography>
                </>
              ):(
                <>
                  <Typography variant="h3">{t('wp.loose')}</Typography>
                  <Typography variant="h6">{t('correctWord')} {word}</Typography>
                </>
              )}
              <HHButton text={t('wordBTN')} click={newWord} />
            </Stack>
            </Dialog>
            <Stack spacing={1.5} alignItems="center">
              <Stack direction="row" spacing={1}>
                <LetterContainer click={()=>handleCurrent(0, 0)} txt={guesses[0][0]} bg={colors[0][0]} brd={currentMarker[0]}/>
                <LetterContainer click={()=>handleCurrent(0, 1)} txt={guesses[0][1]} bg={colors[0][1]} brd={currentMarker[1]}/>
                <LetterContainer click={()=>handleCurrent(0, 2)} txt={guesses[0][2]} bg={colors[0][2]} brd={currentMarker[2]}/>
                <LetterContainer click={()=>handleCurrent(0, 3)} txt={guesses[0][3]} bg={colors[0][3]} brd={currentMarker[3]}/>
                <LetterContainer click={()=>handleCurrent(0, 4)} txt={guesses[0][4]} bg={colors[0][4]} brd={currentMarker[4]}/>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LetterContainer click={()=>handleCurrent(1, 0)} txt={guesses[1][0]} bg={colors[1][0]} brd={currentMarker[5]}/>
                <LetterContainer click={()=>handleCurrent(1, 1)} txt={guesses[1][1]} bg={colors[1][1]} brd={currentMarker[6]}/>
                <LetterContainer click={()=>handleCurrent(1, 2)} txt={guesses[1][2]} bg={colors[1][2]} brd={currentMarker[7]}/>
                <LetterContainer click={()=>handleCurrent(1, 3)} txt={guesses[1][3]} bg={colors[1][3]} brd={currentMarker[8]}/>
                <LetterContainer click={()=>handleCurrent(1, 4)} txt={guesses[1][4]} bg={colors[1][4]} brd={currentMarker[9]}/>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LetterContainer click={()=>handleCurrent(2, 0)} txt={guesses[2][0]} bg={colors[2][0]} brd={currentMarker[10]}/>
                <LetterContainer click={()=>handleCurrent(2, 1)} txt={guesses[2][1]} bg={colors[2][1]} brd={currentMarker[11]}/>
                <LetterContainer click={()=>handleCurrent(2, 2)} txt={guesses[2][2]} bg={colors[2][2]} brd={currentMarker[12]}/>
                <LetterContainer click={()=>handleCurrent(2, 3)} txt={guesses[2][3]} bg={colors[2][3]} brd={currentMarker[13]}/>
                <LetterContainer click={()=>handleCurrent(2, 4)} txt={guesses[2][4]} bg={colors[2][4]} brd={currentMarker[14]}/>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LetterContainer click={()=>handleCurrent(3, 0)} txt={guesses[3][0]} bg={colors[3][0]} brd={currentMarker[15]}/>
                <LetterContainer click={()=>handleCurrent(3, 1)} txt={guesses[3][1]} bg={colors[3][1]} brd={currentMarker[16]}/>
                <LetterContainer click={()=>handleCurrent(3, 2)} txt={guesses[3][2]} bg={colors[3][2]} brd={currentMarker[17]}/>
                <LetterContainer click={()=>handleCurrent(3, 3)} txt={guesses[3][3]} bg={colors[3][3]} brd={currentMarker[18]}/>
                <LetterContainer click={()=>handleCurrent(3, 4)} txt={guesses[3][4]} bg={colors[3][4]} brd={currentMarker[19]}/>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LetterContainer click={()=>handleCurrent(4, 0)} txt={guesses[4][0]} bg={colors[4][0]} brd={currentMarker[20]}/>
                <LetterContainer click={()=>handleCurrent(4, 1)} txt={guesses[4][1]} bg={colors[4][1]} brd={currentMarker[21]}/>
                <LetterContainer click={()=>handleCurrent(4, 2)} txt={guesses[4][2]} bg={colors[4][2]} brd={currentMarker[22]}/>
                <LetterContainer click={()=>handleCurrent(4, 3)} txt={guesses[4][3]} bg={colors[4][3]} brd={currentMarker[23]}/>
                <LetterContainer click={()=>handleCurrent(4, 4)} txt={guesses[4][4]} bg={colors[4][4]} brd={currentMarker[24]}/>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LetterContainer click={()=>handleCurrent(5, 0)} txt={guesses[5][0]} bg={colors[5][0]} brd={currentMarker[25]}/>
                <LetterContainer click={()=>handleCurrent(5, 1)} txt={guesses[5][1]} bg={colors[5][1]} brd={currentMarker[26]}/>
                <LetterContainer click={()=>handleCurrent(5, 2)} txt={guesses[5][2]} bg={colors[5][2]} brd={currentMarker[27]}/>
                <LetterContainer click={()=>handleCurrent(5, 3)} txt={guesses[5][3]} bg={colors[5][3]} brd={currentMarker[28]}/>
                <LetterContainer click={()=>handleCurrent(5, 4)} txt={guesses[5][4]} bg={colors[5][4]} brd={currentMarker[29]}/>
              </Stack>

              { won || lost ? (
                <HHButton text={t('wordBTN')} click={newWord} />
              ):(
              <Stack sx={{width: "100%", border: "1px solid #2b88d8", borderRadius: "2px"}}>
                <Stack direction="row">
                  <KeyboardButton wd={1/11} bg={keyboardColors[16]} txt="Q" click={()=>handleLetter('q')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[22]} txt="W" click={()=>handleLetter('w')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[4]} txt="E" click={()=>handleLetter('e')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[17]} txt="R" click={()=>handleLetter('r')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[19]} txt="T" click={()=>handleLetter('t')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[24]} txt="Y" click={()=>handleLetter('y')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[20]} txt="U" click={()=>handleLetter('u')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[8]} txt="I" click={()=>handleLetter('i')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[14]} txt="O" click={()=>handleLetter('o')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[15]} txt="P" click={()=>handleLetter('p')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[28]} txt="Å" click={()=>handleLetter('å')}/>
                </Stack>
                <Stack direction="row">
                  <KeyboardButton wd={1/11} bg={keyboardColors[0]} txt="A" click={()=>handleLetter('a')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[18]} txt="S" click={()=>handleLetter('s')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[3]} txt="D" click={()=>handleLetter('d')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[5]} txt="F" click={()=>handleLetter('f')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[6]} txt="G" click={()=>handleLetter('g')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[7]} txt="H" click={()=>handleLetter('h')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[9]} txt="J" click={()=>handleLetter('j')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[10]} txt="K" click={()=>handleLetter('k')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[11]} txt="L" click={()=>handleLetter('l')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[27]} txt="Ø" click={()=>handleLetter('ø')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[26]} txt="Æ" click={()=>handleLetter('æ')}/>
                </Stack>
                <Stack direction="row">
                  <KeyboardButton wd={2/11} txt="Enter" click={handleGuess}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[25]} txt="Z" click={()=>handleLetter('z')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[23]} txt="X" click={()=>handleLetter('x')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[2]} txt="C" click={()=>handleLetter('c')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[21]} txt="V" click={()=>handleLetter('v')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[1]} txt="B" click={()=>handleLetter('b')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[13]} txt="N" click={()=>handleLetter('n')}/>
                  <KeyboardButton wd={1/11} bg={keyboardColors[12]} txt="M" click={()=>handleLetter('m')}/>
                  <KeyboardButton wd={2/11} txt={<BackspaceOutlinedIcon sx={{fontSize: "20px"}} />} 
                  click={handleRemove}/>
                </Stack>
              </Stack>
              )}  
            </Stack>
            </>
          )}
          <Typography variant="h6" color="transparent" sx={{display: "none"}}>{rend.toString()}</Typography>
      </Stack>
  )
}

export default WordPuzz;
