import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://grocery-list-19bf9-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
export const database = getDatabase(app);
export const groceriesList = ref(database, "groceries");
