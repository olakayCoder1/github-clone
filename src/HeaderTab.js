import React from 'react'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {TbNotebook ,TbPackage} from 'react-icons/tb'
import {IoMdStarOutline} from 'react-icons/io'
import HeaderTabColumn from './components/header/HeaderTabColumn'


function HeaderTab() {
  return (
    <div className=' sticky top-0 w-full'>
        <div className="text-sm font-medium text-center bg-black text-gray-100 border-b-[1px] border-gray-700  mt-6">
            <ul className=" pl-[27%] flex items-center">
                <HeaderTabColumn title="Overview" Icon={HiOutlineBookOpen} notificattion='' />
                <HeaderTabColumn title="Repositories" Icon={TbNotebook} notificattion='26'/>
                <HeaderTabColumn title="Projects" Icon={HiOutlineBookOpen} notificattion='12'/>
                <HeaderTabColumn title="Packages" Icon={TbPackage} notificattion=''/>
                <HeaderTabColumn title="Stars" Icon={IoMdStarOutline} notificattion='2'/>
            </ul>
        </div>

    </div>
  )
}

export default HeaderTab
