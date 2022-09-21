import React from 'react'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import EditForm from './EditForm';

const Note = ({
  id,
  date,
  title,
  content,
  darkMode,
  editNote,
  editNoteId,
  setEditNote,
  editTextArea,
  setEditNoteId,
  editShowModal,
  handleEditNote,
  setEditTextArea,
  handleDeleteNote,
  setEditShowModal,
  handleEditInputSubmit,
}) => {


  const truncateNote=(str,num)=>{
   return str.length > num ? str.substring(0,num-1) + "...":str;
  } 
  return (
    <div className='flex mt-2 justify-between'>
      {id === editNoteId ? (<EditForm
      date={date}
       darkMode={darkMode} 
       editNote={editNote}
       setEditNote={setEditNote}
       editTextArea={editTextArea}
       editShowModal={editShowModal}
       setEditNoteId={setEditNoteId}
       setEditShowModal={setEditShowModal}
       setEditTextArea={setEditTextArea}
       handleEditInputSubmit={handleEditInputSubmit}
       />):(
        <div  className={`h-50 m-2 w-64 rounded-xl px-3 py-3 
        transition delay-500 
         ${darkMode ? "bg-neutral-200":"bg-zinc-900"} sm:w-72 flex flex-col`}>
        <div className='flex  justify-between'>
          <h1 className='font-medium text-xl'>{truncateNote(title,15)}</h1>
          <div className='text-xl flex items-center'>
            <button>
              <AiOutlineDelete className='hover:scale-125 cursor-pointer  duration-300 ' 
              onClick={() => handleDeleteNote(id)}
              />
            </button>
            <button>
              <AiOutlineEdit className='mx-2 hover:scale-125 cursor-pointer  duration-300 ' 
              onClick={()=> handleEditNote(id)}/>
            </button>
          </div>
        </div>
          <p className='text-sm w-70'>{truncateNote(content,30)}</p>
          <p className='pt-3 text-sm text-neutral-400'>{date}</p>
      </div>
       )}
    </div>
  )
}

export default Note