import React from "react";
import { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import HHButton from "../HH-Button";


function Ringoffire() {

  const cards = [
    {
      title: "Regel",
      desc: "Spilleren som trakk dette kortet kan nå lage en regel som varer resten av spillet. Alle som bryter regelen må ta en slurk.",
      src: "ace_of_clubs.png"
    },
    {
      title: "Regel",
      desc: "Spilleren som trakk dette kortet kan nå lage en regel som varer resten av spillet. Alle som bryter regelen må ta en slurk.", 
      src: "ace_of_diamonds.png"
    },
    {
      title: "Drikkepartner",
      desc: "Velg en spiller som må drikke hver gang du drikker. Gjelder helt til noen andre får en drikkepartner",
      src: "ace_of_hearts.png"
    },
    {
      title: "Drikkepartner",
      desc: "Velg en spiller som må drikke hver gang du drikker. Gjelder helt til noen andre får en drikkepartner",
      src: "ace_of_spades.png"
    }, {
      title: "Drikk",
      desc: "Spilleren som trekker dette kortet må selv drikke 2 slurker.",
      src: "2_of_clubs.png"
    },
    {
      title: "Drikk",
      desc: "Spilleren som trekker dette kortet må selv drikke 2 slurker.",
      src: "2_of_diamonds.png"
    },
    {
      title: "Drikk",
      desc: "Spilleren som trekker dette kortet må selv drikke 2 slurker.",
      src: "2_of_hearts.png"
    },
    {
      title: "Drikk",
      desc: "Spilleren som trekker dette kortet må selv drikke 2 slurker.",
      src: "2_of_spades.png"
    },{
      title: "Kategori",
      desc: "Spilleren som trekker kortet velger en kategori, som for eksempel fotballspillere. Spilleren som valgte kategori sier deretter et ord innenfor denne kategorien, som for eksempel Cristiano Ronaldo. Deretter skal den til venstre si et annet ord i samme kategori. Runden fortsetter til venstre rundt bordet. Førstemann som sier et ord som er sagt eller bruker for lang tid må ta to slurker.",
      src: "3_of_clubs.png"
    },
    {
      title: "Kategori",
      desc: "Spilleren som trekker kortet velger en kategori, som for eksempel fotballspillere. Spilleren som valgte kategori sier deretter et ord innenfor denne kategorien, som for eksempel Cristiano Ronaldo. Deretter skal den til venstre si et annet ord i samme kategori. Runden fortsetter til venstre rundt bordet. Førstemann som sier et ord som er sagt eller bruker for lang tid må ta to slurker.",
      src: "3_of_diamonds.png"
    },
    {
      title: "Minstemann",
      desc: "Sammenlign drikka du har i glasset, boksen etc. med drikka til personen til venstre for deg. Den av dere som har minst igjen må drikke opp resten.",
      src: "3_of_hearts.png"
    },
    {
      title: "Minstemann",
      desc: "Sammenlign drikka du har i glasset, boksen etc. med drikka til personen til venstre for deg. Den av dere som har minst igjen må drikke opp resten.",
      src: "3_of_spades.png"
    },{
      title: "Journalist",
      desc: "Det er fra nå av ikke lov til å svare på spørsmål fra spilleren som trakk dette kortet, som nå er journalist. Hvis noen svarer på spørsmål fra jounralisten må de drikke en slurk. Hvis noen svarer «Ingen kommentar» på et spørsmål fra journalisten, må journalisten selv ta en slurk. Journalisten har denne egenskapen helt til noen andre får den.",
      src: "4_of_clubs.png"
    },
    {
      title: "Journalist",
      desc: "Det er fra nå av ikke lov til å svare på spørsmål fra spilleren som trakk dette kortet, som nå er journalist. Hvis noen svarer på spørsmål fra jounralisten må de drikke en slurk. Hvis noen svarer «Ingen kommentar» på et spørsmål fra journalisten, må journalisten selv ta en slurk. Journalisten har denne egenskapen helt til noen andre får den.",
      src: "4_of_diamonds.png"
    },
    {
      title: "Del ut",
      desc: "Spilleren som trakk kortet kan nå dele ut fire slurker til de rundt bordet. Man kan gi alle slurkene til samme person, eller fordele de.",
      src: "4_of_hearts.png"
    },
    {
      title: "Del ut",
      desc: "Spilleren som trakk kortet kan nå dele ut fire slurker til de rundt bordet. Man kan gi alle slurkene til samme person, eller fordele de.",
      src: "4_of_spades.png"
    },{
      title: "Del ut",
      desc: "Spilleren som trakk kortet kan nå dele ut fem slurker til de rundt bordet. Man kan gi alle slurkene til samme person, eller fordele de.",
      src: "5_of_clubs.png"
    },
    {
      title: "Del ut",
      desc: "Spilleren som trakk kortet kan nå dele ut fem slurker til de rundt bordet. Man kan gi alle slurkene til samme person, eller fordele de.",
      src: "5_of_diamonds.png"
    },
    {
      title: "Politikeren",
      desc: "Spilleren som trakk kortet er nå politiker, og kan derfor ikke svare konkret ja eller nei. Dersom politikeren bruker enten ordet ja eller nei må han ta en slurk. Dette gjelder helt til en annen spiller blir politiker.",
      src: "5_of_hearts.png"
    },
    {
      title: "Politikeren",
      desc: "Spilleren som trakk kortet er nå politiker, og kan derfor ikke svare konkret ja eller nei. Dersom politikeren bruker enten ordet ja eller nei må han ta en slurk. Dette gjelder helt til en annen spiller blir politiker.",
      src: "5_of_spades.png"
    },{
      title: "Svart eller hvitt",
      desc: "Alle rundt bordet blir med på svart eller hvitt. Mindretallet ryker ut hver runde. Alle som ryker ut før eller samtidig som spilleren som trakk kortet må ta en slurk når de ryker ut. For hver runde spilleren som trakk kortet overlever, må alle som allerede er ute ta en slurk til.",
      src: "6_of_clubs.png"
    },
    {
      title: "Svart eller hvitt",
      desc: "Alle rundt bordet blir med på svart eller hvitt. Mindretallet ryker ut hver runde. Alle som ryker ut før eller samtidig som spilleren som trakk kortet må ta en slurk når de ryker ut. For hver runde spilleren som trakk kortet overlever, må alle som allerede er ute ta en slurk til.",
      src: "6_of_diamonds.png"
    },
    {
      title: "Kategoriduell",
      desc: "Snu deg mot spilleren til venstre for deg. Velg en kategori, for eksempel ølmerker. Si et ord innenfor denne kategorien, for eksempel «Ringnes». Deretter er det personen til venstre sin tur, før det igjen er din tur. Førstemann av dere to som sier et brukt ord, eller bruker for lang tid må ta en slurk.",
      src: "6_of_hearts.png"
    },
    {
      title: "Kategoriduell",
      desc: "Snu deg mot spilleren til venstre for deg. Velg en kategori, for eksempel ølmerker. Si et ord innenfor denne kategorien, for eksempel «Ringnes». Deretter er det personen til venstre sin tur, før det igjen er din tur. Førstemann av dere to som sier et brukt ord, eller bruker for lang tid må ta en slurk.",
      src: "6_of_spades.png"
    },{
      title: "Løgndetektoren",
      desc: "Spillerne rundt bordet kan nå sammen stille et spørsmål til spilleren som trakk dette kortet. Spilleren må svare helt ærlig. Nekter spilleren å svare må spilleren ta 3 slurker.",
      src: "7_of_clubs.png"
    },
    {
      title: "Løgndetektoren",
      desc: "Spillerne rundt bordet kan nå sammen stille et spørsmål til spilleren som trakk dette kortet. Spilleren må svare helt ærlig. Nekter spilleren å svare må spilleren ta 3 slurker.",
      src: "7_of_diamonds.png"
    },
    {
      title: "Spåmannen",
      desc: "Spilleren som trakk dette kortet trakk en syver. Spilleren skal nå gjette om neste spiller får et kort med høyere eller lavere verdi. Ess har lavest verdi, bildekort har høyest verdi. Gjetter spilleren riktig må alle andre spillere ta en slurk, gjetter spilleren feil må han selv ta en slurk.",
      src: "7_of_hearts.png"
    },
    {
      title: "Spåmannen",
      desc: "Spilleren som trakk dette kortet trakk en syver. Spilleren skal nå gjette om neste spiller får et kort med høyere eller lavere verdi. Ess har lavest verdi, bildekort har høyest verdi. Gjetter spilleren riktig må alle andre spillere ta en slurk, gjetter spilleren feil må han selv ta en slurk.",
      src: "7_of_spades.png"
    },{
      title: "Giftige øyne",
      desc: "Det er fra nå av ikke lov til å se spilleren som trakk dette kortet i øynene. Får man øyekontakt med denne spilleren må man drikke en slurk. Spilleren som trakk kortet har denne egenskapen helt til noen andre får den.",
      src: "8_of_clubs.png"
    },
    {
      title: "Giftige øyne",
      desc: "Det er fra nå av ikke lov til å se spilleren som trakk dette kortet i øynene. Får man øyekontakt med denne spilleren må man drikke en slurk. Spilleren som trakk kortet har denne egenskapen helt til noen andre får den.",
      src: "8_of_diamonds.png"
    },
    {
      title: "Gangeleken",
      desc: "Spilleren som trekker kortet velger et tall høyere enn 2, for eksempel 6. (Ikke velg samme antall som spillere). Spilleren starter deretter å telle ved å si en. Personen til venstre sier to osv. Når man kommer til et tall som er delelig med tallet som ble valgt skal man si «SKÅL» istedenfor tallet. Førstemann som sier feil eller bruker for lang tid må ta tre slurker. Tar det for lang tid legger spilleren som trakk kortet til et nytt tall, og begynner på nytt.",
      src: "8_of_hearts.png"
    },
    {
      title: "Gangeleken",
      desc: "Spilleren som trekker kortet velger et tall høyere enn 2, for eksempel 6. (Ikke velg samme antall som spillere). Spilleren starter deretter å telle ved å si en. Personen til venstre sier to osv. Når man kommer til et tall som er delelig med tallet som ble valgt skal man si «SKÅL» istedenfor tallet. Førstemann som sier feil eller bruker for lang tid må ta tre slurker. Tar det for lang tid legger spilleren som trakk kortet til et nytt tall, og begynner på nytt.",
      src: "8_of_spades.png"
    },{
      title: "Presten",
      desc: "Spilleren som trakk dette kortet er nå prest, og kan derfor ikke banne. Dersom presten banner må han drikke en slurk. Dette gjelder helt til noen andre blir prest.",
      src: "9_of_clubs.png"
    },
    {
      title: "Presten",
      desc: "Spilleren som trakk dette kortet er nå prest, og kan derfor ikke banne. Dersom presten banner må han drikke en slurk. Dette gjelder helt til noen andre blir prest.",
      src: "9_of_diamonds.png"
    },
    {
      title: "Husnummer",
      desc: "Spilleren som trekker kortet må fortelle om han bor på en adresse med partall- eller oddetallsnummer. Alle som bor i samme type nummer må ta to slurker, inkludert spilleren som trakk.",
      src: "9_of_hearts.png"
    },
    {
      title: "Husnummer",
      desc: "Spilleren som trekker kortet må fortelle om han bor på en adresse med partall- eller oddetallsnummer. Alle som bor i samme type nummer må ta to slurker, inkludert spilleren som trakk.",
      src: "9_of_spades.png"
    },{
      title: "Fossen",
      desc: "Alle spillerne skal nå drikke på likt. Det er ikke lov til å stoppe før spilleren som trakk dette kortet stopper.",
      src: "10_of_clubs.png"
    },
    {
      title: "Fossen",
      desc: "Alle spillerne skal nå drikke på likt. Det er ikke lov til å stoppe før spilleren som trakk dette kortet stopper.",
      src: "10_of_diamonds.png"
    },
    {
      title: "Pokerfjes",
      desc: "Spilleren som trakk kortet skal fortelle spilleren til venstre en påstand om seg selv. Spilleren til venstre skal så gjette om påstanden er sann eller usann. Gjetter han riktig må spilleren som fortalte påstanden ta en slurk, gjetter han feil må han selv ta en slurk",
      src: "10_of_hearts.png"
    },
    {
      title: "Pokerfjes",
      desc: "Spilleren som trakk kortet skal fortelle spilleren til venstre en påstand om seg selv. Spilleren til venstre skal så gjette om påstanden er sann eller usann. Gjetter han riktig må spilleren som fortalte påstanden ta en slurk, gjetter han feil må han selv ta en slurk",
      src: "10_of_spades.png"
    },{
      title: "Klovnen",
      desc: "Spilleren som trakk dette kortet er nå klovn, og får et minutt til å få de rundt bordet til å le. Oppgaven er over når førstemann ler. Den første som ler må ta en slurk. Dersom ingen ler i løpet av 60 sekunder må klovnen selv ta tre slurker.",
      src: "jack_of_clubs.png"
    },
    {
      title: "Klovnen",
      desc: "Spilleren som trakk dette kortet er nå klovn, og får et minutt til å få de rundt bordet til å le. Oppgaven er over når førstemann ler. Den første som ler må ta en slurk. Dersom ingen ler i løpet av 60 sekunder må klovnen selv ta tre slurker.",
      src: "jack_of_diamonds.png"
    },
    {
      title: "Rim",
      desc: "Spilleren som trakk kortet skal si et ord. Personen til venstre skal deretter si et ord som rimer på det ordet. Dette fortsetter mot venstre. Førstemann som sier et ord som er brukt eller bruker for lang tid må ta to slurker.",
      src: "jack_of_hearts.png"
    },
    {
      title: "Rim",
      desc: "Spilleren som trakk kortet skal si et ord. Personen til venstre skal deretter si et ord som rimer på det ordet. Dette fortsetter mot venstre. Førstemann som sier et ord som er brukt eller bruker for lang tid må ta to slurker.",
      src: "jack_of_spades.png"
    },{
      title: "Klappeleken",
      desc: "Personen som trakk kortet skal klappe en gang. Deretter skal personen til venstre klappe osv. Dersom man klapper én gang fortsetter runden samme vei. Klapper man to ganger snus rekkefølgen motsatt vei. Førstemann som klapper feil må ta en slurk.",
      src: "queen_of_clubs.png"
    },
    {
      title: "Klappeleken",
      desc: "Personen som trakk kortet skal klappe en gang. Deretter skal personen til venstre klappe osv. Dersom man klapper én gang fortsetter runden samme vei. Klapper man to ganger snus rekkefølgen motsatt vei. Førstemann som klapper feil må ta en slurk.",
      src: "queen_of_diamonds.png"
    },
    {
      title: "Kirketjeneren",
      desc: "Spilleren som trakk dette kortet er nå kirketjener, og må derfor holde kontroll på klokka. Hver gang klokken viser en hel tier, for eksempel 20:40, må kirketjeneren rope «DING DONG». Dersom kirketjeneren går glipp av et minutt som er en hel tier må han drikke en slurk. Kirketjeneren har denne jobben helt til noen andre får den.",
      src: "queen_of_hearts.png"
    },
    {
      title: "Kirketjeneren",
      desc: "Spilleren som trakk dette kortet er nå kirketjener, og må derfor holde kontroll på klokka. Hver gang klokken viser en hel tier, for eksempel 20:40, må kirketjeneren rope «DING DONG». Dersom kirketjeneren går glipp av et minutt som er en hel tier må han drikke en slurk. Kirketjeneren har denne jobben helt til noen andre får den.",
      src: "queen_of_spades.png"
    },{
      title: "Mr. Freeze",
      desc: "Mr. Freeze kan når som helt fryse helt, og ikke bevege en muskel eller si noe. Alle rundt bordet må da gjøre det samme. Sistemann som fryser må ta to slurker. Egenskapen kan kun brukes en gang.",
      src: "king_of_clubs.png"
    },
    {
      title: "Kongen",
      desc: "Spilleren som får denne egenskapen skal kun tiltales og omtales som «Kongen». Hvis noen kaller Kongen for spillerens navn, eller noe annet, må denne spilleren ta en slurk. Kongen har denne egenskapen helt til noen andre får den.",
      src: "king_of_diamonds.png"
    },
    {
      title: "Kongen",
      desc: "Spilleren som får denne egenskapen skal kun tiltales og omtales som «Kongen». Hvis noen kaller Kongen for spillerens navn, eller noe annet, må denne spilleren ta en slurk. Kongen har denne egenskapen helt til noen andre får den.",
      src: "king_of_hearts.png"
    },
    {
      title: "Mr. Freeze",
      desc: "Mr. Freeze kan når som helt fryse helt, og ikke bevege en muskel eller si noe. Alle rundt bordet må da gjøre det samme. Sistemann som fryser må ta to slurker. Egenskapen kan kun brukes en gang.",
      src: "king_of_spades.png"
    }
  ]

  const [usedCards, setUsedCards] = useState([]);
  const [card, setCard] = useState(-1);
  const [done, setDone] = useState(false)
  const newCard = () => {
    if (usedCards.length === cards.length) {
      setDone(true);
      return;
    }
    for (let i = 0; i < 2; i++) {
      const random = Math.floor(Math.random()* cards.length)
      const temporaryUsed = [];
      temporaryUsed.concat(usedCards);
      if (temporaryUsed.includes(random)) {
        i--;
        continue
      }
      setCard(random);
      setUsedCards(usedCards.concat(random));
    }
  }
  const restart = () => {
    setUsedCards([])
    setDone(false)
    setCard(-1);
  }
  

  return (
    <Stack textAlign="center" spacing={2}>
      <Typography variant="h3" color="primary">Ring of fire</Typography>
      
      { done ? (
        <>
          <HHButton click={restart} text="Start en ny runde" />
          <Typography variant="h5" color="primary">Dere har nå vært igjennom samtlige 52 kort!</Typography>
        </>
      ):(
        <HHButton click={newCard} text="Nytt kort" />
      )}

      { card > -1 && !done ? (
          <Stack textAlign="center" direction="row" justifyContent="center" 
          sx={{ flexWrap: "wrap" }}>
            <Stack mb={2} border="1px solid #2b88d8" spacing={1} borderRadius={1} p={1} sx={{
              width: {
                sm: "40%",
                xs: "100%"
              },
              mr: {
                sm: 5,
                xs: 0
              }
            }}>
              <Typography variant="h4" color="primary">{cards[card].title}</Typography>
              <Divider />
              <Typography variant="body1" color="primary">{cards[card].desc}</Typography>
            </Stack>
            <Box sx={{ justifyContent: "center", textAlign: "center",
              width: {
                sm: "40%",
                xs: "100%"
              }
            }}>
            <img src={require(`./card-imgs/${cards[card].src}`)} alt={cards[card].title} width="100%"/>
            </Box>
          </Stack>
        ):("")}
      
    </Stack>
  );
}


export default Ringoffire;