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
        console.log("clicked on dash deck!")
        break
    }
  }

  // handles clicks to elements of login form based on element id
  static handleLoginFormClick(e) {
    switch(e.target.id) {
      case "login-form-submit":
        Auth.submitLoginForm()
        break
      case "new-deck-form-submit":
        // console.log("NEW DECK BUTTON!")
        Content.submitNewDeckForm()
        break
    }
  }

  static handleNavButtonClick(e) {
    switch(e.target.id) {
      case "logout-button":
        this.handleLogoutButtonClick(e)
        break
    }
  }

  static handleLogoutButtonClick(e) {
    Auth.logoutUser()
  }
}