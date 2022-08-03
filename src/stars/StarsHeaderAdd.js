import React from 'react'
import {BsFillCaretDownFill } from 'react-icons/bs'
import {IoMdStarOutline} from 'react-icons/io'

function StarsHeaderAdd() {
  return (
    <div className=' w-full box-border'>
      <div className=' w-full flex justify-between items-center' >
        <h2 className=' text-xl font-light text-gray-200'>Lists <span className=' text-gray-500 ml-1'>(0)</span></h2>
        <div className=' flex gap-2 items-center'>
            <p  class="w-fit flex items-center py-1 px-4  text-sm font-semibold text-gray-300  bg-gray-800 rounded-md border border-gray-700 hover:border-gray-500 hover:bg-gray-700 cursor-pointer ">
                <span>
                    Sort
                </span>
                <BsFillCaretDownFill className=' ml-0.5 text-xs' />
            </p>
            <p  class="w-fit flex items-center py-1 px-4  text-sm font-semibold text-gray-200  bg-green-800 rounded-md border border-green-700  hover:bg-green-700 cursor-pointer ">
                <span>
                    Create list
                </span>
            </p>
            
        </div>
      </div>

      <div className='box-border p-3 w-full h-64 flex flex-col place-content-center gap-4 border-[1px] border-gray-800 rounded-sm text-center mt-6'>
        <p className=' w-fit mx-auto'><IoMdStarOutline className=' w-8 h-8'/></p>
        <h3 className=' text-xl font-bold text-gray-300'>Create your first list</h3>
        <p className='text-sm font-normal text-gray-300'>Lists make it easier to organize and curate repositories that you have starred. <span className=' text-blue-400 cursor-pointer hover:underline hover:underline-offset-1'>Create your first list.</span></p>
      </div>

      <div className=' w-full py-4'>
        <p className=' text-xs font-normal'>
            <span className='mr-2 p-0.5 px-2 text-[12x] font-light text-green-600 border-[1px] border-green-600 rounded-xl'>Beta</span>
            Lists are currently in beta.
            <span className='ml-2 text-blue-400 hover:underline hover:underline-offset-1 cursor-pointer'>Share feedback and report bugs.</span>
        </p>

      </div>
    </div>
  )
}

export default StarsHeaderAdd
