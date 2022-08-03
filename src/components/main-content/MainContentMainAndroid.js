import React from 'react'
import ContributionActivity from './ContributionActivity'
import MainContentMainRepo from './MainContentMainRepo'
import HeaderTab from '../../HeaderTab'


function MainContentMainAndroid() {
  return (
    <div className=' w-full h-full'>
       <div className='w-full sticky top-0 z-50'>
         <HeaderTab />
       </div>
        <div className=' w-full text-gray-400 py-3 px-2'>
          <div className=' flex justify-between pt-3 '>
          <h2 className=' text-base font-normal '>Popular repository</h2>
          <p className=' text-xs font-normal text-gray-400  cursor-pointer hover:text-blue-600' >Customize your pins</p>
          </div>
            <div className=' grid sm:grid-cols-2'>
                <MainContentMainRepo repoName="Altshool-dev" repoType="Public" mostLang='Javascript' star='1' fork='1'/>
                <MainContentMainRepo repoName="Altshool-dev" repoType="Private" mostLang='Javascript' star='1' fork='1'/>
                <MainContentMainRepo repoName="Youtube-clone" repoType="Public" mostLang='Javascript' star='1' fork=''/>
                <MainContentMainRepo repoName="Altshool-dev" repoType="Privatex" mostLang='Javascript' star='1' fork='1'/>
                <MainContentMainRepo repoName="Altshool-dev" repoType="Privatex" mostLang='Javascript' star='1' fork='1'/>
                <MainContentMainRepo repoName="Altshool-dev" repoType="Privatex" mostLang='Javascript' star='1' fork='1'/>
                
            </div>
            <ContributionActivity />
           
        </div>
      
    </div>
  )
}

export default MainContentMainAndroid
