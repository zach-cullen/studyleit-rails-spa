// provides html strings to DOM for rendering changes

class Dashboard {
  static get viewDash() {
    return `
    <h1 class="main-title">Dashboard</h1>
    <div class="main-inner" id="dash-outer">
      <div class="main-content" id="dash-decks">
        ${this.viewAllDashDecks}
      </div>
      <div class="main-sidebar" id="dash-sidebar">
        ${Forms.viewNewDeckForm}
      </div>
   </div>`
  }

  static viewDashDeck(deck) {
    return `
    <div class="dash-deck" id="dash-deck-${deck.id}">
      <div class="dash-deck-title">${deck.title}</div>
      <div class="dash-deck-tabs">
        <div class="dash-deck-tabs-container">
          <button class="dash-deck-delete" value="${deck.id}"></button>
          <button class="dash-deck-edit" value="${deck.id}"></button>
          <button class="dash-deck-play" value="${deck.id}"></button>
        </div>
      </div>
    </div>
    `
  }

  //returns html string of dash deck views generated from collection of decks saved in content store sorted by newest first
  static get viewAllDashDecks() {
    return Content.allDecks.sort((a, b) => b.id - a.id ).map((deck) => this.viewDashDeck(deck)).join("")
  }
  
}

