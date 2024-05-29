import React from 'react'

import { getNotesData, showFormattedDate } from '../utils/notes-data.js'

import Header from '../components/Header.jsx'
import AddNote from './AddNote.jsx'
import NotesList from '../components/NotesList.jsx'
import ArchivedList from '../components/ArchivedList.jsx'

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            notes: getNotesData(),
            search: ''
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)
        this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this)
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
    }

    onAddNoteHandler({ title, content }) {
        if(title === '' || content === '') {
            alert('⚠️  Your Note Title or Note Content may not be empty!')
        } else {
            this.setState((prevState) => {
                return {
                    notes: [
                        {
                            id: +new Date(),
                            title,
                            content,
                            archived: false,
                            createdAt: showFormattedDate(Date())
                        },
                        ...prevState.notes
                    ]
                }
            })
        }
    }

    onSearchNoteHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value
            }
        })
    }

    onArchiveNoteHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => {
                    if(note.id === id) {
                        return {
                            ...note,
                            archived: true
                        }
                    } else {
                        return note
                    }
                })
            }
        })
    }

    onUnarchiveNoteHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => {
                    if(note.id === id) {
                        return {
                            ...note,
                            archived: false
                        }
                    } else {
                        return note
                    }
                })
            }
        })
    }

    onDeleteNoteHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter((note) => note.id !== id)
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
            <>
                <Header />
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
            </>
        )
    }
}

export default NotesApp