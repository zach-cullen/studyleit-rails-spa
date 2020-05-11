// attaches listeners to dom elements after content loaded (see index.js)
class Listener {

  // handles all click events on body element and calls event handler function
  static listenForClicks() {
    const body = document.querySelector("body")
    body.addEventListener("click", (e) => this.handleBodyClick(e))
  }

  static handleBodyClick(e) {
    switch(e.target.id) {
      case "login-form-submit":
        e.preventDefault()
        Auth.submitLoginForm()
        break
    }
  }
}