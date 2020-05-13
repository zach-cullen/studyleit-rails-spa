// provides information about session to other classes (i.e. current user, login, logout)
// communicates to server about session cookie
class Auth {

  // stores User object representing the logged in user
  static currentUser = {}

  //type checks passed in object and sets currentUser variable
  static setCurrentUser(user) {
    console.log("setting current user...")
    if (user instanceof User) {
      this.currentUser = user
    }
  }

  static clearCurrentUser() {
    this.currentUser = {}
  }

  static getCurrentUser() {
    console.log("Asking API for current user")
    return API.get("/get_current_user")
      .then(json => {
        json.logged_in ? this.setCurrentUser(new User(json.user)) : this.clearCurrentUser()
      })
      // .then(json => this.setCurrentUser(new User(json.user)))
  }

  // Auth.isSignedIn returns true if currentUser is set to a user object
  static get isSignedIn() {
    const authorized  = this.currentUser instanceof User 
    console.log(`checking if signed in... ${authorized}`)
    return authorized
  }

  // pulls information from document log in form and sends post request to api login route
  // triggers handleLoginResponse
  static submitLoginForm() {
    console.log("submitting login form...")
    // get user input data
    const email = document.getElementById("login-form-input-email").value
    const password = document.getElementById("login-form-input-password").value

    // create object to send as payload
    const userInfo = {
      user: {
        email,
        password
      }
    }

    // check for user input before sending (weak validation)
    if (email && password) {
      // use Api service to post userinfo to api and handle promise
      API.post("/login", userInfo)
        .then(json => this.handleLoginResponse(json))
    }
    else {
      alert("Email and password required for login.")
    }
  }

  // receives a json string and checks for logged_in status
  // triggers setUser and rerenders page
  static handleLoginResponse(json) {
    switch(json.logged_in) { 
      case true:
        this.setCurrentUser(new User(json.user))
        // rerender
        DOM.renderMainContainer()
        break
      case false:
        alert(json["error"])
        break
    }
  }

  // called on logout click
  static logoutUser() {
    console.log("logging out user")
    API.post("/logout")
      .then(resp => console.log(resp))
      .then(this.clearCurrentUser())
      .then(DOM.renderMainContainer)
  }

}