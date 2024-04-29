import React, { useState } from 'react'

const Leftsearchbar = () => {
  const [open,Setopen] = useState(false)
  return (

    <div>
        <div className='mt-[30px] flex justify-between'>
            <input type="text" name='user' placeholder='Search' className='text-white bg-[#13213995] w-[70%] px-3 rounded-lg'/>
            <div className='bg-[#13213995] px-2 py-1 rounded-lg cursor-pointer' onClick={()=>Setopen( (prv)=>!prv)}> {open?<img src="minus.png" alt="" className='w-[20px]' />:<img src="plus.png" alt="" className='w-[20px]' />}</div>
        </div>
    </div>

  )
}

export default Leftsearchbar    