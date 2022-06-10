import { participants } from "./participants";

export function printFiguresInHTML (element, array) {
    for (let i = 0; i < array.length; i++) {
        const names = array[i];
        let degrees = i*(360/array.length);
        element.innerHTML += `<figure 
        class="names" 
        style="color: hsl(${degrees}, 100%, 50%); transform: rotateY(${degrees}deg) translateZ(40vw)"
        
        >
        ${names.name}</figure>`
    }
}
export const figureCarouselEl = document.getElementById("carousel");
