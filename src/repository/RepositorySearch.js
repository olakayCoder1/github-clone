import React from 'react'
import {BsArrowUpSquare,BsFillCaretDownFill } from 'react-icons/bs'
import {TbBookUpload} from 'react-icons/tb'


function RepositorySearch() {
  return (
    <div className='py-4 w-full flex flex-col-reverse sm:flex-row sm:items-start lg:items-center md:gap-12 lg:gap-2 border-b-[1px] border-gray-700'>
        <div className='w-full grow flex flex-col lg:flex-row lg:items-center gap-2'>
            <form className='grow border-[1px] border-gray-700 rounded-md bg-black'>   
                <div>
                    <input type="search" id="default-search" class="block p-1 pl-3 min-w-[300px] text-sm text-gray-400 bg-black rounded-md  placeholder-gray-400 outline-none" placeholder="Find a repository..." required />
                </div>
            </form>
            <div className=' flex gap-1'>
                <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                    <span>
                        Type
                    </span>
                    <BsFillCaretDownFill className=' ml-0.5 text-xs' />
                </p>
                <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                    <span>
                        Language
                    </span>
                    <BsFillCaretDownFill className=' ml-0.5 text-xs' />
                </p>
                <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                    <span>
                        Sort
                    </span>
                    <BsFillCaretDownFill className=' ml-0.5 text-xs' />
                </p>
            </div>
        </div>
        <p className='hidden sm:flex w-fit  mb-4 md:mb-0   px-auto py-1.5 px-4  text-xs font-semibold text-gray-300  bg-green-800 rounded-lg cursor-pointer '>
            <p>
                <TbBookUpload className=' w-4 h-4' />
            </p>
            
            <span className='ml-1'>New</span>
        </p>
        <p className='w-full mb-4 md:mb-0 sm:hidden px-auto py-1.5 px-4  text-xs font-semibold text-gray-300  bg-green-800 rounded-lg cursor-pointer '>
            <div className='mx-auto  w-fit  flex items-center '>
            <TbBookUpload className=' w-4 h-4' />
            <span className='ml-1'>New</span>
            </div>
        </p>
      
    </div>
  )
}

export default RepositorySearch
