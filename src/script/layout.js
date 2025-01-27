export default function Layout(content) {
  return `
    <header>
      <app-bar></app-bar>
    </header>

    <div class="content">
      <aside>
        <link-bar></link-bar>
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
