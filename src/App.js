import React , {useState, useEffect } from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first Note",
      date: "15/04/2021",

    },
  ])
  const [searchText , setsearchText] = useState("")
  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id:  nanoid(),
      text: text,
      date: date.toLocaleDateString()

    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
   const newNotes = notes.filter((note)=> note.id !== id )
   setNotes(newNotes)
  }

  const [darkMode,setDarkMode] = useState(false)

  useEffect(()=>{
    const savedNotes =  JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes) {
      setNotes(savedNotes);
    }
  },[])
  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  }, [notes])

  return (
    <div className = {`${darkMode && "dark-mode"}`}>
      <div className ="container">
      <Header handleToggleDarkMode = {setDarkMode}/>
      <Search handleSearchNote={setsearchText}/>
      <NotesList 
      notes = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
       handleAddNote = {addNote}
       handleDeleteNote = {deleteNote}
       />
      
    </div>
    </div>
    
  )
}

export default App;