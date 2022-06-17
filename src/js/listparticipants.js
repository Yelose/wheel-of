import { inputUser, namesListEl } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { participants, total } from "./participants";

export function printParticipantsList(){
  for (let i = 0; i < participants.length; i++) {
    const userId = participants[i].id;
   
    const element = participants[i].name;
    addNewUser(namesListEl, element, userId);
  }
}
let subTotal = total +1
export function addUser() {
  
  if (inputUser.value != "") {// si el input está vacío, añade un nuevo usuario que será el valor del input
    addNewUser(namesListEl, inputUser.value);//add new user crea elementos en html nonde se añaden los divs y párrafos que los contienen
    let userValue = inputUser.value;
    participants.push({ name: `${userValue}`, id: subTotal});//participants es un array vacío donde añadimos la variable userValue con el médodo push
    figureCarouselEl.innerHTML = "";
    namesListEl.innerHTML = "";
    fontSizeAdjustment(figureCarouselEl, participants);
    widthAdjustment(figureCarouselEl, participants);
    printFiguresInHTML(figureCarouselEl, participants);
    printParticipantsList();
    inputUser.value = "";
  }
  debugger
  subTotal ++
  debugger
}

export function addNewUser(element, userName, userId) {
  let userNameContainerEl = document.createElement("div");
  userNameContainerEl.setAttribute("id", `${userId}`);//añade el atributo id a la variable user id
  
  let nameContainerEl = document.createElement("div");//crea un elemento HTML especificado por su etiqueta
  userNameContainerEl.appendChild(nameContainerEl);//Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

  let userNameEl = document.createElement("p");//crea un elemento HTML especificado por su etiqueta
  userNameEl.append(document.createTextNode(userName));// crea un nodo de texto y añade el nobbre
  nameContainerEl.appendChild(userNameEl);//dentro del div creado arriba se añade su elemento hijo user name

  let editNameFigureEl = document.createElement("figure");//se crea el elemento edit-user 
  editNameFigureEl.className = "edit-user";
  userNameContainerEl.appendChild(editNameFigureEl);//se añade como hijo del contenedor de user
   
  let deleteUserFigureEl = document.createElement("figure");
  deleteUserFigureEl.className = "delete-user";
  userNameContainerEl.appendChild(deleteUserFigureEl);
  deleteUserFigureEl.onclick = removeUser;


  element.appendChild(userNameContainerEl);

}
export function setIdToDiv (){

}

export function inputKeyPress(event){
  if (event.key == "Enter"){
    addUser()
  }
}

