import NoteContext from './noteContext';
import {useState} from 'react'

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "61da91c91523174139234107",
          "user": "61d9bbdc2677d37b94fabe86",
          "title": "Play",
          "description": "Play for 30 minutes",
          "tag": "personal",
          "date": "2022-01-09T07:42:01.933Z",
          "__v": 0
        },
        {
            "_id": "61da91c91523174139234107",
            "user": "61d9bbdc2677d37b94fabe86",
            "title": "Play",
            "description": "Play for 30 minutes",
            "tag": "personal",
            "date": "2022-01-09T07:42:01.933Z",
            "__v": 0
          },
          {
            "_id": "61da91c91523174139234107",
            "user": "61d9bbdc2677d37b94fabe86",
            "title": "Play",
            "description": "Play for 30 minutes",
            "tag": "personal",
            "date": "2022-01-09T07:42:01.933Z",
            "__v": 0
          },
          {
            "_id": "61da91c91523174139234107",
            "user": "61d9bbdc2677d37b94fabe86",
            "title": "Play",
            "description": "Play for 30 minutes",
            "tag": "personal",
            "date": "2022-01-09T07:42:01.933Z",
            "__v": 0
          },
          {
            "_id": "61da91c91523174139234107",
            "user": "61d9bbdc2677d37b94fabe86",
            "title": "Play",
            "description": "Play for 30 minutes",
            "tag": "personal",
            "date": "2022-01-09T07:42:01.933Z",
            "__v": 0
          },
          {
            "_id": "61da91c91523174139234107",
            "user": "61d9bbdc2677d37b94fabe86",
            "title": "Play",
            "description": "Play for 30 minutes",
            "tag": "personal",
            "date": "2022-01-09T07:42:01.933Z",
            "__v": 0
          },
          {
            "_id": "61da91c91523174139234107",
            "user": "61d9bbdc2677d37b94fabe86",
            "title": "Play",
            "description": "Play for 30 minutes",
            "tag": "personal",
            "date": "2022-01-09T07:42:01.933Z",
            "__v": 0
          }
      ]
    const [notes, setNotes] = useState(notesInitial);

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;