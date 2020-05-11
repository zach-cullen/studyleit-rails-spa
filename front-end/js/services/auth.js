// provides information about session to other classes (i.e. current user, login, logout)
// communicates to server about session cookie
class Auth {

  static submitLoginForm() {
    // get user input data
    const email = document.getElementById("login-form-input-email").value
    const password = document.getElementById("login-form-input-password").value

    // create object to send in body of post request
    const userInfo = {
      user: {
        email,
        password
      }
    }

    API.post("/sessions", userInfo)
    // use Api service to send post` request to login with form data and handle promise
    
    // if valid user, create user object and hang on to cookie
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