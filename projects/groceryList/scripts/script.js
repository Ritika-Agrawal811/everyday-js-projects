import { onValue } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
import {
  addItemToList,
  setListEmptyCondition,
  emptyAllListItems,
  pushDataToDB,
} from "./functions.js";
import { groceriesList } from "./database.js";

const appSettings = {
  databaseURL:
    "https://grocery-list-19bf9-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input-field");
const shoppingList = document.getElementById("shoppingList");

addButton.addEventListener("click", () => {
  pushDataToDB(inputField);
});

inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    pushDataToDB(inputField);
  }
});

function getDataFromDB() {
  onValue(groceriesList, (snapshot) => {
    if (snapshot.exists()) {
      const groceryItems = Object.entries(snapshot.val());
      emptyAllListItems();
      for (let item of groceryItems) {
        addItemToList(item);
      }
    } else {
      emptyAllListItems();
      setListEmptyCondition();
    }
  });
}

setListEmptyCondition();
getDataFromDB();
