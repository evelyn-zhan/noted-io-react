import React from 'react'

import { getNotes, addNote, deleteNote, archiveNote, unarchiveNote } from '../utils/notes-data'
import AddNote from '../components/AddNote'
import NotesList from '../components/NotesList'
import ArchivedList from '../components/ArchivedList'

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            notes: getNotes(),
            search: ''
        }

        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)
        this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
    }

    onSearchNoteHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value
            }
        })
    }

    onArchiveNoteHandler(id) {
        archiveNote(id)
        this.setState(() => {
            return {
                notes: getNotes()
            }
        })
    }

    onUnarchiveNoteHandler(id) {
        unarchiveNote(id)
        this.setState(() => {
            return {
                notes: getNotes()
            }
        })
    }

    onAddNoteHandler(title, body) {
        if(title === '' || body === '') {
            alert('⚠️  Your Note Title or Note Content may not be empty!')
        } else {
            addNote(title, body)
            this.setState(() => {
                return {
                    notes: getNotes()
                }
            })
        }
    }

    onDeleteNoteHandler(id) {
        deleteNote(id)
        this.setState(() => {
            return {
                notes: getNotes()
            }
        })
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.search.toLowerCase())
        })

        const unarchivedNotes = filteredNotes.filter((note) => {
            return note.archived === false
        })

        const archivedNotes = filteredNotes.filter((note) => {
            return note.archived === true
        })

        return (
            <div className="app-content">
                <AddNote addNote={this.onAddNoteHandler} />
                <div className="all-notes">
                    <input
                        type="text" placeholder="Search Note" id="search-note"
                        autoComplete="off"
                        value={this.state.search} onChange={this.onSearchNoteHandler}
                        className="search-note"
                    />
                    <NotesList notes={unarchivedNotes} onArchive={this.onArchiveNoteHandler} onDelete={this.onDeleteNoteHandler} />
                    <div className="line"></div>
                    <ArchivedList archivedNotes={archivedNotes} onUnarchive={this.onUnarchiveNoteHandler} onDelete={this.onDeleteNoteHandler} />
                </div>
            </div>
        )
    }
}

export default NotesApp