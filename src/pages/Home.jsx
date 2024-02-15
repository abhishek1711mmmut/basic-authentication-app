import React from 'react'
import Login from '../components/Login'
import bgImage from '../assets/regBg.png'


const Home = () => {
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

      <div className='mx-auto flex justify-between items-start w-[70%] bg-white rounded-xl h-[500px] max-w-[1300px]'>
        {/* left part */}
        <div className='w-[50%] flex flex-col justify-center items-center mt-5'>
          <Login />
        </div>

        {/* right part */}
        <div className='flex flex-col gap-y-2 text-center h-full rounded-r-xl justify-center items-center w-[50%] bg-gradient-to-tr from-fuchsia-300 to-indigo-400'>
          <div className='border-4 rounded-[40px] h-[80%] w-[60%] relative p-5'>
            <img src={bgImage} alt="" className='absolute -right-16 inset-y-0 h-full' />
            <p className="text-3xl text-white font-bold text-left">
              Capturing <br />
              Today,<br />
              preserving <br />
              Future</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home