import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext'


function AddNews() {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: ""
    })

    const handleCahnge = (e) => {
        setNote ({...note, [e.target.name]: e.target.value})
    }
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({
            title: "",
            description: "",
            tag: ""
        })
    }
    
    return (
        <div className='container'>
            <h2 className='my-3'>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="title" name="title" value={note.title} className="form-control" onChange={handleCahnge} id="title" placeholder="Study" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" value={note.description} name="description" onChange={handleCahnge} id="description" rows="3" placeholder="Study for 3 hours"  minLength={5} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="tag" name="tag" value={note.tag} className="form-control" onChange={handleCahnge} id="tag" placeholder="personal" minLength={5} required/>
                </div>
                <button type="button" disabled={note.title.length < 5 || note.description.length < 5} onClick={handleClick} className="btn btn-primary">Add Note</button>
            </form>
        </div>
    )
}

export default AddNews
