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

  static findDeckFromCurrentView() {
    return this.findDeckById(State.currentView.id)
  }

  static findCurrentPracticeSessionUsingState() {
    const deck = this.findDeckFromCurrentView()
    return deck.practiceSession
  }

  static findDeckById(deck_id) {
    return this.allDecks.find((d) => d.id == deck_id)
  }

  static removeDeletedCard(card_data) {
    const deck = this.findDeckById(card_data.deck_id)
    deck.cards = deck.cards.filter((c) => c.id != card_data.id)
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
      // create practice Session after saving cards, because it relies on length of cards
      deck.createPracticeSession()
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
    const deck_id = State.currentView.id
    const question = document.getElementById("new-card-form-input-question").value
    const answer = document.getElementById("new-card-form-input-answer").value

    const cardInfo = { card: { question, answer } }

    if (!!question && !!answer) {
      API.post(`/users/${Auth.currentUser.id}/decks/${deck_id}/cards`, cardInfo)
      .then(json => {
        this.handleNewCardResponse(json)
      })

    } else {
      alert("Please enter both a question and an answer for your new card.")
    }
  }

  static handleNewCardResponse(json) {
    // create a new deck from JSON if successful
    if (!!json.card) {
      const card = new Card(json.card)
      // save card to deck in JS
      const deck = Content.allDecks.find((d) => d.id == card.deck_id)
      deck.saveCardToDeck(card)
      // rerender page (should still be deck editor unless user has performed other actions while API waiting for response)
      DOM.renderMainContainer()
    } else {
      // alert errors if failed
      console.log(deck)
    }
  }

  static requestDeleteCard(card_id) {
    //relies on information about the current deck being stored in state since card deletion available from deck edit view
    const deck_id = State.currentView.id
    API.delete(`/users/${Auth.currentUser.id}/decks/${deck_id}/cards/${card_id}`)
      .then(json => this.handleDeleteCardResponse(json))
  }

  static handleDeleteCardResponse(json) {
    if (json.deleted) {
      this.removeDeletedCard(json.card)
      DOM.renderMainContainer()
    } else {
      alert(json.errors)
    }
  }

}