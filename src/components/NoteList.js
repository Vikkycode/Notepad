import React,{useState} from 'react'

import Note from '../components/Note'
import {MdOutlineAdd} from 'react-icons/md'
import NoteForm from '../components/NoteForm'
import AnimatePage from './AnimatePage'
const NoteList = ({

  date,
  notes,
  darkMode,
  inputTitle,
  inputText,
  setInputText,
  setInputTitle,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
  editNote,
  editNoteId,
  setEditNote,
  setEditNoteId,
  editTextArea,
  setEditTextArea,
  editTextAreaId,
  setEditTextAreaId,
  handleToggleDarkMode,
  handleEditInputSubmit
}) => {
 
  const [showModal,setShowModal]=useState(false)
  const [editShowModal,setEditShowModal]=useState(false)
  return (
    
    <div>
    <div className='flex items-center flex-wrap justify-center'>
        
    <button className='text-white fixed top-[90%]'> 
    <MdOutlineAdd 
    className={` transition delay-500 duration-500 ease-in-out ${darkMode ? "text-white hover:bg-black text-white"
    :"text-black hover:bg-white text-black"} rounded-full h-10 w-10 bg-blue-600 

     cursor-pointer`}
    onClick={()=> setShowModal(true)}
    /></button>
        {notes?.map((note)=>(
            <Note 
            
            key={note.id}
            note={note}
            id={note.id}
            title={note.title}
            content={note.content}
            date={note.date}
            notes={notes}
            handleAddNote={handleAddNote}
            handleDeleteNote={handleDeleteNote}
            handleEditInputSubmit={handleEditInputSubmit}
            handleEditNote={handleEditNote}
            editNote={editNote}
            editNoteId={editNoteId}
            setEditNote={setEditNote}
            setEditNoteId={setEditNoteId}
            editTextArea={editTextArea}
            setEditTextArea={setEditTextArea}
            editTextAreaId={editTextAreaId}
            setEditTextAreaId={setEditTextAreaId}
            handleToggleDarkMode={handleToggleDarkMode}
            darkMode={darkMode}
            showModal={showModal}
            setShowModal={setShowModal}
            editShowModal={editShowModal}
            setEditShowModal={setEditShowModal}
            />
        ))}
        
    {/* <button className='text-white'> 
    <MdOutlineAdd 
    className=' transition delay-700 rounded-full h-10 w-10 bg-blue-600 hover:bg-white 
    flex justify-center items-center cursor-pointer fixed top-96 left-96'
    onClick={()=> setShowModal(true)}
    /></button> */}
    </div>
    <div>
    <NoteForm
    date={date}
    darkMode={darkMode} 
    showModal={showModal}
    setShowModal={setShowModal}
    inputTitle={inputTitle}
    setInputTitle={setInputTitle}
    inputText={inputText}
    setInputText={setInputText} 
    handleAddNote={handleAddNote}
    />    
    </div>
      </div>
  )
}

export default NoteList