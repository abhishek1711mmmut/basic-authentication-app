import React from 'react'
import SignupForm from '../components/Signup'
import bgImage from '../assets/signupBg.png'


const Signup = () => {
    return (
        <div className='flex flex-col items-center gap-y-10 bg-gradient-to-tr from-fuchsia-500 to-violet-500 w-[100vw] h-[100vh]' style={{ fontFamily: 'inter' }}>

            <header className='flex flex-col justify-center items-center gap-y-4 mt-5'>
                <h1 className='text-5xl text-white font-semibold' style={{ fontFamily: 'inter' }}>
                    Welcome to PicturePalace
                </h1>
                <h2 className='italic text-white text-lg' style={{ fontFamily: 'poppins' }}>
                    Start uploading your photos now and keep them safe for years to come!
                </h2>
            </header>

            <div className='mx-auto flex justify-between w-[70%] bg-white rounded-xl h-[500px] max-w-[1300px]'>
                {/* left part */}
                <div className='w-[55%] flex flex-col justify-center items-center'>
                    <SignupForm />
                </div>

                {/* right part */}
                <div className='flex flex-col gap-y-2 text-center h-full rounded-r-xl justify-around items-center w-[45%] bg-gradient-to-tr from-fuchsia-300 to-indigo-400 p-2'>

                    <img src={bgImage} alt="" className='h-[70%]' />
                    <p className='text-gray-900 text-2xl font-semibold tracking-wide'>
                        This is where you can securely upload <br /> and store your photos
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Signup