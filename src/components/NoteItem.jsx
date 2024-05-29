import React from 'react'

function NoteItem({ id, title, createdAt, body, onArchive, onDelete }) {
    const onArchiveNoteHandler = () => onArchive(id)
    const onDeleteNoteHandler = () => onDelete(id)

    return (
        <div className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <small className="note-item__date">{createdAt}</small>
            <p className="note-item__content">{body}</p>
            <div className="note-item__buttons">
                <button className="note-item__button" onClick={onArchiveNoteHandler}>
                    <i className="ri-archive-line"></i>
                    <span>Archive</span>
                </button>
                <button className="note-item__button" onClick={onDeleteNoteHandler}>
                    <i className="ri-delete-bin-6-line"></i>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    )
}

export default NoteItem