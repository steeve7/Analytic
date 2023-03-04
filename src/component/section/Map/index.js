import React from 'react'
import Map from './assest/Frame.png'
import Frame from './assest/Frame 114854.png'
import Ele from './assest/Frame 114853.png'


const Index = () => {
  return (
    <div className='w-[90%] h-full flex justify-center, items-center border border-gray-700 shadow-md m-auto'>
    <div className='flex items-center'>
      <img src={Map} alt="frame_map" className='w-4/5 cursor-pointer' />
      <img src={Frame} alt="" className='absolute right-60 top-[500px] cursor-pointer'/>
      <img src={Ele} alt="Party" className='mt-[450px]' />
    </div>
    </div>
  )
}

export default Index