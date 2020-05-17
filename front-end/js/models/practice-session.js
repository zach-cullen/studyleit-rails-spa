class PracticeSession {

  // Should only be called by deck createPracticeSession. this ensures that a practice session always belongs to a deck and can only be accessed as a deck attribute
  // timing: see Content.loadUserDecks
  constructor(cardCount) {
    this.cardCount = cardCount
    this.currentCardIndex = 0
    this.correctCardsCount = 0
    this.shuffler = PracticeSession.makeShuffler(cardCount)
  }

  // mutates attributes of this Practice Session based on boolean argument recorded when a question score is recorded
  logScore(correctness) {
    if (correctness === true) { 
      this.correctCardsCount++ 
      this.currentCardIndex++
    } else if (correctness === false) {
      this.currentCardIndex++
    } else {
      console.log("TYPE ERROR: logScore can only receive booleans as arguments")
    }
  }

  // renders a string showing the number of cards that have been answered as a fraction of the total number of cards in deck
  renderProgress() {
    return `${this.currentCardIndex} / ${this.cardCount}`
  }

  // renders a string representing the percentage of questions that have been answered correctly so far
  renderScorePercentage() {
    const a = this.correctCardsCount
    // ternary changes current card index to 1 if 0 to prevent NaN result
    const b = this.currentCardIndex === 0 ? 1 : this.currentCardIndex
    return `${Math.floor((a / b) * 100)}%`
  }

  stillInProgress() {
    return this.currentCardIndex < this.cardCount
  }


  // returns an array of randomized integers representing indexes in array of cards of cardCount length
  static makeShuffler(cardCount) {
    // generate array of ints representing indexes of card array of cardCount length
    const arr = Array.from(Array(cardCount).keys())
    // implement Fisher-Yates algorithm 
    // ref: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    function shuffleArray(a) {
      let array = a
      // start at the end of array and count down
      for (let i = array.length - 1; i > 0; i--) {
        // generate a random number between 0 and i - 1
        // this number represents the index of a random position in an array of length i
        const j = Math.floor(Math.random() * i)
        // store the value at i of our original array because it's about to be changed and disappear
        const temp = array[i]
        // set the current value at i in our base array to the value at random index j
        array[i] = array[j]
        // set the value at random position j to the value we captured from base index
        // effectively, the two values have now 'swapped'
        // in the next loop, the random value we 'swapped out' will not be available for exchanging 
        // because our random integer selection decreases as we count down to no longer include the index it has moved to.
        // The number that was at position i is still in the mix because it was 'swapped in' to a lower index
        array[j] = temp
      }
      return array
    }

    return shuffleArray(arr)
  }

}