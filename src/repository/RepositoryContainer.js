import React from 'react'
import MainContentAbout from '../components/main-content/MainContentAbout'
import MainContentMainAndroid from '../components/main-content/MainContentMainAndroid'
import HeaderTab from '../HeaderTab'
import RepositorySearch from './RepositorySearch'
import RepositoryContent from './RepositoryContent'

function RepositoryContainer() {
  return (
    
    <div className='w-full'>
        <RepositorySearch />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
        <RepositoryContent />
    </div>
   
  )
}

export default RepositoryContainer
