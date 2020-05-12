// provides information about session to other classes (i.e. current user, login, logout)
// communicates to server about session cookie
class Auth {

  // stores User object representing the logged in user
  static currentUser = {}

  // type checks passed in object and sets currentUser variable
  static setCurrentUser(user) {
    if (user instanceof User) {
      this.currentUser = user
    }
  }

  // Auth.isSignedIn returns true if currentUser is set to a user object
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
        break
      case false:
        alert(json["error"])
        break
    }
  }

  // provides html string that can be used to add html form to the dom
  static get viewLoginForm() {
    return `
    <form class="login-form" id="login-form" action="#" method="post">
      <input class="login-form" id="login-form-input-email" type="text" name="email" value="" placeholder="email">
      <input class="login-form" id="login-form-input-password" type="password" name="password" value="" placeholder="password">
      <input class="login-form" id="login-form-submit" type="submit" value="Log In">
    </form>
    `
  }
}