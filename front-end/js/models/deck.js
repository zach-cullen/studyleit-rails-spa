class Deck {
  constructor(attributes) {
    this.id = attributes.id
    this.title = attributes.title
    this.user_id = attributes.user_id
    // always construct with cards empty and add back in from Card save
    this.cards = []
  }

  saveCardToDeck(card) {
    if (card instanceof Card) {
      this.cards.push(card)
    } else {
      console.log("this function will only save Card objects to the deck")
    }
  }

  saveCardsFromJson(cards) {
    cards.forEach((attributes) => {
      this.saveCardToDeck(new Card(attributes))
    })
  }

  // adds instance of Deck to collection for memory persistence in Content class
  save() {
    // must be called with method invocation or this will be undefined
    Content.allDecks.push(this)
  }
}