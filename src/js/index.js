// var participantes = ['hola', 'adios'],
//         random = (max, min, inclusive) => inclusive === true ? 
//         Math.floor(Math.random() * (max - min + 1) + min) :
//         Math.floor(Math.random() * (max - min) + min),
//         nameSelected = participantes[random(participantes.length, 0, "false")];
//         console.log(nameSelected);

// import { addUserButton } from "./buttons";
import { figureCarouselEl, printFiguresInHTML } from "./figures";
// import { addUser } from "./listparticipants";

import { participants } from "./participants";

//Sugerencia: use el método insertRow() para crear una nueva fila o un nuevo participante(<tr>).
//funcion que imprima los participantes agregados en el input en las cartas, 

function app() {
    console.log(participants);
}
app()
printFiguresInHTML (figureCarouselEl, participants)
console.log("ñalskdjf")
