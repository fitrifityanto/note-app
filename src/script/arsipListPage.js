export default function ArsipListPage() {
  return `
    <div class="container">
          <section-with-title
            title="Arsip Catatan"
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18v4H3zm1 5h16v13H4zm5.5 3a.5.5 0 0 0-.5.5V13h6v-1.5a.5.5 0 0 0-.5-.5z"/></svg>'
          >
            <div id="arsipListContainer">
              <note-loading notetitle="arsip-loading"></note-loading>
              <div id="arsipList" class="note-list">
                <div class="list"></div>
              </div>
            </div>
          </section-with-title>
        </div>
    `;
}
