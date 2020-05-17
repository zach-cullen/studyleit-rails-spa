// stores information about app state to ensure correct rendering
// provides html strings to DOM for render
class State {

  // initialize with no information, will be reset by getCurrentUser and subsequent actions
  static currentView = {
    view: false,
    id: false,
    showAnswer: false
  } 

  static resetView() {
    this.currentView = {
      view: false,
      id: false,
      showAnswer: false
    }
  }

  static renderCurrentView() {
    switch(this.currentView.view) {
      case"deck-editor":
        return Editor.viewDeckEditor()
        break
      case("dashboard"):
        return Dashboard.viewDash
        break
      case("practice-view"):
        return PracticeView.viewDeckPractice()
        break
      default:
        // by default will always show either login or dashboard as first page on refresh
        return Auth.isSignedIn ? Dashboard.viewDash : Forms.viewLoginForm
        break
    }
  }

  static setViewToDashboard() {
    this.resetView()
    this.currentView.view = "dashboard"
  }

  static setViewToDeckEditor(deck_id) {
    this.resetView()
    this.currentView.view = "deck-editor"
    this.currentView.id = deck_id
  }

  static setViewToPracticeView(deck_id) {
    this.currentView.view = "practice-view"
    this.currentView.id = deck_id
  }

  static setViewToShowAnswer() {
    this.currentView.showAnswer = true
  }

}