import React from 'react'
import "./styles/FooterSpinner.css"
import logo from "asstes/Solution Road New Logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

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

                    <div className='w-full lg:w-1/2 p-2'>
                      <div className="w-full flex flex-col">
                          <h1 className='text-white font-poppins text-center'>Contact Us</h1>
      
                    </div>

                    <div className='flex w-full md:w-[32rem]  items-center md:justify-between  md:pr-8'>
                          <div className='flex w-full flex-col list-none items-center justify-between gap-[3rem] text-white font-poppins text-md font-bold '>
                              
                          <FaLocationDot color="#1197f5" className="text-2xl"/>
                          <BsFillTelephoneInboundFill color="green" className="text-2xl" />
                          <MdOutlineMarkEmailUnread color="red" className="text-2xl"/>
                              
                          </div>
      
                          <div className='list-none justify-between gap-4 text-white font-poppins text-sm flex flex-col text-left items- justify-start ml-4'>
                              <li className="text-md md:text-xl font-poppins font-bold">
                                Km 1/2 Enugu-Abakiliki Express-way, Akpuoga Nike, Enugu State
                                </li>
                                <li className='text-white text-left text-md md:text-xl font-bold font-poppins'>+234 708 461 8070</li>
                              <li className="font-bold text-md md:text-xl font-poppins">solutionroadequipmentm@gmail.com</li>
                              
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
                        <BsInstagram color="#d70bd5"  className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                            <h2 className="text-white">
                              <a className="text-[#d70bd5] no-underline text-md" href="https://instagram.com/solution_road_equipment_ltd?igshid=MzRlODBiNWFlZA" target="_blank" >Instagram</a>
                            </h2>
                              
                    </span>
                </div>
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                      <BsFacebook  color="#1197f5" className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                          <h2>
                            <a href="https://www.facebook.com/profile.php?id=100089494998688"
                            target="_blank"
                             className="no-underline text-md">
                              Facebook
                            </a>
                          </h2>
                    </span>
                </div>
                <div class="col-span-1 ">
                  <span className='flex flex-col items-center'>
                    <BsLinkedin color="#076ca4" className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                        <h2>
                          <a href="" 
                          className="no-underline text-md" 
                          target="_blank"
                          >Linkedin</a>
                        </h2>
                    </span>
                </div>
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                      <RiWhatsappFill color="#54cc60"  className='text-4xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                          <h2 className="text-green-500">Whatsapp</h2>
                    </span>
                </div>
              </div>
          </div>

          
    </div>
  )
}

export default Footer

