import React from 'react'
import {BiGitRepoForked} from 'react-icons/bi'
import {IoMdStarOutline} from 'react-icons/io'



function MainContentMainRepo({repoName,repoType ,mostLang, star , fork}) {
  return (
    <div className='w-full sm:w-[98%] h-24 border-[1px] border-gray-800 rounded-lg p-4 flex flex-col justify-between my-2'>
        <div className=' w-full flex justify-between'>
            <h2 className=' text-sm font-semibold text-blue-400 cursor-pointer hover:underline underline-offset-1'>{repoName}</h2>
            <p className='text-gray-500 text-xs font-medium p-0.5 px-1.5 border border-gray-800 rounded-full'>{repoType}</p>
        </div>
        <div className='text-gray-500 flex items-center'>
          <div className=' w-3 h-3 rounded-full bg-pink-600'></div>
          <h2 className='ml-2 text-sm font-normal'>{mostLang}</h2>
          {star !== "" && <span className=' flex items-center'><IoMdStarOutline className=' w-4 h-4 ml-2'/> <span className=' text-xs'>{star}</span></span>}
          {fork !== "" && <span className=' flex items-center'><BiGitRepoForked className=' w-4 h-4 ml-2'/> <span className=' text-xs'>{star}</span></span>}
        </div>

    </div>
  )
}

export default MainContentMainRepo
