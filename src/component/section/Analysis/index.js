import React from 'react'
import Circle from './assest/Ellipse 2.png'
import Circle2 from './assest/Ellipse 1.png'
import GeoImgae from './assest/ng 1.png'
import Male from './assest/Vector(9).png'
import Female from './assest/Vector(10).png'


const index = () => {
  return (
    <section className='flex justify-content m-auto items-center border-gray-700 mt-20 border w-[90%] shadow-lg py-20'>
        <div className='border border-gray-700 py-[90px] m-7 rounded-lg shadow-md px-10'>
        <img src={Circle2} alt="design" className='w-[250px]' />
        <img src={Circle} alt="design" className='w-[200px] ml-20 absolute mt-[-200px] left-[57px]' />
        <div className='uppercase text-white text-center absolute mt-[-120px] ml-12'>
        <h1 className='text-[10px]'>Total Votes</h1>
        <p className='font-bold'>168,912,222</p>
        </div>
        <div className='uppercase text-white text-center absolute mt-[-250px] ml-36'>
        <h1 className='text-[10px]'>Rejected Votes</h1>
        <p className='font-bold'>8,400,000</p>
        </div>
        <div className='uppercase text-white text-center absolute '>
        <h1 className='text-[10px]'>Accepted Votes</h1>
        <p className='font-bold'>160,512,222</p>
        </div>
       
        </div>
        <div className='border border-gray-700 py-10 m-7 rounded-lg shadow-md px-10 w-[623px]'>
            <h1 className='text-white mb-7 text-center uppercase font-[Poppins]'>Candidates by geopolitical zones</h1>
            <div className='flex items-center text-white'>
            <img src={GeoImgae} alt="geoimage" />
            <div className='flex flex-col w-full text-[10px] ml-5 mt-20 space-y-4'>
            <div className='flex items-center space-x-2'>
            <div className='bg-[#449352] w-[20px] h-[10px] relative'/>
                <p>North East</p>
                <p>3,000</p>
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#6D769D] w-[20px] h-[10px] relative'/>
                <p>North west</p>
                <p>3,000</p>
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#A163BE] w-[20px] h-[10px] relative'/>
                <p>North Central</p>
                <p>3,000</p>
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#E30325] w-[20px] h-[10px] relative'/>
                <p>South West</p>
                <p>3,000</p>
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#2249D1] w-[20px] h-[10px] relative'/>
                <p>South South</p>
                <p>3,000</p>
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#018796] w-[20px] h-[10px] relative'/>
                <p>South East</p>
                <p>3,000</p>
            </div> 
            </div>
            </div>
        </div>
        <div className='border border-gray-700 m-4 py-32 rounded-lg shadow-md w-[362px]'>
        <h1 className='text-white mb-7 text-left ml-5 uppercase font-[Poppins] w-full mt-[-100px]'>Total elected member</h1>
        <p className='font-bold text-white ml-5 mt-[-30px]'>10,000</p>
        <div className='flex item-center mt-10 ml-5 text-white space-x-2'>
            <h1>Male</h1>
            <img src={Male} alt="male_section" className='w-[10px]'/>
        </div>
        <p className='font-bold text-white ml-5'>9,000</p>
        <div className='flex item-center mt-10 ml-5 text-white space-x-2'>
            <h1>Female</h1>
            <img src={Female} alt="male_section" className='w-[10px]'/>
        </div>
        <p className='font-bold text-white ml-5'>1,000</p>
        </div>
    </section>
  )
}

export default index