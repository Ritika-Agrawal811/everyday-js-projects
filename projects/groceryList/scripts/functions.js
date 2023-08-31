import {
  ref,
  remove,
  push,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
import { database, groceriesList } from "./database.js";

export function addItemToList(item) {
  const itemValue = item[1];
  const itemID = item[0];
  const li = document.createElement("li");
  li.innerHTML = `${itemValue} <i class="fa-solid fa-trash-can"></i>`;
  li.addEventListener("click", () => {
    deleteItem(itemID);
  });
  shoppingList.append(li);
}

export function setListEmptyCondition() {
  if (shoppingList.innerHTML === "") {
    shoppingList.innerHTML = `<p>No items added yet.</p>`;
  }
}

export function emptyAllListItems() {
  shoppingList.innerHTML = "";
}

export function pushDataToDB(inputField) {
  const inputValue = inputField.value;
  if (inputValue) {
    push(groceriesList, inputValue);
    inputField.value = "";
  }
}

function deleteItem(itemID) {
  const itemLocation = ref(database, `groceries/${itemID}`);
  remove(itemLocation);
}
