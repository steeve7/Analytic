import React, { useState,useEffect} from "react";
import Logo from "./assest/Hernalytics Full Logo Yellow@3x 1(1).png";
import NavLinks from "./navlinks";
import Signup from "./signup";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [candidates, setCandidate] = useState([]);

  const getData = () => {
    fetch("http://localhost:3001/candidate",{
        header:{
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    }).then((res) => res.json())
    .then((data) => {setCandidate(data)})
}
useEffect(()=> {
    getData();
},[])

  return (
    <>
      <nav className="bg-[#1B1F30]">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
            <div
              className="text-3xl md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <MdClose /> : <FiMenu />}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] text-white">
            <li>
              <a href="/#" className="py-7 px-3 inline-block">
                About us
              </a>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <Signup />
          </div>
          {/*mobile nav*/}
          <ul
            className={`
            md:hidden bg-white absolute w-full bottom-0 py-24 pl-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <li>
              <a href="/#" className="py-7 px-3 inline-block">
                About us
              </a>
            </li>
            <NavLinks />
            <div className="py-5">
              <Signup />
            </div>
          </ul>
        </div>
      </nav>
      <div className="uppercase text-white flex items-center space-x-4 m-10 ml-16">
        <h1 className="text-3xl font-bold">Post election data</h1>
        <h5 className="bg-[#1C2031] border border-gray-700 font-bold">
          Presidential / 2023
        </h5>
      </div>

      <div className="m-10 ml-16 flex items-center justify-between">
        <h1 className=" text-white text-2xl font-bold">Presidential Race</h1>
        <div>
          <select
            name="Election Date"
            id=""
            className="m-10 w-[20%] py-2 px-3 bg-[#1C2031] text-[#C6C7CB] border border-gray-700"
          >

            <option value="Post-Election Analysis" className="border-none">
              Post-Election Analysis
            </option>
          </select>
          <select
            name="Election Date"
            id=""
            className="m-10 w-[20%] py-2 px-3 bg-[#1C2031] text-[#C6C7CB] border border-gray-700"
          >
            <option value="Presidential" className="border-none">
              Presidential
            </option>
          </select>
          <select
            name="Election Date"
            id=""
            className="m-10 w-[20%] py-2 px-3 bg-[#1C2031] text-[#C6C7CB] border border-gray-700"
          >
            <option value="2023" className="border-neutral-600">
              2023
            </option>
            <option value="2019" className="border-none">
              2019
            </option>
            <option value="2015" className="border-none">
              2015
            </option>
            <option value="2011" className="border-none">
              2011
            </option>
            <option value="2007" className="border-none">
              2007
            </option>
            <option value="2003" className="border-none">
              2003
            </option>
            <option value="1999" className="border-none">
              1999
            </option>
            <option value="1991" className="border-none">
              1991
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between space-x-7 text-white m-auto px-10">
           {candidates.map((candidate, index) => (
            <div key={index}  className="shadow-lg rounded-lg w-full
             justify-center text-center py-7">
             <h1 className="uppercase">candidate name: {candidate.full_name}</h1>
                <p className="uppercase">Party name: {candidate.political_party_name}</p>
                <span className="uppercase">Total Vote: {candidate.candidates_vote}</span>
            </div>
           ))} 
      </div>
      <hr className="md:w-[90%] ml-16 w-full md:mt-[-20px] absolute border-gray-700 flex justify-content" />
    </>
  );
};

export default Index;
