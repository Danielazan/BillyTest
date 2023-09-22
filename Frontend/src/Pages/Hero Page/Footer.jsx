import React from 'react'
import "./styles/FooterSpinner.css"
import logo from "asstes/Solution Road New Logo.png"

import { BsInstagram,BsFacebook,BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full bg-[#06080d] h-fit flex flex-col'>
         {/* Spinner */}
         <div className="center ">
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
            </div>

                <div className='w-full flex flex-col lg:flex-row items-center'>
                    {/* logo */}
                  <div className=' h-fit w-full lg:w-1/2 flex '>
                    <div className='w-full h-auto flex items-center justify-center'>
                        <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
                            <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                        </div>
                        
                        <span className='font-poppins ml-4 mr-2 font-bold cursor-pointer text-sm lg:text-lg flex  text-yellow-500'>Solution Road Equipments & Spars Ltd</span>
                        
                    </div>
                  </div>

                    <div className='w-fil lg:w-1/2 p-2'>
                      <div className="w-full flex flex-col">
                          <h1 className='text-center'>Contact Us</h1>
                          {/* <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, perferendis?
                          </p> */}
      
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                          <div className='flex flex-col list-none justify-between gap-4 text-white font-poppins text-sm '>
                              <li className='text-white text-left'>Home</li>
                              <li>Contact</li>
                              <li>Email</li>
                              
                          </div>
      
                          <div className='list-none justify-between gap-4 text-white font-poppins text-sm flex flex-col text-left items-start justify-start ml-4'>
      
                              <li className='text-white text-left'>Home</li>
                              <li>Contact</li>
                              <li>Email</li>
                              
                          </div>
      
                          <div className='list-none justify-between gap-4 text-white font-poppins text-sm flex flex-col text-left items-start justify-start ml-4'>
      
                              <li className='text-white text-left'>Home</li>
                              <li>Contact</li>
                              <li>Email</li>
                              
                          </div>
                          
                      </div>
                    </div>
                </div>

          {/* social media  */}
            <div className='w-full h-fit flex flex-col items-center pt-4'>
                <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-poppins'> Follow US</h1>
    
              <div class="grid lg:grid-cols-4 gap-4 grid-cols-2">
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                        <BsInstagram  className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                            <h2>Instagram</h2>
                    </span>
                </div>
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                      <BsFacebook  className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                          <h2>Facebook</h2>
                    </span>
                </div>
                <div class="col-span-1 ">
                  <span className='flex flex-col items-center'>
                    <BsLinkedin  className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                        <h2>Facebook</h2>
                    </span>
                </div>
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                      <RiWhatsappFill  className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                          <h2>Whatsapp</h2>
                    </span>
                </div>
              </div>
          </div>

          
    </div>
  )
}

export default Footer

