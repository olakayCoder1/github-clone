import React from 'react'
import {BiGitRepoForked} from 'react-icons/bi'
import {IoMdStarOutline} from 'react-icons/io'
import {BsArrowUpSquare,BsFillCaretDownFill } from 'react-icons/bs'

function RepositoryContent() {
  return (
    <div className='text-gray-500 flex justify-between py-10 border-b-[1px] border-gray-800'>
        <div className='flex flex-col gap-4'>
            < div className=' w-full flex items-center'>
                <h2 className=' text-lg font-bold text-blue-400 cursor-pointer hover:underline underline-offset-1'>github-clone</h2>
                <p className='ml-2 text-gray-500 text-xs font-medium p-0.5 px-1.5 border border-gray-800 rounded-full'>Public</p>
            </div>
            <div className='text-gray-500 flex items-center'>
                <div className=' text-xs font-medium flex items-center'>
                <p className=' w-3 h-3 rounded-full bg-yellow-600'></p>
                <span className='ml-1'>Javascript</span>
                </div>
                <span className='ml-2 flex items-center  text-xs'>Updated 2 hours ago</span>
            </div>
        </div>

        <div className=' flex flex-col gap-4 items-end'>
            <div className='w-fit flex items-center   text-xs font-semibold text-gray-300  bg-gray-800 rounded-md border border-gray-700 cursor-pointer '>
                <div className=' flex py-1.5 px-2'>
                    <span className='ml-2'> <IoMdStarOutline className=' ml-0.5 text-xs' /></span>
                    <span>
                        Star
                    </span >
                </div>
                <p className='border-l-[1px] border-gray-700 py-1.5  px-2'>
                <BsFillCaretDownFill className=' ml-0.5 text-xs'/>
                </p>
            </div>
            <div className='hidden lg:inline-block w-32 h-[1px] bg-green-800'>

            </div>
        </div>
    </div>
  )
}

export default RepositoryContent
