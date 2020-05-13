// Responsible for requesting information related to user-created content like decks and cards
// Stores all content while user is logged in for maintaining state

class Content {

  // invoked to clear all user content in memory
  static clearUserContent() {
    allDecks = []
  }

  // must be cleared at logout
  static allDecks = []

  // calls API get request for decks pertaining to user currently logged in
  // returns a promise that resolves with json collection of user_decks
  static getUserDecks() {
    console.log("loading CONTENT: user decks...")
    return API.get(`/users/${Auth.currentUser.id}/decks`)
      .then(json => {
        this.loadUserDecks(json)
        DOM.renderMainContainer()
      })
  }

  // receives json string and instantiates Deck objects, and saves them in Content store
  // does not make decks appear in the dom, see Dashboard component for rendering
  static loadUserDecks(json) {
    json.forEach(deckData => {
      const deck = new Deck(deckData)
      deck.save()
    })
  }
}