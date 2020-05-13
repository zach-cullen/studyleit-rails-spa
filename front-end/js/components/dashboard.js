// provides html strings to DOM for rendering changes

class Dashboard {
  static get viewDash() {
    return `
    <div class="dashboard" id="dash-outer">
      <div class="dashboard" id="dash-decks"></div>
      <div class="dashboard" id="dash-sidebar">
        ${Forms.viewNewDeckForm}
      </div>
   </div>`
  }

}

