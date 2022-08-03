import React from 'react'
import {BsGithub,BsArrowUpSquare ,BsFillCaretDownFill} from 'react-icons/bs'
import {VscBellDot} from 'react-icons/vsc'
import {AiOutlinePlus} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

function HeaderLogoSearch() {

  return (
    <div className=' w-full h-full flex justify-between px-4 md:px-8 items-center'>
        <p className=' md:hidden'><GiHamburgerMenu className='w-6 h-6 text-white hover:text-gray-500 cursor-pointer'/></p>
        <div className=' flex gap-3'>
            <BsGithub className=' w-8 h-8 text-white hover:text-gray-500 cursor-pointer'/>
            <form className='hidden md:inline-block border-[1px] border-gray-700 rounded-md bg-black'>   
                <div class="relative">
                    <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                        <BsArrowUpSquare className=' w-4 h-4 text-gray-500 cursor-pointer'/>
                    </div>
                    <input type="search" id="default-search" class="block p-1 pl-3 min-w-[300px] text-sm text-gray-400 bg-black rounded-md  placeholder-gray-400 outline-none" placeholder="Search or jump..." required />
                </div>
            </form>
            <ul className='hidden md:flex gap-3 items-center text-white text-sm font-semibold'>
                <li>
                     Pull<span className=' lg:hidden'>s</span> <span className=' hidden lg:inline-block'>requests</span>
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
                <VscBellDot className=' text-lg hover:text-gray-500 cursor-pointer'/>
            </p>
            <p className='hidden md:flex items-center hover:text-gray-500 cursor-pointer'>
                <AiOutlinePlus />
                <BsFillCaretDownFill className=' ml-0.5 text-xs'/>
            </p>
            <p className='hidden md:flex items-center hover:text-gray-500 cursor-pointer'>
                <img className='w-5 h-5 rounded-full'
                            src='https://avatars.githubusercontent.com/u/95700260?v=4' />
                <BsFillCaretDownFill className=' ml-0.5 text-xs' />
            </p>
        </div>
    </div>
  )
}

export default HeaderLogoSearch
