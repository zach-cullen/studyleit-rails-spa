// stores information about app state to ensure correct rendering
// provides html strings to DOM for render
class State {

  // initialize with no information, will be reset by getCurrentUser and subsequent actions
  static currentView = {
    view: false,
    id: false
  } 

  static resetCurrentView() {
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
      default:
        // by default will always show either login or dashboard as first page on refresh
        return Auth.isSignedIn ? Dashboard.viewDash : Forms.viewLoginForm
        break
    }
  }

}