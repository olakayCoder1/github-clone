import React from 'react'

function HeaderTabColumn({title , Icon , notificattion }) {

  return (
    <li className={`${title === 'Overview' ? "border-b-2 " : "" } border-red-400 mr-2  p-2`}>
      <a href="#" className="flex gap-2 items-center p-0.5 px-1 rounded-t-lg  border-transparent  hover:bg-gray-500 hover:rounded ">
        <span><Icon className=" w-5 h-5  cursor-pointer"/></span>
        <span>{title}</span>
        {notificattion !== '' && <span className=' flex items-center text-xs font-medium p-1 px-1 rounded-xl bg-gray-600 w-fit text-white'>{notificattion}</span>}
        
      </a>
    </li>
  )
}

export default HeaderTabColumn
