// Responsible for all direct changes to the DOM
class DOM {

  static renderMainContainer() {
    const main = document.getElementById("main")
    main.innerHTML = State.renderCurrentView()
  }
}