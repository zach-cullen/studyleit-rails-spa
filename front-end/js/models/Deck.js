class Deck {
  constructor(attributes) {
    this.id = attributes.id
    this.title = attributes.title
    this.user_id = attributes.user_id
  }

  save(deck) {
    //type check, then add to content collection
    if (deck instanceof Deck) {
      Content.allDecks.push(deck)
    }
  }
}