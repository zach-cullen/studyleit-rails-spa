// stores information about app state to ensure correct rendering
// provides html strings to DOM for render
class State {

  // initialize with no information, will be reset by getCurrentUser and subsequent actions
  static currentView = {
    view: false,
    id: false
  } 

  static renderCurrentView() {
    
  }

}