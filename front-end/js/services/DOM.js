// makes changes to the DOM

class DOM {
  static renderMainContainer() {
    console.log("rendering container!!!")
    const main = document.getElementById("main")
    if (Auth.isSignedIn) {
      main.innerHTML = `<h3>Logged in with ${Auth.currentUser.email}</h3>`
    }
    else {
      main.innerHTML = Auth.viewLoginForm
    }
  }
}