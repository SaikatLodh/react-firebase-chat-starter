import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'



const Centerbottom = () => {
    const [open,setOpen] = useState(false)
    const [text,setText] = useState("")

    const value = (e) =>{
        setText((prv) => prv + e.emoji)
        // setOpen(false)
    }

   
    return (

        <div>
            <div className='flex justify-between items-center mt-[30px] relative'>
                <div className='flex gap-3'>
                    <div><img src="img.png" alt="" className='w-[30px]' /></div>
                    <div><img src="camera.png" alt="" className='w-[30px]' /></div>
                    <div><img src="mic.png" alt="" className='w-[30px]' /></div>
                </div>
                <div className='w-[55%]'>
                    <input type="text" name='user' placeholder='Search' className='text-white bg-[#13213995] w-full px-3 py-2 rounded-lg' onChange={(e)=> setText(e.target.value)} value={text}/>
                </div>
                <div className='absolute bottom-[100%] left-0'> <EmojiPicker open={open} onEmojiClick={value}/></div> 
                <div className='flex gap-3 relative'>
                    <div onClick={() =>setOpen((prv) => !prv)}><img src="emoji.png" alt="" className='w-[30px] cursor-pointer ' />
                  
                    </div>
                    <div><button className='w-[50px] h-[30px] bg-[#5085FD] text-white rounded-lg'>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Centerbottom