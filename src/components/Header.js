import React from 'react'
import {MdDarkMode,MdOutlineLightMode} from 'react-icons/md'
function Header({darkMode,handleToggleDarkMode}) {
  return (
    <div className='flex items-center pb-3 justify-between'>
        <h1 className='text-2xl'>Notepad</h1>
        {darkMode? (
          <MdOutlineLightMode className='hover:scale-125 cursor-pointer  duration-300 ' 
          onClick={()=> handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)}
          />
        ):(
          <MdDarkMode className='hover:scale-125  duration-300 cursor-pointer ease-in-out' 
        onClick={()=> handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)}
        />
        )}
        
    </div>
  )
}

export default Header