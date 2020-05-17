// provides html strings for rendering review deck view
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
            <div class="practice-card">
              <div class="practice-card-header">
                <h3>Question:<h3>
              </div>
              <div class="practice-card-body">
                <h6>What is the difference between prototypal inheritance and class inheritance?</h6>
              </div>
            </div>
            <div class="practice-card-buttons">
              <button class="practice-card-button" id="practice-card-button-show">
                Show Answer
              </button>
            </div>
          </div>
          <div class="main-sidebar">
            ${Forms.viewScoreCard}
          </div>
       </div>
    `
  }
}