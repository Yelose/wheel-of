import { namesListEl, sacrificedEl } from "./elements"
import { figureCarouselEl, printFiguresInHTML } from "./figures";
import { printParticipantsList } from "./listparticipants";
import { participants } from "./participants"

export function start(){
    var randomNumber = Math.floor(Math.random()*participants.length)
    // var sacrifice = participants[Math.floor(Math.random()*participants.length)]
    // const element = sacrifice.name;
    // const sacrifId = sacrifice.id;
    let sacrificedPerson = participants[randomNumber].name
    sacrificedEl.innerHTML = sacrificedPerson
    participants.splice(randomNumber, 1);
    figureCarouselEl.innerHTML = ""
    namesListEl.innerHTML = ""
    printFiguresInHTML(figureCarouselEl, participants)
    printParticipantsList()
}

