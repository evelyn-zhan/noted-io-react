import React from 'react'

import ArchivedItem from './ArchivedItem.jsx'

function ArchivedList({ archivedNotes, onUnarchive, onDelete }) {
    return (
        <div className="notes-list">
            <h2 className="notes-list__title">
                <i className="ri-archive-line"></i>
                <span>Archived Notes</span>
            </h2>

            <div className="notes-list__container">
                {
                    archivedNotes.length === 0
                        ? (
                            <p className="notes-list__empty">There is no note ...</p>
                        )
                        : (
                            <div className="notes-list__items">
                                {
                                    archivedNotes.map((note) => {
                                        return <ArchivedItem key={note.id} {...note} onUnarchive={onUnarchive} onDelete={onDelete} />
                                    })
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default ArchivedList