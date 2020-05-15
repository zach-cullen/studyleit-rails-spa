// attaches listeners to dom elements after content loaded (see index.js)
class Listener {

  // handles all click events on body element and calls event handler function
  static listenForClicks() {
    const body = document.querySelector("body")
    body.addEventListener("click", (e) => this.handleBodyClick(e))
  }

  // PREVENTS DEFAULT ACTION ON ALL BODY CLICKS 
  // calls sub-functions based on html class of event target, 
  static handleBodyClick(e) {
    e.preventDefault()
    switch(e.target.className) {
      case "form-submit":
        this.handleLoginFormClick(e)
        break
      case "nav-button":
        this.handleNavButtonClick(e)
        break
      case "dash-deck-title":
        const deck_id = e.target.id
        State.setViewToDeckEditor(deck_id)
        DOM.renderMainContainer()
        break
      case "dash-deck-delete":
      case "dash-deck-edit":
      case "dash-deck-play":
        this.handleDashDeckTabClick(e)
        break
      case "main-title-back":
        console.log("CLICKED BACK!")
        State.setViewToDashboard()
        DOM.renderMainContainer()
        break
      default:
        console.log(e.target)
    }
  }

  // handles clicks to elements of login form based on element id
  static handleLoginFormClick(e) {
    switch(e.target.id) {
      case "login-form-submit":
        Auth.submitLoginForm()
        break
      case "new-deck-form-submit":
        Content.submitNewDeckForm()
        break
      case "new-card-form-submit":
        Content.submitNewCardForm()
        break
    }
  }

  static handleNavButtonClick(e) {
    switch(e.target.id) {
      case "logout-button":
        Auth.logoutUser()
        break
    }
  }



  // gets value of deck and calls a Content action for that deck
  static handleDashDeckTabClick(e) {
    const deck_id = e.target.value
    switch(e.target.className) {
     case "dash-deck-delete":
        Content.requestDeleteDeck(deck_id)
        break
      case "dash-deck-edit":
        State.setViewToDeckEditor(deck_id)
        DOM.renderMainContainer()
        break
      case "dash-deck-play":
        console.log(`clicked PLAY value: ${deck_id}`)
        break
    }
  }

}