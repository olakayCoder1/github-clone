import React from 'react'
import ContributionActivityBreak from './ContributionActivityBreak'

import {BsArrowsCollapse} from 'react-icons/bs'
import {TbBookUpload} from 'react-icons/tb'




function ContributionActivity() {
  return (
    <>
        <div className='w-full flex justify-between pt-3 text-gray-400'>
            <h2 className='grow text-base font-normal '>Contribution activity</h2>
            <p className='hidden sm:block min-w-[100px] p-2 px-3 rounded-lg text-xs font-normal bg-blue-600 text-gray-300  cursor-pointer ' >2022</p>
        </div>
        <div className='flex justify-between gap-4 py-5'>
            <div className='relative  grow border-t border-gray-600 '>
                <p className='bg-gray-900 sm:bg-[#090909] absolute -top-4 -left-2 min-w-[100px] py-2 rounded-lg text-xs font-normal  text-gray-100  cursor-pointer ' >August <span className=" text-gray-500">2022</span></p>

                    <ol class=" sm:md-3 md:mx-4 pt-6  relative border-l border-gray-600">  
                        <ContributionActivityBreak />
                        <ContributionActivityBreak />
                        <ContributionActivityBreak />
                    </ol>
                <div className=' w-full border-[1px] border-gray-600 p-2 rounded-lg flex items-center hover:bg-gray-900 cursor-pointer'>
                    <p className=' text-sm font-normal  text-blue-400 mx-auto'>show more activity</p>
                </div>
                    <p className=' text-xs font-normal text-gray-500 my-6'>Seeing something unexpected take a look at the <a href='#' className=' text-blue-400 hover:underline hover:underline-offset-1'>Github profile guide</a></p>
            </div>
            <div className='hidden lg:block h-full w-[100px]'>
                <p className='min-w-[100px]  px-3 rounded-lg text-xs font-normal  text-gray-500  cursor-pointer ' >2021</p>
            </div>  
        </div>
            
    </>
  )
}

export default ContributionActivity
