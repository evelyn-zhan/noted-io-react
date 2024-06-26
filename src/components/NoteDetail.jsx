import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NoteDetail({ title, createdAt, body }) {
    return (
        <>
            <div className="note-detail__content">
                <h2>{title}</h2>
                <small>{createdAt}</small>
                <p>{body}</p>
            </div>
            <Link to="/" className="note-detail__back">
                <i className="ri-arrow-left-s-line"></i> Back
            </Link>
        </>
    )
}

export default NoteDetail

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}