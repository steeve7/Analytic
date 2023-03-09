import React from 'react'
import Map from './assest/Frame.png'
import Frame from './assest/Frame 114854.png'
import Ele from './assest/Frame 114853.png'
import {FaMapMarkerAlt} from 'react-icons/fa'



const Index = () => {
  return (
    <div className='w-[90%] h-full flex justify-center, items-center border border-gray-700 shadow-md m-auto'>
    <div className='flex items-center'>
      <img src={Map} alt="frame_map" className='w-full cursor-pointer' />
      <img src={Frame} alt="" className='absolute right-60 top-[550px] cursor-pointer'/>
      <img src={Ele} alt="Party" className='mt-[450px]' />
      <div className='text-white absolute right-[750px] top-[1050px] font-bold text-[12px] cursor-pointer'>90,900<FaMapMarkerAlt/></div>
      <div className='text-white absolute right-[850px] top-[1080px] font-bold text-[9px] cursor-pointer'>6,010<FaMapMarkerAlt/></div>
      <div className='text-white absolute right-[885px] top-[1034px] font-bold text-[9px] cursor-pointer'>30,000<FaMapMarkerAlt/></div>
      <div className='text-white absolute right-[910px] top-[1122px] font-bold text-[9px] cursor-pointer'>323<FaMapMarkerAlt/></div>
      <div className='text-white absolute right-[1140px] top-[1010px] font-bold text-[9px] cursor-pointer'>220<FaMapMarkerAlt/></div>
    </div>
    </div>
  )
}

export default Index