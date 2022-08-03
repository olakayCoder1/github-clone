import React from 'react'
import MainContentAbout from './components/main-content/MainContentAbout'
import MainContentMain from './components/main-content/MainContentMain'
import MainContentMainAndroid from './components/main-content/MainContentMainAndroid'


function MainContent() {
  return (
    <div className='h-full w-full px-4 sm:px-3 md:px-2 md:w-5xl max-w-6xl mx-auto flex flex-col sm:flex-row sm:gap-4 md:gap-6 lg:gap-10'>
      <MainContentAbout />
      <div className=' sm:hidden'>
        <MainContentMainAndroid />
      </div>
      <div className='hidden sm:block w-full'>
          <MainContentMain />
      </div>
      
      
      
      
    </div>
  )
}

export default MainContent
