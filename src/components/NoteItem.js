import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext'

function NoteItem(props) {
    const { note, editNote } = props;
    const context = useContext(noteContext);
    const { deleteNote, updateNote } = context;

    const handleDelete = (id) => {
        deleteNote(id)
    }

    const handleEdit = (note) => {
        editNote(note)
    }
    return (
        <div className='col-md-3'>
            <div className="card my-2" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="far fa-trash-alt mx-2" onClick={() => {handleDelete(note._id)}}></i>
                    <i className="far fa-edit mx-2" onClick={() => {handleEdit(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
