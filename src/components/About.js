import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';

export default function About() {
    const a = useContext(noteContext);
    return (
        <div>
            This is about Component<br />
            Using Context  - {a.name} got '{a.grade}' grade in class 10th
        </div>
    )
}
