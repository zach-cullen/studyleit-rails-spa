// provides information about session to other classes (i.e. current user, login, logout)
// communicates to server about session cookie
class Auth {

  // stores User object representing the logged in user
  static currentUser = {}

  //type checks passed in object and sets currentUser variable
  static setCurrentUser(user) {
    if (user instanceof User) {
      this.currentUser = user
    }
  }

  static clearCurrentUser() {
    this.currentUser = {}
  }

  // asks api to validate user is logged in using session
  // calls response handler when API promise resolves
  static getCurrentUser() {
    return API.get("/get_current_user")
      .then(json => this.handleCurrentUserResponse(json))
  }

  // reads json response for user login data and calls functions
  static handleCurrentUserResponse(json) {
    if (json.logged_in) {
      this.setCurrentUser(new User(json.user))
      Content.getUserDecks()
    } else {
      this.clearDataOnLogout()
      DOM.renderMainContainer()
    }
  }

  // Auth.isSignedIn returns true if currentUser is set to a User object
  static get isSignedIn() {
    return this.currentUser instanceof User 
  }

  // pulls information from document log in form and sends post request to api login route
  // triggers handleLoginResponse
  static submitLoginForm() {
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
      return API.post("/login", userInfo)
        .then(json => {
          // expect Rails api to provide logged_in: true or false 
          if (json.logged_in) {
            // set js current user from json response of user data
            this.setCurrentUser(new User(json.user))
            // second api request for user data
            Content.getUserDecks()
          } else {
            // logged_in false will return more info in error message
            alert(json.error)
          }
        })
    } else {
      // notify user that they need to fill in form fields
      alert("Email and password required for login.")
    }
  }


  // notify api of user logout to reset session
  // clear current user and reload after response
  static logoutUser() {
    API.post("/logout")
      .then(() => {
        this.clearDataOnLogout()
        DOM.renderMainContainer()
      })
  }

  static clearDataOnLogout() {
    // clears currentUser and cached content
    this.clearCurrentUser()
    Content.clearUserContent()
  }

}