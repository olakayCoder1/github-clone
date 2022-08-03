import React from 'react'
import {BsArrowsCollapse} from 'react-icons/bs'
import {TbBookUpload} from 'react-icons/tb'

function ContributionActivityBreak() {
  return (
    <li class="mb-10 ml-6 pt-2">            
        <span class="flex absolute -left-4 justify-center items-center bg-gray-800  sm:bg-gray-500 rounded-full p-2 ">
            <TbBookUpload className='w-4 h-4 text-gray-300' />
        </span>
        <div className='flex justify-between py-2 hover:text-blue-400 cursor-pointer'>
        <h3 class="flex items-center mb-1 text-base font-medium ">Created 6 commits in 3 repositories</h3>
        <span class=" text-blue"><BsArrowsCollapse className=' ' /></span>
        </div>
        <div  className='w-full flex justify-between text-gray-300 gap-6 '>

        <div className='grow'>

            <ul className='w-full'>
            
            <li className='w-full flex justify-between items-center text-sm font-normal'>
                <div className='flex flex-col md:flex-row'>
                    <a href='#' className=' text-blue-400 hover:underline hover:underline-offset-1'>
                        olakayCoder1/github-clone
                    </a>
                    <a href='#' className=' md:ml-2 text-xs font-normal text-gray-500 hover:text-blue-400'>
                        4 commits
                    </a>
                </div>
                <div class="w-40 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" style={{'width' : "85%"}}></div>
                </div>
            </li>
            <li className='w-full flex justify-between items-center text-sm font-normal'>
                <div className='flex flex-col md:flex-row'>
                    <a href='#' className=' text-blue-400 hover:underline hover:underline-offset-1'>
                        olakayCoder1/github-clone
                    </a>
                    <a href='#' className=' md:ml-2 text-xs font-normal text-gray-500 hover:text-blue-400'>
                        4 commits
                    </a>
                </div>
                <div class="w-40 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" style={{'width' : "35%"}}></div>
                </div>
            </li>
            <li className='w-full flex justify-between items-center text-sm font-normal'>
                <div className='flex flex-col md:flex-row'>
                    <a href='#' className=' text-blue-400 hover:underline hover:underline-offset-1'>
                        olakayCoder1/github-clone
                    </a>
                    <a href='#' className=' md:ml-2 text-xs font-normal text-gray-500 hover:text-blue-400'>
                        4 commits
                    </a>
                </div>
                <div class="w-40 rounded-full h-2">
                    <div class="bg-green-400 h-2 rounded-full" style={{'width' : "55%"}}></div>
                </div>
            </li>
            
        </ul>

        </div>
        </div> 
    </li>
  )
}

export default ContributionActivityBreak
