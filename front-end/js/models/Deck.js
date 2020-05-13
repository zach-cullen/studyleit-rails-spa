class Deck {
  constructor(attributes) {
    this.id = attributes.id
    this.title = attributes.title
    this.user_id = attributes.user_id
  }

  // adds instance of Deck to collection for memory persistence in Content class
  save() {
    // must be called with method invocation or this will be undefined
    Content.allDecks.push(this)
  }
}