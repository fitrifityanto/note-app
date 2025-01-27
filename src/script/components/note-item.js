import { formatDate } from "../utils.js";

class NoteItem extends HTMLElement {
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
  };

  constructor() {
    super();

    this._style = document.createElement("style");
  }

  _emptyContent() {
    this.innerHTML = "";
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    return this._note;
  }

  _updateSytle() {
    this._style.textContent = `

        .note-item {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            gap: 1rem;
            height: 100%;

            padding: 4px 8px;
             background-color: white;
             box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
            border-radius: 8px;
        }
        .note-item > .noteitem-main {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
        }
        .note-item > .noteitem-footer {
            font-size: smaller;
            color: gray;
        }     
        `;
  }

  render() {
    this._emptyContent();
    this._updateSytle();

    const formattedDate = formatDate(this._note.createdAt);

    this.appendChild(this._style);
    this.innerHTML += `
            <div data-noteid="${this._note.id}" class="note-item">
                <div class="noteitem-main">
                    <h3>${this._note.title}</h3>
                    <p>${this._note.body}</p>
                </div>
                <div class="noteitem-footer"><p>${formattedDate} </p>
                </div>
                <div class="noteitem-button">

                 
                </div>
            </div>
        `;
  }
}

customElements.define("note-item", NoteItem);
