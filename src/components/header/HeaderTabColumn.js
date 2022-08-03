import React from 'react'

function HeaderTabColumn({title , Icon , notificattion , pathLink }) {

  return (
    <li className={`${window.location.pathname === pathLink ? "border-b-2 " : "" } cursor-pointer border-red-400 mr-1 md:mr-2  p-2`}>
      <p className="flex gap-2 items-center p-0.5 px-1 rounded-t-lg  border-transparent  hover:bg-gray-700 hover:rounded ">
        <span className=' hidden sm:inline-block'><Icon className=" w-5 h-5  cursor-pointer"/></span>
        <span>{title}</span>
        {notificattion !== '' && <span className=' flex items-center text-xs font-medium p-1 px-1.5 rounded-xl bg-gray-600 w-fit text-white'>{notificattion}</span>}
        
      </p>
    </li>
  )
}

export default HeaderTabColumn
