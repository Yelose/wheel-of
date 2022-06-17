
import { namesListEl, sacrificedEl } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { printParticipantsList } from "./listparticipants";
import { participants, participantsDefault } from "./participants";

export function reset(){
    total = 0
    participants.splice(0)
    participantsDefault()
    figureCarouselEl.innerHTML = "";
    namesListEl.innerHTML = "";
    sacrificedEl.innerHTML = "Nombre";
    printFiguresInHTML (figureCarouselEl, participants);
    fontSizeAdjustment (figureCarouselEl, participants);
    widthAdjustment (figureCarouselEl, participants);
    printParticipantsList()
}