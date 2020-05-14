// provides html strings for rendering editor views
class Editor {

  static viewDeckEditor() {
    const deck = Content.allDecks.find((d) => d.id == State.currentView.id)
    return `
      <h1>Editing ${deck.title}</h1>
    `
  }

}