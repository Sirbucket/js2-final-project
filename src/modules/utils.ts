import {Button, Typebox, Container, Element} from "./"

export class ElementMaker {
    constructor() {}
    
    newButton(name, list) {
        const button = new Button(name)
    
        list.push(button)
        return button
    }

    newTypebox(name, list) {
        const typebox = new Typebox(name)
    
        list.push(typebox)
        return typebox
    }

    newContainer(list, list2) {
        const container = new Container(list)

        list2.push(container)
        return container
    }

    newElement(name, displayname, list) {
        const element = new Element(name, displayname)

        list.push(element)
        return element
    }
}