import React from 'react'
import Laptop from '../Assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

        
            <img className='w-[500px] mx=auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold uppercase'>Data analytics dashboard</p>
                <h1 className='md:text=4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, libero voluptate maiores distinctio labore architecto unde minima, corrupti nobis nemo fuga deserunt reprehenderit modi ad illum suscipit incidunt vitae.</p>
                <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:mz-0 py-3 text-[#00df9a] '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
