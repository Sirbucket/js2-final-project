import { ElementMaker, Element } from "../modules";

let maker = new ElementMaker()
export class NoteCard {
    word : string
    definition : string
    notecards : Element[]
    callbacks : Function[]
    element : HTMLElement
    constructor (word, definition) {
        this.word = word
        this.definition = definition
        let notecard = maker.newElement("notecard", word, this.notecards)
        this.element = notecard.element
        this.element.addEventListener("click", (event) => {
            for (let i = 0; this.callbacks.length - 1; ++i) {
                let cb = this.callbacks[i]
                cb()
            }
        })

    }

    onClick(cb) {
        this.callbacks.push(cb)
    }
}