// provides html strings for viewing specific forms

class Forms {

  // provides html string specifically for login form
  static get viewLoginForm() {
    return `
    <div class="form-wrapper">
      <div class="form-header">Log In</div>
      <form class="form-content" id="login-form" action="#" method="post">
        <input class="text-input" id="login-form-input-email" type="text" name="email" value="" placeholder="email"><br>
        <input class="text-input" id="login-form-input-password" type="password" name="password" value="" placeholder="password"><br>
        <input class="form-submit" id="login-form-submit" type="submit">
      </form>
    </div>
    `
  }
  // provides html string specifically for creating a new deck
  static get viewNewDeckForm() {
    return `
    <div class="form-wrapper">
      <div class="form-header">+ New Deck</div>
      <form class="form-content" id="new-deck-form" action="#" method="post">
        <input class="text-input" id="new-deck-form-input-title" type="text" name="title" value="" placeholder="Title"><br>
        <input class="form-submit" id="new-deck-form-submit" type="submit" value="Save">
      </form>
    </div>
    `
  }


}