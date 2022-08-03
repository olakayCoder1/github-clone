import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsFillCaretDownFill } from 'react-icons/bs'

function StarsBreakSearch() {
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between items-end sm:flex-start gap-1 sm:gap-2 lg:items-center flex-wrap mt-4'>
      <form className='w-full md:w-fit sm:grow border-[1px] border-gray-700 rounded-md bg-gray-900 sm:bg-black'>   
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <BiSearch className=' w-4 h-4 text-gray-500 cursor-pointer'/>
                </div>
                <input type="search" id="default-search" class="block p-1 pl-10 w-full text-sm text-gray-400 bg-gray-900 sm:bg-black rounded-md  placeholder-gray-400 outline-none" placeholder="Search stars" required />
            </div>
      </form>
      <div className='flex gap-1 sm:gap-2 items-center flex-wrap md:flex-nowrap '>
        <p  class="w-fit flex items-center py-1 px-4  text-sm font-semibold text-gray-300  bg-gray-800 rounded-md border border-gray-700 hover:border-gray-500 hover:bg-gray-700 cursor-pointer ">
            <span>
                Type: All
            </span>
            <BsFillCaretDownFill className=' ml-1.5 w-2 h-2' />
        </p>
        <p  class="w-fit flex items-center py-1 px-4  text-sm font-semibold text-gray-300  bg-gray-800 rounded-md border border-gray-700 hover:border-gray-500 hover:bg-gray-700 cursor-pointer ">
            <span>
                Language
            </span>
            <BsFillCaretDownFill className=' ml-1.5 w-2 h-2' />
        </p>
        <p  class="w-fit flex items-center py-1 px-4  text-sm font-semibold text-gray-300  bg-gray-800 rounded-md border border-gray-700 hover:border-gray-500 hover:bg-gray-700 cursor-pointer ">
            <span>
                Sorted by: Recently starred
            </span>
            <BsFillCaretDownFill className=' ml-1.5 w-2 h-2' />
        </p>
      </div>
    </div>
  )
}

export default StarsBreakSearch
