import "./styles/styles.css";

import "./script/components/index.js";
import { validation } from "./script/validation.js";
import { getNote, insertNote, getArsip } from "./script/view/home.js";

import Layout from "./script/layout.js";
import NoteListPage from "./script/noteListPage.js";
import ArsipListPage from "./script/arsipListPage.js";
import FormTambahPage from "./script/formTambahPage.js";

export function renderPage(content) {
  document.body.innerHTML = Layout(content);
  setupEventListerners();

  if (content === NoteListPage()) {
    getNote();
  }
  if (content === ArsipListPage()) {
    getArsip();
  }
}

function setupEventListerners() {
  document.getElementById("showNotes").addEventListener("click", () => {
    renderPage(NoteListPage());
  });
  document.getElementById("showArchive").addEventListener("click", () => {
    renderPage(ArsipListPage());
  });
  document.getElementById("showFormAdd").addEventListener("click", () => {
    renderPage(FormTambahPage());
    validation();

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
  });
}

document.addEventListener(`DOMContentLoaded`, () => {
  renderPage(NoteListPage());
});
