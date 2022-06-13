import { addUserButton } from "./buttons";
import { inputUser } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { addUser, inputKeyPress, printParticipantsList } from "./listparticipants";
import { participants } from "./participants";

printFiguresInHTML (figureCarouselEl, participants)
fontSizeAdjustment (figureCarouselEl, participants)
widthAdjustment (figureCarouselEl, participants)
addUserButton.addEventListener("click", addUser)
<<<<<<< HEAD
//console.log("ñalskdjf")
=======
inputUser.addEventListener("keypress", inputKeyPress)
printParticipantsList()
>>>>>>> develop
