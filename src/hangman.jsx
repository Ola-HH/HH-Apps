import { useState } from "react";
import './hangman.css';
import HHButton from "./HH-Button";
import LetterButton from "./LetterButton";

const Hangman = () => {
    const [rules, setRules] = useState(false);
    const [currentWord, setCurrentWord] = useState([]);
    const [lives, setLives] = useState(8);
    const [started, setStarted] = useState(false);
    const [correct, setCorrect] = useState([]);
    const [won, setWon] = useState('unknown');

    const allWords = [
        'CIDERFYLLA', 'BÅNNSKI', 'HANGOVER', 'FYLLEANGST', 'ØLBRILLER', 'DRIKKELEK', 'NATTMAT', 'DRAMAQUEEN', 'FJORTISFYLLA', 'SHOT', 'PILS', 'RUSSEBUSS', 'VORSPIEL', 'NACHSPIEL', 'SIXPACK', 'BREEZER', 'NATTKLUBB', 'UTESTED', 'MAXITAXI', 'CARLSBERG', 'GUTTASTEMNING', 'HALVLITER', 'SHOTGUN', 'CHUGGING', 'ABSOLUT', 'JAGERMEISTER', 'SNUSBOKS', 'FESTRØYKER', 'BARTENDER', 'COCKTAIL', 'GLATTCELLA', 'ALKOHOL', 'BRISEN'
        ]

    const handleRules = () => setRules(!rules);
    const newWord = () => {
        setStarted(true)
        setWon('unknown')
        setLives(8)
        const number = Math.floor(Math.random() * allWords.length)
        setCurrentWord(allWords[number])
        setCorrect(Array(allWords[number].length).fill(""))
        document.querySelectorAll('.letter-btn').forEach(el=>el.removeAttribute('disabled'))
    }
    const guess = (event) => {
        event.target.setAttribute("disabled", "true");
        const letter = event.target.innerHTML;
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
      <div className="page-content">
          <p className="site-title">Hangman</p>
          <HHButton text="Vis/skjul regler" click={handleRules} />
          { rules ? (
          <p className="description">På rundgang skal alle deltagere gjette på hver sin bokstav. Svarer du feil må du ta en slurk. Er du sistemann til å svare feil, slik at spillet er tapt, må du drikke opp resten av drikka du har i glasset. Er du sistemann til å svare riktig, slik at spilet er vunnet, kan du dele ut 5 slurker.</p>
          ):("")}
          <br></br>
          <HHButton text="Få nytt ord" click={newWord} />
          <div className="game-content">
            <p>Dere har {lives} liv igjen</p>
            <div className="drawing">
                <img src={require(`./hangman-imgs/${lives}liv.png`)} alt="liv igjen"/>
            </div>
            <div className="word">
                {correct.map((val, i) => (
                    <div key={i} className="letter">{correct[i]}</div>
                ))}
            </div>
            { started ? (
            <div className="guess-area">
                    <LetterButton text="A" click={guess} />
                    <LetterButton text="B" click={guess} />
                    <LetterButton text="C" click={guess} />
                    <LetterButton text="D" click={guess} />
                    <LetterButton text="E" click={guess} />
                    <LetterButton text="F" click={guess} />
                    <LetterButton text="G" click={guess} />
                    <LetterButton text="H" click={guess} />
                    <LetterButton text="I" click={guess} />
                    <LetterButton text="J" click={guess} />
                    <LetterButton text="K" click={guess} />
                    <LetterButton text="L" click={guess} />
                    <LetterButton text="M" click={guess} />
                    <LetterButton text="N" click={guess} />
                    <LetterButton text="O" click={guess} />
                    <LetterButton text="P" click={guess} />
                    <LetterButton text="Q" click={guess} />
                    <LetterButton text="R" click={guess} />
                    <LetterButton text="S" click={guess} />
                    <LetterButton text="T" click={guess} />
                    <LetterButton text="U" click={guess} />
                    <LetterButton text="V" click={guess} />
                    <LetterButton text="W" click={guess} />
                    <LetterButton text="X" click={guess} />
                    <LetterButton text="Y" click={guess} />
                    <LetterButton text="Z" click={guess} />
                    <LetterButton text="Æ" click={guess} />
                    <LetterButton text="Ø" click={guess} />
                    <LetterButton text="Å" click={guess} />
            </div>
            ) : ("")
            }
            <br />
            {won === 'yes' ? (
                <p>Grattis, dere vant!</p>
            ) : won === 'no' ? (
                <p>Beklager, dere tapte! Riktig ord var {currentWord}.</p>
            ): ("")}   
          </div>
      </div>
  )
}

export default Hangman;