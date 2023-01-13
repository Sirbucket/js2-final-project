import { maker } from "../modules";
import { Word } from "../processing";
import { NoteCards } from "..";
export class NoteCard {
    word : string
    definition : string
    oldHTML : HTMLElement
    clicked : boolean = false
    callbacks : Function[]
    element : HTMLElement
    constructor (word : Word) {
        this.word = word.word
        this.definition = word.definition
        let notecard = maker.newElement("notecard", word.word, NoteCards)
        this.element = notecard.element
        this.oldHTML = notecard.element
        this.element.addEventListener("click", (event) => {
            for (let i = 0; i < this.callbacks.length - 1; ++i) {
                let cb = this.callbacks[i]
                cb()
            }
        })

    }

    onClick(cb) {
        this.callbacks.push(cb)
    }
}