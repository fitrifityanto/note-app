class AppBar extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
        .app-bar {
            padding: 2rem 1.3rem;
        }

        .app-bar .brand-name {
            font-size: 1.9em;
        }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <div class="app-bar">
                <h1 class="brand-name">Notes App</h1>
            </div>
        `;
  }
}

customElements.define("app-bar", AppBar);
