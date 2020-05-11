// makes changes to the DOM

class DOM {
  static renderMainContainer() {
    const main = document.getElementById("main")
    main.innerHTML = Auth.viewLoginForm
  }
}