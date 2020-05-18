// provides html strings for rendering review deck view
// has functions that decide which html strings to return within component
class PracticeView {
  static viewDeckPractice() {
    const deck = Content.findDeckFromCurrentView()
    return `
        <div class="main-title">
          <div class="main-title-back">
            < Back to Dash
          </div>
          <div class="main-title-header">
            <h1>${deck.title}</h1>
          </div>          
          <div class="main-title-next"></div>
        </div>
        <div class="main-inner">
          <div class="main-content-area">
            ${this.renderCurrentCardView(deck)}
          </div>
          <div class="main-sidebar">
            ${Forms.viewScoreCard(deck.practiceSession)}
          </div>
       </div>
    `
  }

  static renderCurrentCardView(deck) {

    // renders instance of card only if the practice session is still in progress
    // protects app from erroring by looking for a card with an out of bounds index
    if (deck.practiceSession.stillInProgress()) {
      const card = deck.currentCard()
      return State.currentView.showAnswer == true ? this.viewCardAnswer(card) : this.viewCardQuestion(card)
    } else {
      return this.viewCompletedMessageCard(deck)
    }
  }

  static viewCardQuestion(card) {
    return `
      <div class="practice-card">
        <div class="practice-card-header">
          <h3>Question:<h3>
        </div>
        <div class="practice-card-body">
          <h6>${card.question}</h6>
        </div>
      </div>
      <div class="practice-card-buttons">
        ${this.viewShowAnswerButton()}
      </div>`
  }

  static viewCardAnswer(card) {
    return `
      <div class="practice-card">
        <div class="practice-card-header">
          <h3>Answer:<h3>
        </div>
        <div class="practice-card-body">
          <h6>${card.answer}</h6>
        </div>
      </div>
      <div class="practice-card-buttons">
        ${this.viewScoreButtons()}
      </div>`
  }

  static viewShowAnswerButton() {
    return `
    <button class="practice-card-button" id="practice-card-button-show">
      Show Answer
    </button>`
  }

  static viewScoreButtons() {
    return `
    <div class="practice-card-score-buttons-wrap">
      <button class="practice-card-button" id="practice-card-button-correct">
        Correct
      </button>
      <button class="practice-card-button" id="practice-card-button-incorrect">
        Incorrect
      </button>
    </div>`
  }

  static viewCompletedMessageCard(deck) {
    return `
    <div class="practice-card">
      <div class="practice-card-header">
        <br>
        <h1>Practice Complete!</h1>
      </div>
      <div class="practice-card-header">
        <br>
        <h3>Your Score:</h3>
        <h1>${deck.practiceSession.renderScorePercentage()}</h1>
        <button class="practice-card-button" id="practice-card-button-replay">Practice Again?</button>
      </div>
    </div>
    <div class="practice-card-buttons">
    </div>`
  }
}

