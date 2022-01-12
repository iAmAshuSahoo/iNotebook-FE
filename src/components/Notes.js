import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext'
import AddNews from './AddNews';
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(noteContext);
    const { notes, getNote, updateNote } = context;
    const ref = useRef(null)
    const refClose = useRef(null)

    useEffect( () => {
        getNote();
    }, [notes])

    const editNote = (note) => {
        // console.log("Hello", id)
        setNote ({id: note._id, title: note.title, description: note.description, tag: note.tag})
        ref.current.click();
    }

    const [note, setNote] = useState({
        id: "",
        title: "",
        description: "",
        tag: ""
    })

    const handleCahnge = (e) => {
        setNote ({...note, [e.target.name]: e.target.value})
    }
    const handleClick = (e) => {
        e.preventDefault();
        updateNote(note)
        setNote({
            id: "",
            title: "",
            description: "",
            tag: ""
        })
        ref.current.click();
        console.log("wow", note)
        // addNote(note.title, note.description, note.tag);
    }

    return (
        <>
        <AddNews />

        {/* <!-- Button trigger modal --> */}
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="title" name="title" value={note.title} className="form-control" onChange={handleCahnge} id="title" placeholder="Study" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" value={note.description} name="description" onChange={handleCahnge} id="description" rows="3" placeholder="Study for 3 hours" minLength={5} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="tag" name="tag" value={note.tag} className="form-control" onChange={handleCahnge} id="tag" placeholder="personal" minLength={5} required />
                    </div>                
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" disabled={note.title.length < 5 || note.description.length < 5} ref={refClose} className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
            </div>
        </div>
        </div>

        <div className='row my-3'>
            <h2 className='my-3'>Your Notes</h2>
            {notes.map(note => {
                return <NoteItem
                    key={note.title + note._id}
                    editNote={editNote}
                    note={note} />
            })}
        </div>
        </>
    )
}

export default Notes
