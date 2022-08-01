import React from 'react'
import {FaRegSmile} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {BsDot,BsTwitter} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineLocationOn} from 'react-icons/md'

function MainContentAbout() {
  return (
    <div className=''>
        <div className=' relative'>
            <div className='w-72 h-72 rounded-full'>
                <div className=' relative w-72 h-72 rounded-full'>
                    <img className=' w-72 h-72 rounded-full'
                        src='https://avatars.githubusercontent.com/u/95700260?v=4' />
                    <p className=' absolute w-fit right-0 bottom-16 p-2 rounded-full bg-black text-gray-50'>
                        <FaRegSmile />
                    </p>
                </div>
        </div>
        </div>
        
        <div className=' w-full'>
            <div className=' w-full py-5 flex flex-col gap-2'>
                <div>
                    <h1 className=' text-2xl font-bold text-gray-100'>Olanrewaju Kabiru</h1>
                    <h3 className='text-xl font-semilight text-gray-500'>olakayCoder1</h3>
                </div>
                <h3 className=' text-base font-normal text-gray-100'>Python(Django) backend developer</h3>
                <button type="button" class="py-1.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-50 focus:outline-none bg-gray-600 rounded-lg border border-gray-600 hover:bg-gray-500 hover:text-gray-50 hover:border-gray-50 focus:z-10 focus:ring-4 focus:ring-gray-200  ">Edit profile</button>

                <div className=' w-full text-gray-500 text-sm font-normal'>
                    <p className=' w-full flex items-center '>
                        <TbUsers className=' w-4 h-4 text-gray-500'/>
                        <span className=' text-gray-50 px-1'>6</span>
                        followers
                        <BsDot className=' text-gray-50 px-1' />
                        <span className=' text-gray-50 px-1'>8</span>
                        following
                    </p>
                </div>
                <div className=' w-full'>
                    <ul className=' w-full flex flex-col gap-1'>
                        <li className=' flex text-sm font-normal text-gray-500'>
                            <MdOutlineLocationOn className=' w-4 h-4 text-gray-500'/> <span className='ml-2 text-gray-100'>Lagos, Nigeria</span>
                        </li>
                        <li className=' flex text-sm font-normal text-gray-500'>
                            <HiOutlineMail className=' w-4 h-4 text-gray-500'/> <span className='ml-2 text-gray-100'>programmerolakay@gmail.com</span>
                        </li>
                        <li className=' flex text-sm font-normal text-gray-500'>
                            <BsTwitter className='w-4 h-4 text-gray-500'/> <span className='ml-2 text-gray-100'>Lagos, Nigeria</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
      
    </div>
  )
}

export default MainContentAbout
