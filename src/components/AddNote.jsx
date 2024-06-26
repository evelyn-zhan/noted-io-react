import React from 'react'
import PropTypes from 'prop-types'

class AddNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            limit: 50
        }

        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this)
        this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this)
        this.onSubmitHandler =  this.onSubmitHandler.bind(this)
    }

    onChangeTitleHandler(event) {
        if(this.state.limit - event.target.value.length <= 10) {
            document.querySelector('.title-limit').style.color = 'red'
        } else {
            document.querySelector('.title-limit').style.color = 'black'
        }

        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onChangeBodyHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault()
        this.props.addNote(this.state.title, this.state.body)
        this.setState(() => {
            return {
                title: '',
                body: ''
            }
        })
    }

    render() {
        return (
            <div className="add-note">
                <h2 className="add-note__title">
                    <i className="ri-sticky-note-add-line"></i>
                    <span>Add New Note</span>
                </h2>

                <form className="add-note__form" onSubmit={this.onSubmitHandler}>
                    <div className="input-title">
                        <input
                            type="text" placeholder="Note Title" id="note-title"
                            autoComplete="off" maxLength={50}
                            value={this.state.title}
                            onChange={this.onChangeTitleHandler}
                            className="add-note__form-input add-note__note-title"
                        />
                        <span className="title-limit">{this.state.limit - this.state.title.length} characters left</span>
                    </div>
                    <textarea
                        placeholder="Type your notes here..." id="note-content"
                        autoComplete="off" wrap="hard" maxLength={250}
                        rows={8}
                        value={this.state.body}
                        onChange={this.onChangeBodyHandler}
                        className="add-note__form-input add-note__note-content"
                    >
                    </textarea>
                    <button type="submit" className="add-note__form-input add-note__submit-button">
                        <i className="ri-add-line"></i>
                        <span>Add Note</span>
                    </button>
                </form>
            </div>
        )
    }
}

export default AddNote

AddNote.propTypes = {
    addNote: PropTypes.func.isRequired
}