import React from 'react'
import Navbars from '../../components/Navbars'
import HeroImg2 from "asstes/mobileMachine.jpg"
import mobilebg from "asstes/mobile.jpg"
import { AiFillGitlab } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'

import "./styles/Hero.css"
import Sats from './Sats';

const Hero = () => {
  const navigate = useNavigate();
 
  const hanleClick= ()=>{
    console.log("Clicked")
  }



  return (
    <div  className='w-screen flex flex-col md:w-full  justify-between items-center' >
      <div className=' hidden md:block bg-cover bg-no-repeat w-full max-w-full h-screen  md:w-full' style={{ backgroundImage: `url(${mobilebg})`, backgroundPosition:`center`}} >
      
      <Navbars/>
        <div className='justify-center w-full flex items-center flex-col h-[60%]'>
            <h1 className="text-9xl font-bold font-poppins text-white pb-4">
                <span className="text-[#ffc600] font-poppins pr-4">Building</span>
                 Roads
            </h1>
            <div className='w-fit h-fit bg-[#ffc80093] rounded-full  pr-4 pl-4'>
              <h2 className="text-6xl font-bold text-center font-poppins mt-2 text-white">for Nations to Move On</h2>
            </div>
            
        </div>
        <div className='justify-center w-screen flex align-center flex flex-col items-center mt-6 '>
            <a href="#stats">
            <AiFillGitlab color='yellow' className="flex  justify-center items-end bounce text-6xl" onClick={()=>hanleClick()}/>
            </a>
        </div>
      </div>

      <div className="block md:hidden bg-cover bg-no-repeat w-full max-w-full h-screen justify-center items-center " style={{ backgroundImage: `url(${mobilebg})`, backgroundPosition:`center`}}>
        <Navbars/>

        <div className='w-full flex sm:justify-center sm:items-center flex-col h-[60%] flex-col justify-center items-center'>
            <h1 className="text-4xl font-bold text-white items-center">
                <span className="text-[#ffc600] font-poppins pr-4">Building</span>
                 Roads
            </h1>
            <span className='w-fit h-fit bg-[#ffc80093] pb-1 rounded-full  pr-4 pl-4'>
              <span className="text-2xl font-bold text-center  text-white">for Nations to Move On</span>
            </span>
        </div>
        <div className='justify-center w-screen flex align-center flex flex-col items-center mt-6 '>
        <a href="#stats">
            <AiFillGitlab color='yellow' className="flex  justify-center items-end bounce text-6xl" onClick={()=>hanleClick()}/>
            </a>
        </div>
      </div>
      <section id="stats">
      <Sats />
      </section>
      
        
            <Footer/>
        
    </div>
    
  )
}

export default Hero