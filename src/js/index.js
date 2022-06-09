// var participantes = ['hola', 'adios'],
//         random = (max, min, inclusive) => inclusive === true ? 
//         Math.floor(Math.random() * (max - min + 1) + min) :
//         Math.floor(Math.random() * (max - min) + min),
//         nameSelected = participantes[random(participantes.length, 0, "false")];
//         console.log(nameSelected);

import { participants } from "./participants";


function app() {
    console.log(participants);
}
app()
