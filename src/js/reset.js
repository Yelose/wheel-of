import { ulListNames } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { clearUsers } from "./listparticipants";
import { participants } from "./participants";

export function reset(){
    participants.splice(14);
    figureCarouselEl.innerHTML = "";
    clearUsers(ulListNames);
    printFiguresInHTML (figureCarouselEl, participants);
    fontSizeAdjustment (figureCarouselEl, participants);
    widthAdjustment (figureCarouselEl, participants);
}