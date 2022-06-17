export function printFiguresInHTML (element, array) {
    for (let i = 0; i < array.length; i++) {
        const names = array[i];
        let degrees = i*(360/array.length);
        let invert = i*(360/array.length) + 180;
        element.innerHTML += `<figure 
        class="names" 
        style="color: hsl(${degrees}, 100%, 50%); 
        transform: rotateY(${degrees}deg) translateZ(40vw);
        background-color: hsl(${invert}, 75%, 75%);
        max-height: ${heigthAdjustment(array)};
        min-width: ${widthAdjustment(array)};
        max-width: ${widthAdjustment(array)}"><p>
        ${names.name}</p></figure>`
    }
}
export function fontSizeAdjustment (element, array) {
    let fontSize = parseFloat(50 / array.length);//////////////////////////////////////////
    element.style.fontSize = `${fontSize}vw`
}
export function widthAdjustment (array) {
    let width = parseFloat(140 / (array.length));
    return `${width}vw`
}
export function heigthAdjustment (array) {
    let fontSize = parseFloat(50 / array.length);
    let height = parseFloat((fontSize)*2.5);/////////////////////////////////////////
    return `${height}vw`
}

export const figureCarouselEl = document.getElementById("carousel");
