document.addEventListener("DOMContentLoaded", init)

function init() {
  // get current user triggers load of user decks
  Auth.getCurrentUser().then(DOM.renderMainContainer)
  // listen for events
  Listener.listenForClicks()
}