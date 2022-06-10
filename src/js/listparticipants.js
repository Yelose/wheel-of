import { inputUser, ulListNames } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { participants } from "./participants";

export function addUser() {
  if (inputUser.value != "") {
    addNewUser(ulListNames, inputUser.value);
    let userValue = inputUser.value;
    participants.push({ name: `${userValue}` });
    figureCarouselEl.innerHTML = "";
    fontSizeAdjustment(figureCarouselEl, participants);
    widthAdjustment(figureCarouselEl, participants);
    printFiguresInHTML(figureCarouselEl, participants);
    inputUser.value = "";
  }
}
export function clearUsers(ul) {
  ul.innerHTML = ""
}
// function printParticipantsDefault(array) {
//   for (let i = 0; i < array.length; i++) {
//     const participantListed = array[i];
//     let li = document.createElement("li");
//     li.append(document.innerHTML(participantListed[i].name));
//     ul.appendChild(li);
//     let span = document.createElement("span");
//   }
// }
// printParticipantsDefault(participants)
// `{name: ${userValue}}`
export function addNewUser(ul, list) {
  let li = document.createElement("li");
  li.append(document.createTextNode(list));
  ul.appendChild(li);
  // let span = document.createElement("span");
  // span.onclick = remove;
  // span.className = "close";
  // span.appendChild(document.createTextNode("\u00D7"));
  // li.append(span);
}

  // function removeUser() {
  //   this.parentElement.remove();
  // }
export function inputKeyPress(event){
  if (event.key == "Enter"){
    addUser()
  }
}