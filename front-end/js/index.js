document.addEventListener("DOMContentLoaded", init)

function init() {
  // get current user
  Auth.getCurrentUser().then(DOM.renderMainContainer)

  // listen for events
  Listener.listenForClicks()
}