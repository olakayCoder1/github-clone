import React from 'react'
import MainContentMainRepo from './MainContentMainRepo'

function MainContentMain() {
  return (
    <div className=' w-full h-full'>
        <div className=' w-full text-gray-50 py-8'>
            <h2 className=' text-base font-normal py-3'>Popular repository</h2>
            <div className=' grid grid-cols-2'>
                <MainContentMainRepo repoName="Altshool-dev" repoType="public" mostLang='Javascript' star='1' fork='1'/>
                <div className=' w-[98%] h-32 border-[1px] border-gray-700 rounded-lg'>

                </div>
                <div className=' w-[98%] h-32 bg-red-300'></div>
            </div>

        </div>
      
    </div>
  )
}

export default MainContentMain
