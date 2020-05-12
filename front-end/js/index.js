document.addEventListener("DOMContentLoaded", init)

function init() {
  // get current user
  // triggers 2nd render of main container after fetch current user
  Auth.getCurrentUser()

  // renders content in main
  // this will happen before current_user is done setting current user
  DOM.renderMainContainer()

  // listen for events
  Listener.listenForClicks()

}