export default function Layout(content) {
  return `
    <header>
      <app-bar></app-bar>
    </header>

    <div class="content">
      <aside>
        <a id="showNotes">Daftar catatan</a>
        <a id="showArchive">Arsip catatan</a>
        <a id="showFormAdd">Tambah catatan</a>
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
