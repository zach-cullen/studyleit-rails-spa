// Responsible for all direct changes to the DOM
class DOM {

  static renderMainContainer() {
    const main = document.getElementById("main")
    if (Auth.isSignedIn) {
      // render dashboard 
      main.innerHTML = Dashboard.viewDash
    }
    else {
      // render login
      main.innerHTML = Forms.viewLoginForm
    }
  }
}