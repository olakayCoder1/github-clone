import React from 'react'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {TbNotebook ,TbPackage} from 'react-icons/tb'
import {IoMdStarOutline} from 'react-icons/io'
import HeaderTabColumn from './components/header/HeaderTabColumn'
import {FaEllipsisH } from 'react-icons/fa'
import { Link , useNavigate} from 'react-router-dom'


function HeaderTab() {
  const navigate = useNavigate()
  return (
    <div className=' sticky top-0 w-full z-50'>
        <div className="sm:flex sm:justify-between sm:pr-4 text-xs md:text-sm font-medium text-center bg-gray-900 sm:bg-[#090909] text-gray-100 border-b-[1px] border-gray-700">
            <ul className="w-full sm:pl-[24%] md:pl-[25%] lg:pl-[30%] flex items-center overflow-x-scroll">
                <div onClick={()=> navigate('/')}>
                <HeaderTabColumn pathLink='/' title="Overview" Icon={HiOutlineBookOpen} notificattion='' />
                </div>
                <div onClick={()=> navigate('/repositories')}>
                <HeaderTabColumn pathLink='/repositories' title="Repositories" Icon={TbNotebook} notificattion='26'/>
                </div>
                <div onClick={()=> navigate('/')}>
                <HeaderTabColumn pathLink='/projects' title="Projects" Icon={HiOutlineBookOpen} notificattion='12'/>
                </div>
              <div onClick={()=> navigate('/packages')} className='sm:hidden md:block'>
                  <HeaderTabColumn pathLink='/packages' title="Packages" Icon={TbPackage} notificattion=''/>
                </div>
                <div onClick={()=> navigate('/')} className='sm:hidden lg:block'>
                <HeaderTabColumn pathLink='/stars' title="Stars" Icon={IoMdStarOutline} notificattion='2'/>
                </div>
                
            </ul>
            <div className='hidden sm:block lg:hidden cursor-pointer'>
                <FaEllipsisH className=''/>
            </div>
        </div>

    </div>
  )
}

export default HeaderTab
