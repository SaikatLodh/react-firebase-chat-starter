import React from 'react'
import Centertop from '../pages/Centertop'
import Centerbottom from '../pages/Centerbottom'
import Centercenter from '../pages/Centercenter'




const Center = () => {
  return (
    <div className='w-[40%] px-5 py-5 border-r-[1px] border-[#ffffff91] overflow-y-auto flex flex-col justify-between'>
      <Centertop />
      <Centercenter/>
      <Centerbottom />
    </div>
  )
}

export default Center