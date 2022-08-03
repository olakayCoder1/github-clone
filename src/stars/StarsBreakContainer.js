import React from 'react'
import StarsBreakRepo from './StarsBreakRepo'
import StarsBreakSearch from './StarsBreakSearch'

function StarsBreakContainer() {
  return (
    <div className=' w-full'>
        <h2 className='text-xl font-light text-gray-200'>Stars</h2>
        <StarsBreakSearch />
        <StarsBreakRepo />
        <StarsBreakRepo />
      
    </div>
  )
}

export default StarsBreakContainer
