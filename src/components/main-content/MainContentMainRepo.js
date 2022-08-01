import React from 'react'
import {BiGitRepoForked} from 'react-icons/bi'




function MainContentMainRepo({repoName,repoType ,mostLang, star , fork}) {
  return (
    <div className=' w-[98%] h-28 border-[1px] border-gray-700 rounded-lg p-3'>
        <div className=' w-full flex justify-between'>
            <h2 className=' text-sm font-semibold text-blue-700 cursor-pointer underline underline-offset-1'>{repoName}</h2>
            <p>{repoType}</p>
        </div>

    </div>
  )
}

export default MainContentMainRepo
