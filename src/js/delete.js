import { namesListEl, sacrificedEl } from "./elements";
import { figureCarouselEl, printFiguresInHTML } from "./figures";
import { printParticipantsList } from "./listparticipants";
import { participants } from "./participants";

export function deleteUser(id){
    let sacrificedIndex = participants.indexOf(participants.find(p => p.id == id))
    sacrificedPerson = participants[sacrificedIndex].name
    sacrificedEl.innerHTML = sacrificedPerson
    participants.splice(sacrificedIndex, 1);
    figureCarouselEl.innerHTML = ""
    namesListEl.innerHTML = ""
    printFiguresInHTML(figureCarouselEl, participants)
    printParticipantsList()
}
