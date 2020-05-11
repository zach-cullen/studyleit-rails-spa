document.addEventListener("DOMContentLoaded", init)

function init() {
  // get current user


  // render content on page refresh
  DOM.renderMainContainer()

  // listen for events
  Listener.listenForClicks()

}