import React from 'react'
import {BsGithub,BsArrowUpSquare ,BsFillCaretDownFill} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {VscBellDot} from 'react-icons/vsc'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

function HeaderLogoSearch() {

  return (
    <div className=' w-full h-full flex justify-between px-8 items-center'>
        <div className=' flex gap-3'>
            <BsGithub className=' w-8 h-8 text-white'/>
            <form className='border-[1px] border-gray-50 rounded-md bg-black'>   
                <div class="relative">
                    <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                        <BsArrowUpSquare className=' w-4 h-4 text-gray-50 cursor-pointer'/>
                    </div>
                    <input type="search" id="default-search" class="block p-1 pl-3 min-w-[300px] text-sm text-gray-900 bg-black rounded-md  placeholder-gray-400 outline-none" placeholder="Search or jump..." required />
                </div>
            </form>
            <ul className=' flex gap-3 items-center text-white text-sm font-semibold'>
                <li>
                    Pull requests
                </li>
                <li>
                    Issues
                </li>
                <li>
                    Marketplace
                </li>
                <li>
                    Explore
                </li>
            </ul>
        </div>

        <div className=' flex gap-3 text-white'>
            <p >
                <VscBellDot className=' text-lg'/>
            </p>
            <p className=' flex items-center cursor-pointer'>
                <AiOutlinePlus />
                <BsFillCaretDownFill className=' ml-0.5 text-xs'/>
            </p>
            <p className=' flex items-center cursor-pointer'>
                <BsGithub className=' w-5 h-5 '/>
                <BsFillCaretDownFill className=' ml-0.5 text-xs' />
            </p>
        </div>
    </div>
  )
}

export default HeaderLogoSearch
