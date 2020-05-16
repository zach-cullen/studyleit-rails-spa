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
            ${Editor.viewAllEditorCards(deck)}
          </div>
          <div class="main-sidebar" id="editor-sidebar">
          </div>
       </div>
    `
  }
}