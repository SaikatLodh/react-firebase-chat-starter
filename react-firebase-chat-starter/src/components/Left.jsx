import React from 'react'
import Lefttop from '../pages/Lefttop'
import Leftsearchbar from '../pages/Leftsearchbar.jsx'
import Leftshowuser from '../pages/Leftshowuser.jsx'



const Left = () => {
  return (
    <div className='w-[30%] px-5 py-5 border-r-[1px] border-[#ffffff91] overflow-y-auto'>
      <Lefttop />
      <Leftsearchbar/>
      <Leftshowuser/>
    </div>
  )
}

export default Left