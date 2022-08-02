import React from 'react'
import {BiGitRepoForked} from 'react-icons/bi'
import {IoMdStarOutline} from 'react-icons/io'



function MainContentMainRepo({repoName,repoType ,mostLang, star , fork}) {
  return (
    <div className=' w-[98%] h-24 border-[1px] border-gray-700 rounded-lg p-4 flex flex-col justify-between my-2'>
        <div className=' w-full flex justify-between'>
            <h2 className=' text-sm font-semibold text-blue-700 cursor-pointer hover:underline underline-offset-1'>{repoName}</h2>
            <p className=' text-xs font-normal p-0.5 px-1.5 border border-gray-700 rounded-full'>{repoType}</p>
        </div>
        <div className=' flex items-center'>
          <div className=' w-3 h-3 rounded-full bg-pink-600'></div>
          <h2 className='ml-2 text-sm font-normal'>{mostLang}</h2>
          {star !== "" && <span className=' flex items-center'><IoMdStarOutline className=' w-4 h-4 ml-2'/> {star}</span>}
          {fork !== "" && <span className=' flex items-center'><BiGitRepoForked className=' w-4 h-4 ml-2'/> {star}</span>}
        </div>

    </div>
  )
}

export default MainContentMainRepo
