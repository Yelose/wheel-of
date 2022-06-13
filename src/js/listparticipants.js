import { inputUser, namesListEl } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { participants } from "./participants";

export function printParticipantsList(){
  for (let name = 0; name < participants.length; name++) {
    const element = participants[name];
    addNewUser(namesListEl, element)
  }
}

export function addUser() {
<<<<<<< HEAD
  let ul = document.getElementById("participants-list");

  let confirmUser = window.confirm("¿Agregar participante a la lista?");

  if (confirmUser === true) {
    let inputUser = document.getElementById("inputNewUser");
    if (inputUser.value!= "") {
      addNewUser(ul, inputUser.value);
      let userValue = inputUser.value;
      participants.push({name: `${userValue}`});
      figureCarouselEl.innerHTML = "";
      printFiguresInHTML (figureCarouselEl, participants);
      inputUser.value = "";
    }
  }
}
/* function printParticipantsDefault(array) {
  for (let i = 0; i < array.length; i++) {
    const participantListed = array[i];
    let li = document.createElement("li");
    li.append(document.innerHTML(participantListed[i].name));
    ul.appendChild(li);
    let span = document.createElement("span");
=======
  if (inputUser.value != "") {
    addNewUser(namesListEl, inputUser.value);
    let userValue = inputUser.value;
    participants.push({ name: `${userValue}` });
    figureCarouselEl.innerHTML = "";
    fontSizeAdjustment(figureCarouselEl, participants);
    widthAdjustment(figureCarouselEl, participants);
    printFiguresInHTML(figureCarouselEl, participants);
    inputUser.value = "";
>>>>>>> develop
  }
} */

<<<<<<< HEAD
//printParticipantsDefault(participants)
=======
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
>>>>>>> develop
// `{name: ${userValue}}`
export function addNewUser(element, userName) {
  let userNameContainerEl = document.createElement("div");
  let userNameEl = document.createElement("p");
  userNameEl.append(document.createTextNode(userName));
  userNameContainerEl.appendChild(userNameEl);
  let editNameFigureEl = document.createElement("figure");
  editNameFigureEl.className = "edit-user";
  userNameContainerEl.appendChild(editNameFigureEl);
   
  let deleteUserFigureEl = document.createElement("figure");
  deleteUserFigureEl.className = "delete-user";
  userNameContainerEl.appendChild(deleteUserFigureEl);
  
  element.appendChild(userNameContainerEl);
  // let span = document.createElement("span");
  // span.onclick = remove;
  // span.className = "close";
  // span.appendChild(document.createTextNode("\u00D7"));
  // li.append(span);
}
{/* <div>
   <p></p>
   <figure class="delete-user">
      <img></img>
   </figure>
   <figure class="edit-user">
      <img></img>
   </figure>
</div> */}

  // function removeUser() {
  //   this.parentElement.remove();
  // }
export function inputKeyPress(event){
  if (event.key == "Enter"){
    addUser()
  }
}