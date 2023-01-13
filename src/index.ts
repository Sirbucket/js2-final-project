import { maker } from "./modules"
import { NoteCard } from "./notecards"
import { ProcessInput, Word } from "./processing"

export let ReserveData : NoteCard[]
export let NoteCards : NoteCard[]
export let Words : Word[]
let app = document.querySelector(".app")

function createNewWord(word, definition) {
    let wordObj = new Word(word, definition)
    return wordObj
}

function makeNotecards() {
    for (let i = 0; i < NoteCards.length - 1; ++i) {
        app?.removeChild(NoteCards[i].element)
    }

    NoteCards = []

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
    for (let i = 0; i < NoteCards.length - 1; ++i) {
        app?.appendChild(NoteCards[i].element)
    }
}

function buildApp() {
    let typeboxes = []
    let buttons = []
    let controls = []

    let word : string
    let definition : string

    maker.newTypebox("Word", typeboxes).onInput((value) => {
        word = value;
    });
    maker.newTypebox("Definition", typeboxes).onInput((value) => {
        definition = value;
    });
    maker.newButton("Add Notecard", buttons).onClick(() => {
        let wordObj = createNewWord(word, definition);
        makeNotecards();
        Words.push(wordObj);
    });

    maker.newContainer(typeboxes, controls)
    maker.newContainer(buttons, controls)

    for (let i = 0; i < controls.length - 1; ++i) {
        app?.appendChild(controls[i].cloneContent)
    }
    makeNotecards();
}

buildApp();