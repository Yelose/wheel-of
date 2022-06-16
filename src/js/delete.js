import { participants } from "./participants";

export function deleteUser(id){  
const divToDeleteEl = document.querySelector(`#${id}`);
participants.splice(divToDeleteEl)
}

