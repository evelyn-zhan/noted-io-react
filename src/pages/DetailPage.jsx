import React from 'react'
import { useParams } from 'react-router-dom'

import { getNote } from '../utils/notes-data'
import NoteDetail from '../components/NoteDetail'

function DetailPageWrapper() {
    const { id } = useParams()
    return <DetailPage id={Number(id)} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(props.id)
        }
    }

    render() {
        return (
            <div className="note-detail">
                {
                    this.state.note === null || this.state.note === undefined
                        ? <p>There is no note...</p>
                        : <NoteDetail {...this.state.note} />
                }
            </div>
        )
    }
}

export default DetailPageWrapper