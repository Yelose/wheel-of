import { deleteUser } from "./delete";
import { reset } from "./reset";
import { start } from "./start";

export let addUserButton = document.getElementById("add-newuser");
export let startButton = document.getElementById("start-btn");
export let resetButton = document.getElementById("reset-btn");
export let usersButton = document.getElementById("users-btn");

resetButton.addEventListener("click", reset);
startButton.addEventListener("click", start);
