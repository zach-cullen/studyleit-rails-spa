class Deck {
  constructor(attributes) {
    this.id = attributes.id
    this.title = attributes.title
    this.user_id = attributes.user_id
    // always construct with cards empty and add back in from Card save
    this.cards = []
  }

  // ONLY place new practice session can be created this ensures that each deck only has one practice session
  // also ensures that specific practice session can only be accessed in association with a deck
  createPracticeSession() {
    this.practiceSession = new PracticeSession(this.cards.length)
  }

  // use practice session attributes to return an instance of card belonging to a deck
  // WARNING: will error if this method is called without checking of practiceSession is complete (currentCardIndex will be out of bounds)
  // see PracticeView renderCurrentCardView for example of proper usage 
  currentCard() {
    // shuffled is an array of integers 0..cards.length that has been shuffled randomly
    const shuffled = this.practiceSession.shuffler
    // currentCardIndex progresses from 0 and counts up normally as the practice Session progresses
    const i = this.practiceSession.currentCardIndex
    return this.cards[shuffled[i]]
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