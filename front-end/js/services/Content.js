// Responsible for sending and requesting information related to user-created content like decks and cards
// Stores all content while user is logged in for maintaining state

class Content {

  // invoked to clear all user content in memory
  static clearUserContent() {
    this.allDecks = []
  }

  // must be cleared at logout
  static allDecks = []

  // calls API with request for decks pertaining to user currently logged in
  // returns a promise that resolves with json collection of user_decks
  static getUserDecks() {
    return API.get(`/users/${Auth.currentUser.id}/decks`)
      .then(json => {
        this.loadUserDecks(json)
      })
  }

  // receives json string and instantiates Deck objects, and saves them in Content store
  // after decks loaded, triggers re-render of DOM
  static loadUserDecks(json) {
    json.forEach(deckData => {
      const deck = new Deck(deckData)
      deck.save()
    })
    DOM.renderMainContainer()
  }

  static submitNewDeckForm() {
    const title = document.getElementById("new-deck-form-input-title").value
    if (!!title) {
      const deckInfo = { deck: { title } }

      API.post(`/users/${Auth.currentUser.id}/decks`, deckInfo)
        .then(json => {
          this.handleNewDeckResponse(json)
        })
        //.then(DOM.renderMainContainer())
    } else {
      alert("Please enter a title for your deck.")
    }
  }

  static handleNewDeckResponse(json) {
    console.log("handling json..")
    if (json.deck) {
      const deck = new Deck(json.deck)
      deck.save()
      DOM.renderMainContainer()
    } else if (json.errors) {
      alert(json.errors)
    }
  }

  static requestDeleteDeck(deck_id) {
    console.log(`requesting delete of deck ${deck_id}...`)
    API.delete(`/users/${Auth.currentUser.id}/decks/${deck_id}`)
      .then(json => console.log(json))
  }

}