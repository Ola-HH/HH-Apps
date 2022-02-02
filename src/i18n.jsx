import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'no',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
            rulesBTN: 'Show/hide rules',
            wordBTN: 'Receive a new word',
            correctWord: 'The correct word was',
            nav: {
                no: 'Norwegian',
                en: 'English',
                hi: 'Hi',
                login: 'Sign in',
                logout: 'Sign out'
            },
            home: {
                welcome: "Welcome to HH Apps!",
                pickGame: "Pick a game"
            },
            ld: {
                sliderInstruction: 'Pick how many dices you want to start with',
                sliderComment: 'dices chosen',
                diceComment: 'dices left',
                throwBTN: 'Roll the dices',
                removeBTN: 'Remove a dice',
                restartBTN: 'Start over'
            },
            gruble: {
                download: 'Download Gruble sheets here',
                sliderInstruction: 'Choose how long each round should last',
                sliderComment: 'seconds chosen',
                topicBTN: 'Show new topics',
                oneLetterBTN: 'Receive a letter',
                fiveLetterBTN: 'Receive five letters',
                time: 'Time',
                countdownComment: 'seconds left',
                timeBTN: 'Start timer',
                newLetters: 'New letters',
            },
            rof: {
                cardBTN: 'New card',
                done: 'You have now used all 52 cards',
                newRoundBTN: 'Start a new round',
            },
            hm: {
                lives: 'lives left',
                victory: 'Congrats, you won!',
                loose: 'Sorry, you lost!',
                rules: 'All participants must guess a letter. The round continues clockwise around the table. If you answer incorrectly, you must take a sip. If you are the last one to answer incorrectly, so the game is lost, you have to drink up the rest of the drink you have in your glass. If you are the last one to answer correctly, so the game is won, you can hand out 5 sips to other participants.'
            },
            wp: {
                victory: 'You won!',
                loose: 'You lost',
                tries: 'Your number of attempts was',
                rules: 'You are going du guess the key word. Guess word by word. You can only guess real words (comming soon). In the words you guess, the letters that also are included in the key word will be displayed in blue. If they also are placed at the correct place within the word, they will be displayed in green. A letter can appear multiple times in the same word'
            }
        }
      },
      no: {
        translation: {
            rulesBTN: 'Vis/skjul regler',
            wordBTN: 'Få nytt ord',
            correctWord: 'Riktig ord var',
            nav: {
                no: 'Norsk',
                en: 'Engelsk',
                hi: 'Hei',
                login: 'Logg inn',
                logout: 'Logg ut'
            },
            home: {
                welcome: "Velkommen til HH Apps!",
                pickGame: "Velg et spill"
            },
            ld: {
                sliderInstruction: 'Velg hvor mange terninger du skal starte med',
                sliderComment: 'terninger valgt',
                diceComment: 'terninger igjen',
                throwBTN: 'Kast terningene',
                removeBTN: 'Fjern en terning',
                restartBTN: 'Start på nytt'
            },
            gruble: {
                download: 'Last ned grubleark her',
                sliderInstruction: 'Velg hvor lenge hver runde skal vare',
                sliderComment: 'sekunder valgt',
                topicBTN: 'Vis nye temaer',
                oneLetterBTN: 'Få en bokstav',
                fiveLetterBTN: 'Få fem bokstaver',
                time: 'Tid',
                countdownComment: 'sekunder igjen',
                timeBTN: 'Start tiden',
                newLetters: 'Nye bokstaver'
            },
            rof: {
                cardBTN: 'Nytt kort',
                done: 'Dere har nå brukt samtlige 52 kort',
                newRoundBTN: 'Start en ny runde'
            },
            hm: {
                lives: 'liv igjen',
                victory: 'Grattis, dere vant!',
                loose: 'Beklager, dere tapte!',
                rules: 'På rundgang skal alle deltagere gjette på hver sin bokstav. Svarer du feil må du ta en slurk. Er du sistemann til å svare feil, slik at spillet er tapt, må du drikke opp resten av drikka du har i glasset. Er du sistemann til å svare riktig, slik at spillet er vunnet, kan du dele ut 5 slurker.'
            },
            wp: {
                victory: 'Du vant!',
                loose: 'Du tapte',
                tries: 'Antall forsøk du brukte var',
                rules: 'Du skal gjette deg frem til løsningsordet. Gjett ett og ett ord. Du kan kun gjette på ekte ord (Kommer snart). I ordene du gjetter vil bokstavene som også er med i løsningsordet bli blå. Hvis de i tillegg er plassert på riktig sted i ordet blir de grønne. En bokstav kan forekomme flere ganger i samme ord.'
            }
        }
      }
    }
  });

export default i18n;