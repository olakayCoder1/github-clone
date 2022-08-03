import React from 'react'
import {BsGithub,BsAt} from 'react-icons/bs'


function Footer() {
  return (
    <div className='p-4 py-6 max-w-6xl mx-auto border-t-[1px] border-gray-700 h-36 sm:h-32 flex flex-col md:flex-row items-center text-xs font-normal text-gray-500 md:gap-8 lg:pr-32'>
        <div className='hidden mt-2 md:flex items-center'>
            <BsGithub className=' w-5 h-5 '/>
            <p className='ml-2 flex items-center'>
                <span><BsAt /></span>
                <span className='ml-1'>2020 Github, Inc</span>
            </p>
        </div>
        <ol className='hidden items-center place-items-center sm:grow md:flex flex-wrap gap-2 sm:justify-between text-blue-400'>
            <li  className=' hover:underline underline-offset-1 cursor-pointer'>Terms</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Privacy</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Security</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Status</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Docs</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Contact Github</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Pricing</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>API</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Training</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Blog</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>About</li>
        </ol>


        <div className='mt-2 order-2 sm:order-1 flex items-center md:hidden'>
            <BsGithub className=' w-5 h-5 '/>
            <p className='ml-2 flex items-center'>
                <span><BsAt /></span>
                <span className='ml-1'>2020 Github, Inc</span>
            </p>
        </div>
        <ol className='items-center place-items-center sm:grow flex flex-wrap gap-2 sm:justify-between text-blue-400  md:hidden'>
            <li  className=' hover:underline underline-offset-1 cursor-pointer'>Terms</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Privacy</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Security</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Status</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Docs</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Contact Github</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Pricing</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>API</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Training</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>Blog</li>
            <li className=' hover:underline underline-offset-1 cursor-pointer'>About</li>
        </ol>
      
    </div>
  )
}

export default Footer
