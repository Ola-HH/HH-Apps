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
            404: {
                error: 'Whoops! Can\'t find the page you are looking for!',
                home: "Go back to the home page"
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
            404: {
                error: 'Oisann! Vi finner ikke siden du leter etter!',
                home: "Tilbake til hjemsiden"
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
            }
        }
      }
    }
  });

export default i18n;