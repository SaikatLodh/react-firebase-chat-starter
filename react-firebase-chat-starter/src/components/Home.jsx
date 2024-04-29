import React from 'react'
import Left from './Left'
import Center from './Center'
import Right from './Right'




export const Home = () => {
    return (
        <div>

            <div className='w-full h-screen'>

                <div className='background h-[100%] w-[100%] flex justify-center items-center'>

                    <div className='w-[80%] h-[80%] bg-[#00000087] rounded-lg drop flex'>

                        <Left/>
                        <Center />
                        <Right />

                    </div>


                </div>

            </div>


        </div>
    )
}

export default Home
