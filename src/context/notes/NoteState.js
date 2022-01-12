import NoteContext from './noteContext';
import { useState } from 'react'

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  const getNote = async () => {
    const url = `${host}/api/notes/fetchnotes`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkOWJiZGMyNjc3ZDM3Yjk0ZmFiZTg2In0sImlhdCI6MTY0MTY5NTM0MX0.hJceR3iNiY6uAAn_NzpN-1V-w3e2lhUEg02JvMVp9Tc'
      },
    });
    const json = await response.json();
    setNotes(json);
  }

  // add Notes
  const addNote = async (title, description, tag) => {
    const url = `${host}/api/notes/addnotes`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkOWJiZGMyNjc3ZDM3Yjk0ZmFiZTg2In0sImlhdCI6MTY0MTY5NTM0MX0.hJceR3iNiY6uAAn_NzpN-1V-w3e2lhUEg02JvMVp9Tc'
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    });
    const json = response.json();

    const note =  {
      "_id": "61da91c9152317h139234107",
      "user": "61d9bbdc2677d37b94fabe86",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-01-09T07:42:01.933Z",
      "__v": 0
    }
    return setNotes(notes.concat(note))
  }

  // delete Notes
  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deletenotes/${id}`
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkOWJiZGMyNjc3ZDM3Yjk0ZmFiZTg2In0sImlhdCI6MTY0MTY5NTM0MX0.hJceR3iNiY6uAAn_NzpN-1V-w3e2lhUEg02JvMVp9Tc'
      },
    });
    const json = response.json();

    const newNote = notes.filter(note => note._id !== id);
    return setNotes(newNote);
  }

  // update Notes
  const updateNote = async ({id, title, description, tag}) => {
    const url = `${host}/api/notes/updatednotes/${id}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkOWJiZGMyNjc3ZDM3Yjk0ZmFiZTg2In0sImlhdCI6MTY0MTY5NTM0MX0.hJceR3iNiY6uAAn_NzpN-1V-w3e2lhUEg02JvMVp9Tc'
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    });
    const json = response.json();

    const newNote = JSON.parse(JSON.stringify(notes));
    newNote.forEach(note => {
      if (note._id === id) {
        note.title = title;
        note.description = description;
        note.tag = tag;
      }
    })
    setNotes(newNote);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, getNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;

