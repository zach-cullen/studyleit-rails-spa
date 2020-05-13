// provides html strings to DOM for rendering changes

class Dashboard {
  static get viewDash() {
    return `
    <div class="dashboard" id="dash-outer">
      <div class="dashboard" id="dash-decks">
        ${this.viewAllDashDecks}
      </div>
      <div class="dashboard" id="dash-sidebar">
        ${Forms.viewNewDeckForm}
      </div>
   </div>`
  }

  static viewDashDeck(deck) {
    return `
    <div class="dash-deck" id="dash-deck-${deck.id}">
      <div class="dash-deck-title">${deck.title}</div>
      <div class="dash-deck-tabs"></div>
    </div>
    `
  }

  //returns html string of dash deck views generated from collection of decks saved in content store
  static get viewAllDashDecks() {
    console.log("Dashboard creating views for all decks...")
    return Content.allDecks.map((deck) => this.viewDashDeck(deck)).join("")
  }
  
}

