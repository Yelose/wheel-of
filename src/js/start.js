import { deleteUser } from "./delete";
import { namesListEl, sacrificedEl } from "./elements"
import { figureCarouselEl, printFiguresInHTML } from "./figures";
import { printParticipantsList } from "./listparticipants";
import { participants } from "./participants"

export function start(){
    var randomNumber = Math.floor(Math.random()*participants.length)
    // var sacrifice = participants[Math.floor(Math.random()*participants.length)]
    // const element = sacrifice.name;
    // const sacrifId = sacrifice.id;
    deleteUser(participants[randomNumber].id)
}

