import { notesData } from '../data/notes.js'

const home = () => {
    const noteListContainerElement = document.querySelector('#noteListContainer')
    const noteListElement = noteListContainerElement.querySelector('#noteList')
    const listElement = noteListElement.querySelector('.list')
    
    const displayNotes = (notes) => {
        const noteItemElements = notes.map((note) => {
            const noteItemElement = document.createElement('note-item')
            noteItemElement.note = note
            return noteItemElement
        })

        listElement.append(...noteItemElements)
    }
    displayNotes(notesData)
}

export default home