import { maker } from "./modules"
import { NoteCard } from "./notecards"
import { ProcessInput, Word } from "./processing"

export let NoteCards : NoteCard[]
export let Words : Word[]
let app = document.querySelector(".app")

function createNewWord(word, definition) {
    let wordObj = new Word(word, definition)
    return wordObj
}

function addInputsToApp(typeboxes, buttons) {
    for (let i = 0; i < typeboxes.length - 1; ++i) {
        app?.appendChild(typeboxes[i].element)
    }
    for (let i = 0; i < buttons.length - 1; ++i) {
        app?.appendChild(buttons[i].element)
    }
}

function makeNotecards() {
    for (let i = 0; i < Words.length - 1; ++i) {
        maker.newNoteCard(Words[i]).onClick(() => {
            if (NoteCards[i].clicked) {
                NoteCards[i].element.innerHTML = NoteCards[i].oldHTML.innerHTML
                NoteCards[i].clicked = false
            } else {
                NoteCards[i].element.innerHTML = `
                <label>
                    <div class = "notecard">
                        ${Words[i].definition}
                    </div>
                </label>
                `
                NoteCards[i].clicked = true
            }
        })
    }
}

function buildApp() {
    let typeboxes = []
    let buttons = []
    
    let word : string
    let definition : string

    maker.newTypebox("Word", typeboxes).onInput((value) => {
        word = value;
    });
    maker.newTypebox("Definition", typeboxes).onInput((value) => {
        definition = value
    })
    maker.newButton("Add Notecard", buttons).onClick(() => {
        let wordObj = createNewWord(word, definition)
        Words.push(wordObj)
    })

    addInputsToApp(typeboxes, buttons)

    
}