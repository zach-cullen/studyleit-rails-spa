// attaches listeners to dom elements after content loaded (see index.js)
class Listener {
  // handles click events on body elements by identifying target and calling functions
  static listenForClicks() {
    const body = document.querySelector("body")
    body.addEventListener("click", (e) => {
      console.log(`clicked on ${e.target.id}!`)
    })
  }
}