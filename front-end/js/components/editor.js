// provides html strings for rendering editor views
class Editor {

  static viewDeckEditor() {
    // relies on State object to provide id of current deck
    const deck = Content.allDecks.find((d) => d.id == State.currentView.id)
    return `
        <h1 class="main-title">${deck.title}</h1>
        <div class="main-inner" id="editor-outer">
          <div class="main-content-area" id="editor-cards">
            ${this.viewAllEditorCards(deck)}
          </div>
          <div class="main-sidebar" id="editor-sidebar">
            ${Forms.viewNewCardForm}
          </div>
       </div>
    `
  }

  // generates a single card view in deck editor from an instance of Card passed as argument
  static viewEditorCard(card) {
    return `
      <div class="edit-card">
        <div class="edit-card-tabs">
        </div>
        <div class="edit-card-question">
          <h4>Question</h4>
          <p>${card.question}</p>
        </div>
        <div class="edit-card-answer">
          <h4>Answer</h4>
          <p>${card.answer}</p>
        </div>
      </div>
    `
  }

  // generates a collection of card views from an instance of Deck passed as argument
  static viewAllEditorCards(deck) {
    return deck.cards.map((card) => this.viewEditorCard(card)).join("")
  }

}