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
            </div>
            <div class="practice-card-buttons">
              <div class="show-answer-button">
              </div>
            </div>
          </div>
          <div class="main-sidebar">
            ${Forms.viewScoreCard}
          </div>
       </div>
    `
  }
}