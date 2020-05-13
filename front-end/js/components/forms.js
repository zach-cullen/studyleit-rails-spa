// provides html strings for viewing specific forms

class Forms {
  // provides html string specifically for login form
  static get viewLoginForm() {
    return `
    <div class="form-wrapper">
      <div class="form-header"><h4>Log In</h4></div>
      <form class="form-content" id="login-form" action="#" method="post">
        <input class="text-input" id="login-form-input-email" type="text" name="email" value="" placeholder="email"><br>
        <input class="text-input" id="login-form-input-password" type="password" name="password" value="" placeholder="password"><br>
        <input class="form-submit" id="login-form-submit" type="submit">
      </form>
    </div>
    `
  }

  
}