import React from 'react'
import {IoMdStarOutline} from 'react-icons/io'
import {BsFillCaretDownFill,BsStarFill } from 'react-icons/bs'
import {BiGitRepoForked} from 'react-icons/bi'

function StarsBreakRepo() {
  return (
    <div className='text-gray-500 flex flex-col gap-4 justify-between py-10 border-b-[1px] border-gray-800'>
        <div className=' flex justify-between items-start'>
            <div className='flex flex-col gap-2'>
                < div className=' w-full flex items-center'>
                    <h2 className=' text-xl font-bold text-blue-400 cursor-pointer hover:underline underline-offset-1'>Ahmzyjazzy / flutter-flavor-sample</h2>
                </div>
                <div className='text-gray-500 flex items-center'>
                    <div className=' text-xs font-medium flex items-center'>
                    <span className='ml-1'>Flavors are typically used to build your app for different environments such as dev and prod.</span>
                    </div>
                </div>
            </div>
            <div className=' flex'>
                <div className='w-fit flex items-center   text-xs font-medium text-gray-300  bg-gray-800 rounded-md border border-gray-700 cursor-pointer '>
                    <div className=' flex py-1.5 px-2'>
                        <span className='ml-2'> <BsStarFill className=' ml-0.5 w-4 h-4 text-yellow-300' /></span>
                        <span className=' ml-2'>
                            Starred
                        </span >
                    </div>
                    <p className='border-l-[1px] border-gray-700 py-1.5  px-2'>
                    <BsFillCaretDownFill className=' ml-0.5 w-2 h-2'/>
                    </p>
                </div>
            </div>
        </div>
        <div className='text-gray-500 flex items-center'>
          <div className=' w-3 h-3 rounded-full bg-pink-600'></div>
          <h2 className='ml-2 text-sm font-normal'>C++</h2>
           <span className=' flex items-center'><IoMdStarOutline className=' w-4 h-4 ml-2'/> <span className=' text-xs'>670</span></span>
          <span className=' flex items-center'><BiGitRepoForked className=' w-4 h-4 ml-2'/> <span className=' text-xs'>109</span></span>
          <span className='ml-2 flex items-center  text-xs'>Updated 2 hours ago</span>
        </div>
    </div>
  )
}

export default StarsBreakRepo
