import { inputUser, namesListEl } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { participants } from "./participants";

export function printParticipantsList(){
  for (let i = 0; i < participants.length; i++) {
    const userId = participants[i].id;
   
    const element = participants[i].name;
    addNewUser(namesListEl, element, userId);
  }
}
export function addUser() {
  
  if (inputUser.value != "") {
    addNewUser(namesListEl, inputUser.value);
    let userValue = inputUser.value;
    participants.push({ name: `${userValue}`, id: total});
    figureCarouselEl.innerHTML = "";
    namesListEl.innerHTML = "";
    fontSizeAdjustment(figureCarouselEl, participants);
    widthAdjustment(figureCarouselEl, participants);
    printFiguresInHTML(figureCarouselEl, participants);
    printParticipantsList();
    inputUser.value = "";
  }
  total ++
}

export function addNewUser(element, userName, userId) {
  let userNameContainerEl = document.createElement("div");
  userNameContainerEl.setAttribute("id", `${userId}`);
  
  let nameContainerEl = document.createElement("div");
  userNameContainerEl.appendChild(nameContainerEl);

  let userNameEl = document.createElement("p");
  userNameEl.append(document.createTextNode(userName));
  nameContainerEl.appendChild(userNameEl);

  let editNameFigureEl = document.createElement("figure");
  editNameFigureEl.className = "edit-user";
  userNameContainerEl.appendChild(editNameFigureEl);
   
  let deleteUserFigureEl = document.createElement("figure");
  deleteUserFigureEl.className = "delete-user";
  userNameContainerEl.appendChild(deleteUserFigureEl);
  
  element.appendChild(userNameContainerEl);

}
export function setIdToDiv (){

}

export function inputKeyPress(event){
  if (event.key == "Enter"){
    addUser()
  }
}