// Responsible for requesting information related to user-created content like decks and cards
// Stores all content while user is logged in for maintaining state

class Content {

  static allDecks = []

  // calls API get request for decks pertaining to user currently logged in
  // returns a promise that resolves with json collection of user_decks
  static getUserDecks() {
    console.log("loading CONTENT: user decks...")
    return API.get(`/users/${Auth.currentUser.id}/decks`)
      .then(json => console.log(json))
  }
}