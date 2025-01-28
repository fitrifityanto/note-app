class NoteFormTambah extends HTMLElement {
  constructor() {
    super();
  }

  _emptyContent() {
    this.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();

    this.innerHTML = `
        <form autocomplete="off">
            <div class="form-group">
              <label for="title">Judul</label>
              <input
                type="text"
                id="title"
                minlength="10"
                aria-describedby="titleValidation"
                required
              />
              <p
                id="titleValidation"
                class="validation-message"
                aria-live="polite"
              ></p>
            </div>
            <div class="form-group">
              <label for="body">Isi</label>
              <textarea
                id="body"
                name="body"
                rows="6"
                minlength="20"
                maxlength="200"
                aria-describedby="bodyValidation"
                required
              ></textarea>
              <p
                id="bodyValidation"
                class="validation-message"
                aria-live="polite"
              ></p>
            </div>
            <div class="form-group">
              <button id="buttonSave" class="btn">Simpan</button>
            </div>
          </form>
        `;
  }
}

customElements.define("note-form-tambah", NoteFormTambah);
