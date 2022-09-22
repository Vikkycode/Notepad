import React,{useRef} from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'
const NoteForm = ({
  date,
  darkMode,
  showModal,
  inputText,
  inputTitle,
  setShowModal,
  setInputText,
  setInputTitle,
  handleAddNote,
}) => {
  const inputRef = useRef()  

  const closeModal =()=>{
    setShowModal(false)
  }
  
  return (
     showModal && 
    <div  
     className={`w-full  ${darkMode ? "bg-white": "bg-black"} pt-10 h-screen top-0 left-0 fixed`}
     ref={inputRef}>
        <div className='mx-4 flex items-center justify-between text-xl'>
          <FaArrowLeft 
          onClick={closeModal}
          className=" text-blue-600 cursor-pointer"
          />
          <h1>Note</h1>          
          <button type='submit'>
          <IoMdCheckmark 
          className='text-blue-600 cursor-pointer text-3xl'
           onClick={handleAddNote}/>
          </button>
        </div>
       <div className=' flex justify-center items-start '>
      <form>
        <p className='my-5'>{date}</p>
        <div className='flex flex-col  w-72'>
        <input
        type="text"
        value={inputTitle}
        // name="title"
        onChange={(e)=>  setInputTitle(e.target.value)}
        placeholder="Title"
        className={`p-2  outline-none border-none
         rounded-xl ${darkMode ? "bg-neutral-200":"bg-zinc-900"} placeholder:pl-2 text-xl`}
        />
        <textarea 
        type="text"
        rows="13"
        value={inputText}
        onChange={(e)=> setInputText(e.target.value)}
        placeholder='Note something down'
        className={`mt-5 p-2 outline-none ${darkMode ? "bg-neutral-200":"bg-zinc-900"} rounded-xl 
        resize-none placeholder:pl-2`}
        ></textarea>
        </div>
      </form>
       </div>
    </div>
  )
}

export default NoteForm