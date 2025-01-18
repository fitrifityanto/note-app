class SectionWithTitle extends HTMLElement {

    _title = 'NEED SECTION TITLE'
    _icon = 'NEED SECTION ICON'

    static get observedAttributes() {
        return ['title', 'icon']
    }

    constructor() {
        super()

        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._style = document.createElement('style')
    }

    _updateStyle() {
        this._style.textContent =`

        .title-section {
            font-size: 1.2rem;
            margin-block-end: 1rem;
        }

        .title-section-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        `
    }

    set title(value) {
        this._title = value
    }

    get title() {
        return this._title
    }

    set icon(value) {
        this._icon = value
    }

    get icon() {
        return this._icon
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = ''
    }

    render() {
        this._emptyContent()
        this._updateStyle()

        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
            <section>
                <div class="title-section">
                    <div class="title-section-wrapper">
                        ${this.icon} 
                        <h2>${this.title} </h2>
                    </div>
                </div>
                <slot></slot>
            </section>
        `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'title':
                this._title = newValue
                break
            case 'icon':
                this._icon = newValue
                break
        }
        this.render()
    }
}

customElements.define('section-with-title', SectionWithTitle)