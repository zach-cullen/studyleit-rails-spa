// makes changes to the DOM

class DOM {

  // be careful with THIS because it will get lost in chained method
  static renderMainContainer() {
    console.log("RENDER main container")
    const main = document.getElementById("main")
    if (Auth.isSignedIn) {
      main.innerHTML = `<h3>Logged in with ${Auth.currentUser.email}</h3>`
    }
    else {
      main.innerHTML = Auth.viewLoginForm
    }
  }
}