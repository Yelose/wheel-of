import { addUserButton } from "./buttons";
import { figureCarouselEl, printFiguresInHTML } from "./figures";
import { addUser } from "./listparticipants";
import { participants } from "./participants";

printFiguresInHTML (figureCarouselEl, participants)
addUserButton.addEventListener("click", addUser)
//console.log("ñalskdjf")
