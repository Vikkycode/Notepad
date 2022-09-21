import React,{useState,useRef,useEffect} from 'react'
import './App.css';
import { nanoid } from 'nanoid';
import Header from '../src/components/Header'
import Search from '../src/components/Search'
import NoteList from '../src/components/NoteList'

// import NoteForm from '../src/components/NoteForm'

function App() {

  const noteItems = [
    // {
    
    //   id:nanoid(),
    //   title:"hello",
    //   content:"how are you?",
    //   date:"August 29 2022 18:50pm",
    //   isCompleted:false
    // },
    // {
    //   id:nanoid(),
    //   title:"Reactjs",
    //   content:"I am a react Reactjs",
    //   date:"August 29 2022 18:50pm",
    //   isCompleted:false
    // },
    // {
    //   id:nanoid(),
    //   title:"Python",
    //   content:"I love learing Python",
    //   date:"August 29 2022 18:50pm",
    //   isCompleted:false
    // },
    // {
    //   id:nanoid(),
    //   title:"Php",
    //   content:"Php is better",
    //   date:"August 29 2022 18:50pm",
    //   isCompleted:false
    // }
    
  ]
  
  const [notes,setNotes]=useState([])
  const [inputTitle,setInputTitle]=useState("")
  const [inputText,setInputText]=useState("")  
  const [searchInput,setSearchInput]=useState("")
  const [editNote,setEditNote]=useState("")
  const [editNoteId,setEditNoteId]=useState(null)
  const [editTextArea,setEditTextArea]=useState("")
  const [editTextAreaId,setEditTextAreaId]=useState(null)
  const [darkMode,setDarkMode]=useState(false)

//retrieve notes from local storage
  useEffect(()=>{
    const noteJSON = localStorage.getItem("notes");
    const retrievedNotes = JSON.parse(noteJSON)
    if(retrievedNotes?.length > 0){
      setNotes(retrievedNotes)
    }
  },[])

  //setting notes to local storage  
  useEffect(()=>{
    const noteJSON = JSON.stringify(notes);
    localStorage.setItem('notes',noteJSON)
  },[notes])
  
 
  const formatDate = (date)=>{
    let today = date.toDateString(),
     hours = date.getHours(),
     minutes = date.getMinutes(),
     ampm = hours >= 12 ? "PM": "AM";
     hours %= 12;
     hours = hours ? hours : 12;
     minutes = minutes < 10 ? '0'+ minutes : minutes;
     let strTime = `${today}, ${hours} : ${minutes} ${ampm}`
     return strTime; 
  } 
  
  const handleInputSubmit =(e)=>{
    e.preventDefault()
      const NewNote = {
        id:nanoid(),
        title:inputTitle,
        content:inputText,
        date:formatDate(new Date()),
        isCompleted:false
  }

    if(inputTitle.trim().length || inputText.trim().length){
    setNotes([...notes,NewNote],inputText,inputTitle)
       setInputTitle("")
       setInputText("")
       alert(`Your new note has been saved`)

  }
  }

  const EditInputSubmit=(e)=>{
    e.preventDefault()
     const editedDate = formatDate(new Date())
    const updateNotes = [...notes].map((note)=>{
      if(note.id === editNoteId && editTextAreaId){
        return {...note,title:editNote,content:editTextArea,date:editedDate}
      }
      return note;
    })
    if(editNote.trim().length || editTextArea.trim().length){

      setNotes(updateNotes,editNote,editTextArea)
      setEditNoteId(null)
      setEditTextAreaId(null)
      alert(`Your edited note has been saved`)
    }
  }

  const deleteNote = (id)=>{
    const deletedNotes = notes.filter(note => note.id !== id)
    setNotes(deletedNotes) 
  }

  const toggledEditMode=(id)=>{
    const editedNotes = notes.find(note => note.id === id)
    setEditNoteId(id)
    setEditTextAreaId(id)
    setEditNote(editedNotes.title)
    // setEditNote(editedNotes.content)
    setEditTextArea(editedNotes.content)
  }
  return (
    <div
    className={`min-h-screen transition delay-500   w-full ${darkMode ? "bg-white  ": "bg-black "}  ${darkMode ? "text-black": "text-white"}  p-5`} >
      <Header 
      darkMode={darkMode}
      handleToggleDarkMode={setDarkMode}  
      />
      <Search handleSearchInput={setSearchInput} darkmode={darkMode} />
      <NoteList

      date = {formatDate(new Date())} 
      notes={notes.filter(note => note.title.toLocaleLowerCase().includes(searchInput)
     || note.content.toLocaleLowerCase().includes(searchInput))} 
     editNote={editNote}
     inputText={inputText}
     editNoteId={editNoteId}  
     inputTitle={inputTitle}
     handleAddNote={handleInputSubmit}
     handleEditInputSubmit={EditInputSubmit}
     setInputText={setInputText}    
     setInputTitle={setInputTitle}
     handleDeleteNote={deleteNote}
     handleEditNote={toggledEditMode}
     darkMode={darkMode}
     setEditNote={setEditNote}
     setEditNoteId={setEditNoteId}
     editTextArea={editTextArea}
     setEditTextArea={setEditTextArea}
     editTextAreaId={editTextAreaId}
     setEditTextAreaId={setEditTextAreaId}
     />
      {/* <NoteForm />       */}
    </div>
  );
}

export default App;
