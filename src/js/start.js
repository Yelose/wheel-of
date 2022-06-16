import { namesListEl, sacrificedEl } from "./elements"
import { figureCarouselEl, printFiguresInHTML } from "./figures";
import { printParticipantsList } from "./listparticipants";
import { participants, total } from "./participants"

export function start(){
    var sacrifice = participants[Math.floor(Math.random()*participants.length)]
    const element = sacrifice.name;
    const sacrifId = sacrifice.id;
    sacrificedEl.innerHTML = element
    participants.splice(sacrifId, 1);
    console.log(participants)
    figureCarouselEl.innerHTML = ""
    namesListEl.innerHTML = ""
    printFiguresInHTML(figureCarouselEl, participants)
    printParticipantsList()
}

