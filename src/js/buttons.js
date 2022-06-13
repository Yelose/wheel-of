import { reset } from "./reset";

export let addUserButton = document.getElementById("add-newuser");
export let startButton = document.getElementById("start-btn");
export let resetButton = document.getElementById("reset-btn");
export let usersButton = document.getElementById("users-btn");

resetButton.addEventListener("click", reset);