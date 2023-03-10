import React, {useState, useEffect} from 'react'
import Circle from './assest/Ellipse 2.png'
import Circle2 from './assest/Ellipse 1.png'
import GeoImgae from './assest/ng 1.png'
import Male from './assest/Vector(9).png'
import Female from './assest/Vector(10).png'


const Index = () => {
    const [abias, setAbia] = useState([]);
    const [adamawas, setAdamawa] = useState([]);
    const [anambras, setAnambra] = useState([]);
    const [crosss, setCross] = useState([]);
    const [lagoss, setLagos] = useState([]);
    const [riverss, setRivers] = useState([]);

    const getData = () => {
        fetch("http://localhost:30001/Abia",{
            header:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {setAbia(data)})
    }
    const getState = () => {
        fetch("http://localhost:30001/Adamawa",{
            header:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {setAdamawa(data)})
    }
    const getAnambra = () => {
        fetch("http://localhost:30001/Anambra",{
            header:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {setAnambra(data)})
    }
    const getCross = () => {
        fetch("http://localhost:30001/CrossRiver",{
            header:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {setCross(data)})
    }
    const getLagos = () => {
        fetch("http://localhost:30001/Lagos",{
            header:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {setLagos(data)})
    }
    const getRivers = () => {
        fetch("http://localhost:30001/Rivers",{
            header:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {setRivers(data)})
    }

    useEffect(()=> {
        getData();
        getState();
        getAnambra();
        getCross();
        getLagos();
        getRivers();
    },[])

  return (
    <section className='flex justify-content m-auto items-center border-gray-700 mt-20 border w-[90%] shadow-lg py-20'>
        <div className='border border-gray-700 py-[205px] m-7 rounded-lg shadow-md px-10'>
        <img src={Circle2} alt="design" className='w-[250px]' />
        <img src={Circle} alt="design" className='w-[200px] ml-20 absolute mt-[-200px] left-[57px]' />
        <div className='uppercase text-white text-center absolute mt-[-120px] ml-[67px]'>
        <h1 className='text-[10px]'>Total Votes</h1>
        <p className='font-bold'>112,881</p>
        </div>
        <div className='uppercase text-white text-center absolute mt-[-250px] ml-32'>
        <h1 className='text-[10px]'>other party votes</h1>
        <p className='font-bold'>8,345</p>
        </div>
        <div className='uppercase text-white text-center absolute '>
        <h1 className='text-[10px]'>leading party Votes</h1>
        <p className='font-bold'>104,453</p>
        </div>
        </div>
        <div className='border border-gray-700 py-10 m-7 rounded-lg shadow-md px-10 w-[623px]'>
            <h1 className='text-white text-center uppercase font-[Poppins]'>Candidates by States</h1>
            <div className='flex items-center text-white'>
            <img src={GeoImgae} alt="geoimage" className='hidden' />
            <div className='flex flex-col w-full text-[10px] ml-5 mt-10 space-y-4'>
            <div className='flex items-center space-x-2'>
            <div className='bg-[#449352] w-[20px] h-[10px] relative'/>
            <h1 className="font-bold text-[12px]">ABIA STATE</h1>
            </div>
            <div className='flex items-center space-x-2'>
                {abias.map((abia, index) => (
                    <div className='space-x-2 text-center' key={index}>                   
                    <p>{abia.political_party_name}</p>
                    <p>{abia.candidate_votes}</p>
                    </div>
                ))}
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#E30325] w-[20px] h-[10px] relative'/>
            <h1 className="font-bold text-[12px]">ADAMAWA STATE</h1>
            </div>
            <div className='flex items-center space-x-2'>
                {adamawas.map((adamawa, index) => (
                    <div className='space-x-2 text-center' key={index}>
                    <p>{adamawa.political_party_name}</p>
                    <p>{adamawa.candidate_votes}</p>
                    </div>
                ))}
            </div>
            <div className='flex items-center space-x-2'>
            <div className='bg-[#449352] w-[20px] h-[10px] relative'/>
            <h1 className="font-bold text-[12px] uppercase">anambra state</h1>
            </div>
            <div className='flex items-center space-x-2'>
                {anambras.map((anambra, index) => (
                    <div className='space-x-2 text-center' key={index}>
                    <p>{anambra.political_party_name}</p>
                    <p>{anambra.candidate_votes}</p>
                    </div>
                ))}
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#449352] w-[20px] h-[10px] relative'/>
            <h1 className="font-bold text-[12px] uppercase">Cross River state</h1>
            </div>
            <div className='flex items-center space-x-2'>
                {crosss.map((cross, index) => (
                    <div className='space-x-2 text-center' key={index}>
                    <p>{cross.political_party_name}</p>
                    <p>{cross.candidate_votes}</p>
                    </div>
                ))}
            </div> 
            <div className='flex items-center space-x-2'>
            <div className='bg-[#449352] w-[20px] h-[10px] relative'/>
            <h1 className="font-bold text-[12px] uppercase">Lagos state</h1>
            </div>
            <div className='flex items-center space-x-2'>
                {lagoss.map((lagos, index) => (
                    <div className='space-x-2 text-center'>
                    <p>{lagos.political_party_name}</p>
                    <p>{lagos.candidate_votes}</p>
                    </div>
                ))}
            </div>
            <div className='flex items-center space-x-2'>
            <div className='bg-[#449352] w-[20px] h-[10px] relative'/>
            <h1 className="font-bold text-[12px] uppercase">Rivers state</h1>
            </div>  
            <div className='flex items-center space-x-2'>
                {riverss.map((river, index) => (
                    <div className='space-x-2 text-center'key={index}>
                    <p>{river.political_party_name}</p>
                    <p>{river.candidate_votes}</p>
                    </div>
                ))}
            </div>  
            </div>
            </div>
        </div>
        <div className='border border-gray-700 m-4 py-72 rounded-lg shadow-md w-[362px]'>
        <h1 className='text-white mb-7 text-left ml-5 uppercase font-[Poppins] w-full mt-[-200px]'>Total elected member</h1>
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

export default Index