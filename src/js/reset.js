import { ulListNames } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { clearUsers } from "./listparticipants";
import { participants, participantsDefault } from "./participants";

export function reset(){
    participants.splice(0)
    participantsDefault()
    figureCarouselEl.innerHTML = "";
    printFiguresInHTML (figureCarouselEl, participants);
    fontSizeAdjustment (figureCarouselEl, participants);
    widthAdjustment (figureCarouselEl, participants);
}