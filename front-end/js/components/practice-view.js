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
            <h1>Practice</h1>
            <h3>${deck.title}</h3>
          </div>          
          <div class="main-title-next"></div>
        </div>
        <div class="main-inner" id="editor-outer">
          <div class="main-content-area" id="editor-cards">
            <div class="practice-card">
            </div>
            <div class="practice-card-buttons">
              <div class="show-answer-button">
              </div>
            </div>
          </div>
          <div class="main-sidebar" id="editor-sidebar">
            <div class="practice-score">
              <h4>Session Progress:<h4>
              <p>Completed: 8/12</p>
              <p>Correct: 5</p>
              <p>Incorrect: 3</p>
            </div>
          </div>
       </div>
    `
  }
}