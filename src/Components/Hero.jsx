import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] font-bold p-2'>Growing With Software Enginner</p>
            <h1 className='text-4xl font-bold md:text-7xl sm:6xl md:py-6'>Grow WIth data.</h1>
            <div>
                <p className='py-4 pl-2 text-xl font-bold md:text-5xl sm:text-4xl md:pl-4'>Fast, Flexible financing for</p>
                {/* <Typed sting={['BTB', 'BTC','SAS']} typeSpeed={120} backSpeed={140}/> */}
            </div>
            <p className='text-xl font-bold text-gray-500 md:text-2xl'>Hello Wolrd Hello Wolrd Hello Wolrd Hello Wolrd Hello Wolrd</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
