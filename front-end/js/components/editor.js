// provides html strings for rendering editor views
class Editor {

  static viewDeckEditor() {
    // relies on State object to provide id of current deck
    const deck = Content.allDecks.find((d) => d.id == State.currentView.id)
    return `
        <div class="main-inner" id="editor-outer">
          <div class="main-content-area" id="editor-cards">
            <h1 class="main-title">${deck.title}</h1>
            ${this.viewAllEditorCards(deck)}
          </div>
          <div class="main-sidebar" id="editor-sidebar">
            ${Forms.viewNewDeckForm}
          </div>
       </div>
    `
  }

  // generates a single card view in deck editor from an instance of Card passed as argument
  static viewEditorCard(card) {
    return `
      <div class="edit-card">
        <h3>${card.question}</h3>
        <p>${card.answer}</p>
      </div>
    `
  }

  // generates a collection of card views from an instance of Deck passed as argument
  static viewAllEditorCards(deck) {
    return deck.cards.map((card) => this.viewEditorCard(card)).join("")
  }

}