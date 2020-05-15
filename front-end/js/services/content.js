// Responsible for sending and requesting information related to user-created content like decks and cards
// Stores all content while user is logged in for maintaining state

class Content {

  // invoked to clear all user content in memory
  static clearUserContent() {
    this.allDecks = []
  }

  // must be cleared at logout
  static allDecks = []

  // sets allDecks to new array without specific deck by id
  static removeDeletedDeck(id) {
    this.allDecks = this.allDecks.filter((d) => d.id != id)
  }

  // calls API with request for decks pertaining to user currently logged in
  // returns a promise that resolves with json collection of user_decks
  static getUserDecks() {
    return API.get(`/users/${Auth.currentUser.id}/decks`)
      .then(json => {
        this.loadUserDecks(json)
      })
  }

  // receives json string and instantiates Deck objects, and saves them in Content store
  // creates and saves cards to deck object
  // after decks loaded, triggers re-render of DOM
  static loadUserDecks(json) {
    json.forEach(deckData => {
      const deck = new Deck(deckData)
      // create cards and add to deck
      deck.saveCardsFromJson(deckData.cards)
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
    if (json.deck) {
      const deck = new Deck(json.deck)
      deck.save()
      DOM.renderMainContainer()
    } else if (json.errors) {
      alert(json.errors)
    }
  }

  // requests delete deck on API side, calls handler function for response
  static requestDeleteDeck(deck_id) {
    API.delete(`/users/${Auth.currentUser.id}/decks/${deck_id}`)
      .then(json => this.handleDeleteDeckResponse(json))
  }

  // if receives success from api, triggers delete on client side and rerender
  static handleDeleteDeckResponse(json) {
    if (json.deleted) {
      this.removeDeletedDeck(json.deck.id)
      DOM.renderMainContainer()
    } else {
      alert(json.errors)
    }
  }

  static submitNewCardForm() {
    console.log("Asking to submit deck form!")
  }

}