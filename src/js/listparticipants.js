document.getElementById("add-newuser").addEventListener("click", addUser);

function addUser() {
  let ul = document.getElementById("participants-list");

  let confirmUser = window.confirm("¿Agregar participante a la lista?");

  if (confirmUser === true) {
    let inputUser = document.getElementById("inputNewUser");

    addNewUser(ul, inputUser.value);
    inputUser.value = "";
  }
}

function addNewUser(ul, list) {
    let li = document.createElement("li");
  
    li.append(document.createTextNode(list));
  
    ul.appendChild(li);
  
    let span = document.createElement("span");
    span.onclick = remove;
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    li.append(span);
  }
  
  function removeUser() {
    this.parentElement.remove();
  }