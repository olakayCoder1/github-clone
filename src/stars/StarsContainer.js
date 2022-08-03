import React from 'react'
import StarsBreakContainer from './StarsBreakContainer'
import StarsHeaderAdd from './StarsHeaderAdd'

function StarsContainer() {
  return (
    <div className='w-full h-full text-gray-500 py-6 px-2 md:px-2 lg:px-0'>
        <StarsHeaderAdd />
        <StarsBreakContainer />
      
    </div>
  )
}

export default StarsContainer
