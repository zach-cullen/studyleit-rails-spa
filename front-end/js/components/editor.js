// provides html strings for rendering editor views
class Editor {

  static viewDeckEditor() {
    const deck = Content.allDecks.find((d) => d.id == State.currentView.id)
    return `
        <div class="main-inner" id="editor-outer">
          <div class="main-content-area" id="editor-cards">
            <h1>${deck.title}</h1>
          </div>
          <div class="main-sidebar" id="editor-sidebar">
            ${Forms.viewNewDeckForm}
          </div>
       </div>
    `
  }

}