// stores information about app state to ensure correct rendering
// provides html strings to DOM for render
class State {

  // initialize with no information, will be reset by getCurrentUser and subsequent actions
  static currentView = {
    view: false,
    id: false
  } 

  static resetView() {
    this.currentView = {
      view: false,
      id: false
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
    this.currentView = {
      view: "dashboard",
      id: false
    }
  }

  static setViewToDeckEditor(deck_id) {
    this.currentView = {
      view: "deck-editor",
      id: deck_id
    }
  }

  static setViewToPracticeView(deck_id) {
    this.currentView = {
      view: "practice-view",
      id: deck_id
    }
  }

}