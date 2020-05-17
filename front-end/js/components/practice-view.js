// provides html strings for rendering review deck view
class PracticeView {
  static viewDeckPractice() {
    const deck = Content.findDeckFromCurrentView()
    console.log(deck.currentCard())
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
            ${this.renderCurrentCardView()}
          </div>
          <div class="main-sidebar">
            ${Forms.viewScoreCard}
          </div>
       </div>
    `
  }

  static renderCurrentCardView() {
    return State.currentView.showAnswer == true ? this.viewCardAnswer() : this.viewCardQuestion()
  }

  static viewCardQuestion() {
    return `
      <div class="practice-card">
        <div class="practice-card-header">
          <h3>Question:<h3>
        </div>
        <div class="practice-card-body">
          <h6>What is the difference between prototypal inheritance and class inheritance?</h6>
        </div>
      </div>
      <div class="practice-card-buttons">
        ${this.viewShowAnswerButton()}
      </div>`
  }

  static viewCardAnswer() {
    console.log("SHOW ANSWER!")
    return `
      <div class="practice-card">
        <div class="practice-card-header">
          <h3>Answer:<h3>
        </div>
        <div class="practice-card-body">
          <h6>One is JavaScript-y and one is Java-y</h6>
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
}

