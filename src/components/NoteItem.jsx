import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NoteItem({ id, title, createdAt, body, onArchive, onDelete }) {
    const onArchiveNoteHandler = () => onArchive(id)
    const onDeleteNoteHandler = () => onDelete(id)

    let shownText = ''

    if(body.length > 200) {
        for(let i = 0; i < body.length - (body.length - 150); i++) {
            shownText += body[i]
        }
        shownText += '...'
    } else {
        shownText = body
    }
    

    return (
        <div className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <small className="note-item__date">{createdAt}</small>
            <p className="note-item__content">{shownText}</p>
            <Link to={`/note/${id}`} className="note-item__link">
                <div className="note-item__link__content">
                    <span>Detail</span>
                    <i className="ri-arrow-right-s-line"></i>
                </div>
            </Link>
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

NoteItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}