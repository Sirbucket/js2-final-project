export class Word {
    word : string
    definition : string

    constructor(word, definition) {
        this.word = word
        this.definition = definition
    }
}

export class ProcessInput {
    words: Word[] = []
    constructor (words) {
        this.words = words 
    }
    filterInput(string : string) {
        let fString = string.toLowerCase().trimStart().trimEnd()
        if (fString == "") return false && console.log("This is blank");
        for (let i = 0; i < this.words.length; ++i) {
            if (fString == this.words[i].word || this.words[i].definition) return false && console.log("This word already exists");
        }
        return string
    }
}

