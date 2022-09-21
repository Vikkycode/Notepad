import React,{useState} from 'react'
import {BiSearch} from 'react-icons/bi'
const Search =({handleSearchInput,darkmode})=>{
  // const [search,setSearch]=useState("")
  
  return (
    
    <div className='flex transition delay-500 duration-75 items-center justify-center'>
        <form>
            <div className='flex items-center'>
            <BiSearch className={` absolute ml-3  text-neutral-400 text-xl`}/>
            <input 
            type="text" 
            // value={search}
            className={`border-0 transition delay-500 duration-500 ease-in-out outline-none pl-10 ${darkmode ? "bg-neutral-200": "bg-neutral-800"}  rounded-2xl py-1`}
            placeholder='Search note'
            onChange={e => handleSearchInput(e.target.value)} 
             />
            </div>
        </form>
    </div>
  )
}

export default Search;