export default function Layout(content) {
  return `
    <header>
      <app-bar></app-bar>
    </header>

    <div class="content">
      <aside>
        <link-bar></link-bar>
        <hr/>
            <a id="showFormAdd">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 20v-7.5H4v-1h7.5V4h1v7.5H20v1h-7.5V20z"/></svg>
      Tambah catatan
    </a>
      </aside>
      <main>
        ${content}
      </main>
    </div>
    
    <footer>
      <div class="container">
        <footer-bar></footer-bar>
      </div>
    </footer>
    `;
}
