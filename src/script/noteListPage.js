export default function NoteListPage() {
  return `
        <div class="container">
          <section-with-title
            title="Daftar Catatan"
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h10q.425 0 .713.288T15 17t-.288.713T14 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg>'
          >
            <div id="noteListContainer">
              <note-loading notetitle="note-loading"></note-loading>
              <div id="noteList" class="note-list">
                <div class="list"></div>
              </div>
            </div>
          </section-with-title>
          </div>
    `;
}
