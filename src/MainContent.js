import React from 'react'
import MainContentAbout from './components/main-content/MainContentAbout'
import MainContentMain from './components/main-content/MainContentMain'

function MainContent() {
  return (
    <div className='h-full w-full max-w-7xl mx-auto flex gap-10'>
      <MainContentAbout />
      <MainContentMain />
    </div>
  )
}

export default MainContent
