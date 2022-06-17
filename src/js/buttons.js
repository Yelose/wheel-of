import { deleteUser } from "./delete";
import { namesListEl } from "./elements";
import { reset } from "./reset";
import { start } from "./start";

export let addUserButton = document.getElementById("add-newuser");
export let startButton = document.getElementById("start-btn");
export let resetButton = document.getElementById("reset-btn");
export let usersButton = document.getElementById("users-btn");

resetButton.addEventListener("click", reset);
startButton.addEventListener("click", start);
namesListEl.addEventListener("click", (event)=>{
    let id = parseInt(event.target.closest("[id]").id)
    if (event.target.closest(".delete-user") !=null){
        deleteUser(id)
    }
});