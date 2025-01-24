import "./styles/styles.css";
import "./script/components/index.js";
import "./script/validation.js";
import { getNote, insertNote, getArsip } from "./script/view/home.js";

document.addEventListener(`DOMContentLoaded`, () => {
  const inputTitle = document.querySelector("#title");
  const inputBody = document.querySelector("#body");
  const buttonSave = document.querySelector("#buttonSave");

  buttonSave.addEventListener("click", function () {
    const note = {
      title: inputTitle.value,
      body: inputBody.value,
    };

    insertNote(note);
  });

  getNote();
  getArsip();
});
