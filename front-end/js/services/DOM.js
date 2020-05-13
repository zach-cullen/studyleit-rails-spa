// makes changes to the DOM

class DOM {

  // be careful with THIS because it will get lost in chained method
  static renderMainContainer() {
    console.log("RENDER main container")
    const main = document.getElementById("main")
    if (Auth.isSignedIn) {
      // render dashboard frame & forms
      main.innerHTML = Dashboard.viewDash
    }
    else {
      main.innerHTML = Forms.viewLoginForm
    }
  }
}