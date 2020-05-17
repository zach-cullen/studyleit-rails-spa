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

  // provides html string specifically for creating a new deck
  static get viewNewCardForm() {
    return `
    <div class="form-wrapper">
      <div class="form-header">+ New Card</div>
      <form class="form-content" id="new-card-form" action="#" method="post">
        <textarea class="text-input" id="new-card-form-input-question" type="text" name="question" placeholder="Question"></textarea>
        <br>
        <textarea class="text-input" id="new-card-form-input-answer" type="text" name="answer" placeholder="Answer"></textarea>
        <br>
        <input class="form-submit" id="new-card-form-submit" type="submit" value="Save">
      </form>
    </div>
    `
  }

  // provides hhtml string for rendering scorecard
  // score data not yet persisted, but will be refactored to form that saves score
  static get viewScoreCard() {
    return `
    <div class="form-wrapper">
      <div class="form-header">Scorecard</div>
      <div class="form-content">
      <div class="scorecard-section" id="scorecard-cards-completed">
        <h5>Completed:<h5>
        <h1>12/6</h1>
      </div>
      <div class="scorecard-section" id="scorecard-cards-correct">
        <h5>Correct:<h5>
        <h1>70%</h1>
      </div>
      </form>
    </div>
    `
  }

}