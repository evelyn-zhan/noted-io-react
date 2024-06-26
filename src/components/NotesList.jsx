import React from 'react'
import PropTypes from 'prop-types'

import NoteItem from './NoteItem.jsx'

function NotesList({ notes, onArchive, onDelete }) {
    return (
        <div className="notes-list">
            <h2 className="notes-list__title">
                <i className="ri-sticky-note-line"></i>
                <span>My Notes</span>
            </h2>

            <div className="notes-list__container">
                {
                    notes.length === 0
                        ? (
                            <p className="notes-list__empty">There is no note ...</p>
                        )
                        : (
                            <div className="notes-list__items">
                                {
                                    notes.map((note) => {
                                        return <NoteItem key={note.id} {...note} onArchive={onArchive} onDelete={onDelete} />
                                    })
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default NotesList

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}