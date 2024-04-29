import React from 'react'




const Lefttop = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div><img src="avatar.png" alt="" className='w-[50px] h-[50px] rounded-[50%]'/></div>
          <div><h5 className='font-bold text-white text-[22px]'>Saikat Lodh</h5></div>
        </div>
        <div>
          <div className='flex gap-4'>
            <div className='w-[30px] cursor-pointer'><img src="more.png" alt="" /></div>
            <div  className='w-[30px] cursor-pointer'><img src="video.png" alt="" /></div>
            <div  className='w-[30px] cursor-pointer'><img src="edit.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lefttop