import React , {useState} from 'react'
import Note from './Note'
const AddNote = ({handleAddNote}) => {
    const [noteText , setNoteText] =useState("")
    const characterLimit = 200;
    

    const handleChange = (e) => {

        if(characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
        

    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    }

    return (
        <div className="note new">
            <textarea 
                rows="8"
                cols="10"
                placeholder="Add a new note..."
                value = {noteText}
                onChange = {handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button 
                    onClick = {handleSaveClick} 
                    className="save"
                 >
                Save
                </button>
            </div>
        </div>
    )
}

export default AddNote;