// provides information about session to other classes (i.e. current user, login, logout)
// communicates to server about session cookie
class Auth {

  static submitLoginForm() {
    console.log("Auth is sumitting form!")
    // send post request to login with form data and handle promise
    // if valid user, create user object and hang on to cookie
  }

  // provides html string that can be used to add html form to the dom
  static get viewLoginForm() {
    return `
    <form class="auth-form" id="login-form" action="#" method="post">
      <input id="login-form-input-email" type="text" name="email" value="" placeholder="email">
      <input id="login-form-input-password" type="password" name="password" value="" placeholder="password">
      <input id="login-form-submit" type="submit" value="Log In">
    </form>
    `
  }
}