document.addEventListener("DOMContentLoaded", init)

function init() {
  // get current user triggers load of user decks and render of main container based on response
  // ** REFACTOR to loadCurrentUserData so that data retrieved on first request
  Auth.getCurrentUser()
  // listen for events
  Listener.listenForClicks()
}