// provides information about session to other classes (i.e. current user, login, logout)
// communicates to server about session cookie
class Auth {

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
      API.post("/sessions", userInfo)
    }
    else {
      alert("Email and password required for login.")
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