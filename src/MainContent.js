import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import MainContentAbout from './components/main-content/MainContentAbout'
import MainContentMain from './components/main-content/MainContentMain'
import HeaderTab from './HeaderTab'
import RepositoryContainer from './repository/RepositoryContainer'
import PackagesContainer from './packagesRep/PackagesContainer'
import StarsContainer from './stars/StarsContainer'


function MainContent() {
  return (
    <div className='h-full w-full px-4 sm:px-4 md:px-4 md:w-5xl max-w-6xl mx-auto flex flex-col sm:flex-row sm:gap-4 md:gap-6 lg:gap-10'>
      <MainContentAbout />
      <div className='sticky top-0 w-full sm:hidden z-50'>
          <HeaderTab />
      </div>
      <div className='w-full md:pl-8 lg:px-0'>
        <Routes>
          <Route path='' element={<MainContentMain />} />
          <Route path='/repositories' element={<RepositoryContainer />} />
          <Route path='/packages' element={<PackagesContainer />} />
          <Route path='/stars' element={<StarsContainer />} />
        </Routes>
          
      </div>
    </div>
  )
}

export default MainContent
