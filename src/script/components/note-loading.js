class NoteLoading extends HTMLElement {
  static get observedAttributes() {
    return ["notetitle"];
  }

  constructor() {
    super();
  }

  set notetitle(value) {
    this._notetitle = value;
  }

  get notetitle() {
    return this._notetitle;
  }

  _emptyContent() {
    this.innerHTML = "";
  }

  render() {
    this._emptyContent();

    this.innerHTML += `
      <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      </div>
        `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-loading", NoteLoading);
