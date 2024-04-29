import React from 'react'

const Centertop = () => {
    return (

        <div>
            <div>
                <div className='flex justify-between border-b border-[#ffffff91] pb-[20px]'>
                    <div className='flex gap-2 items-center'>
                        <div><img src="avatar.png" alt="" className='w-[50px] h-[50px] rounded-[50%]' /></div>
                        <div>
                            <div><h5 className='font-bold text-white text-[22px]'>Saikat Lodh</h5></div>
                            <div><h6 className='text-white'>Lorem ipsum dolor, sit amet  </h6></div>
                        </div>

                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <div className='w-[30px] cursor-pointer'><img src="phone.png" alt="" /></div>
                            <div className='w-[30px] cursor-pointer'><img src="video.png" alt="" /></div>
                            <div className='w-[30px] cursor-pointer'><img src="info.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Centertop