import React from 'react'
import {  CgInstagram } from "react-icons/cg";
import { TiSocialTwitter } from "react-icons/ti";
import { MdCall} from "react-icons/md";
import Logo from './assest/Hernalytics Full Logo Yellow@3x 1(1).png'

const index = () => {
  return (
    <footer className="w-full" style={{background: "rgba(255, 255, 255, 0.1)"}}>
    <div className="flex md:flex-row mt-10 w-full ">
      <section className="md:m-20">
        <a href="/#" className="flex items-center m-2 md:m-0 mt-2">
          <img src={Logo} alt="header-icon" className="w-40" />
        </a>
        <div className='text-white py-4'>
          <h2>isale Eko Avenue, Dolphin Estate,ikoyi,Lagos Nigeria</h2>
          <p className='py-4'>@2022 Hernalytics</p>
        </div>
      </section>

      <section className="flex flex-row md:mt-20 mt-40 md:space-x-28 text-white absolute md:right-40 space-x-4 ml-4 md:ml-0 space-y-4 my-7">
        <div className='leading-8 mt-4'>
          <h2 className="font-bold">About</h2>
          <ul>
            <a href='hel&#39;lo'>
              <li>Our Story</li>
            </a>
            <a href='hel&#39;lo'>
              <li>Blog</li>
            </a>
            <a href='hel&#39;lo'>
              <li>About Hernalytics</li>
            </a>
            <a href='hel&#39;lo'>
              <li>Videos</li>
            </a>
          </ul>
        </div>
        <div className='leading-8'>
          <h2 className="font-bold">Support</h2>
          <ul>
            <a href="/#">
              <li>FAQS</li>
            </a>
            <a href="/#">
              <li>Privacy Policy</li>
            </a>
            <a href="/#">
              <li>Terms Of Service</li>
            </a>
          </ul>
        </div>
        <div className='leading-8'>
          <h2 className="font-bold">Lets Chat!</h2>
          <ul>
            <a href="/#">
              <li>hernalytics@gmail.com</li>
            </a>
            <a href="/#">
              <li>+2348012345678</li>
            </a>
          </ul>
          <div className="flex mt-5 space-x-2">
            <a href="/#">
              <CgInstagram className="bg-orange-400 w-8 rounded-full h-8 text-white p-2" />
            </a>
            <a href="/#">
              <TiSocialTwitter className="bg-blue-500 w-8 rounded-full h-8 text-white p-2" />
            </a>
            <a href="/#">
            <MdCall className="bg-orange-400 w-8 rounded-full h-8 text-white p-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </footer>
  )
}

export default index