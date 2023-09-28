import React from 'react'
import "./styles/FooterSpinner.css"
import logo from "asstes/Solution Road New Logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram,BsFacebook,BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full bg-[#06080d] h-fit flex flex-col'>
         {/* Spinner */}
         {/* <div className="center ">
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
            </div> */}

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

                    <div className='w-full lg:w-1/2 p-2 flex flex-col items-center justify-center' >
                      <div className="w-full flex flex-col">
                          <h1 className='text-[#474747] font-poppins text-center'>Contact Us</h1>
      
                    </div>

                    <div className='flex w-full md:w-[32rem]  items-center md:justify-between  md:pr-8'>
                          <div className='flex w-full pl-4 md:pl-0 flex-col list-none items-center justify-between gap-[3rem] text-white font-poppins text-md font-bold '>
                              
                         <div className="w-full flex items-center gap-4">
                         <FaLocationDot color="#1197f5" className="text-2xl"/>
                         <span className="text-md md:text-xl font-poppins font-bold">
                                Km 1/2 Enugu-Abakiliki Express-way, Akpuoga Nike, Enugu State, Nigeria.
                                </span>
                         </div>

                         <div className="w-full flex items-center gap-4">

                          <PiWhatsappLogoFill color="green" className="text-2xl" />
                              <span className="text-md md:text-xl font-poppins font-bold">
                              +234 708 461 8070
                                </span>
                         </div>

                         <div className="w-full flex items-center gap-4">

                          <BsFillTelephoneInboundFill color="green" className="text-2xl" />
                              <span className="text-md md:text-xl font-poppins font-bold">
                              +234 903 664 561
                                </span>
                         </div>
                          
                         <div className="w-full flex items-center gap-4">
                                <MdOutlineMarkEmailUnread color="red" className="text-2xl"/>
                                <span className="text-md md:text-xl font-poppins font-bold">
                                  solutionroadequipmentm
                                  @gmail.com
                                </span>
                         </div>
                          
                              
                          </div>
      
                          
      
                          
                          
                      </div>
                    </div>
                </div>

          {/* social media  */}
            <div className='w-full h-fit flex flex-col items-center pt-4'>
                <h1 className='text-[#474747] font-poppins'> Follow US</h1>
    
              <div class="grid lg:grid-cols-4 gap-4 grid-cols-2">
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                        <BsInstagram color="#f0f3f4"  className='text-2xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                            <h2 className="text-[#f0f3f4] text-2xl">
                              <a className="text-[#f0f3f4] no-underline text-md" href="https://instagram.com/solution_road_equipment_ltd?igshid=MzRlODBiNWFlZA" target="_blank" >Instagram</a>
                            </h2>
                              
                    </span>
                </div>
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                      <BsFacebook  color="#f0f3f4" className='text-2xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                          <h2 className="text-[#f0f3f4] text-2xl">
                            <a href="https://www.facebook.com/profile.php?id=100089494998688"
                            target="_blank"
                             className="no-underline text-[#f0f3f4] text-2xl">
                              Facebook
                            </a>
                          </h2>
                    </span>
                </div>
                <div class="col-span-1 ">
                  <span className='flex flex-col items-center'>
                    <BsLinkedin color="#f0f3f4" className='text-2xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                        <h2 className="text-[#f0f3f4] text-2xl">
                          <a href="https://www.linkedin.com/in/solution-road-equipment-1b074b293?trk=contact-info" 
                          className="no-underline text-2xl text-[#f0f3f4]" 
                          target="_blank"
                          >Linkedin</a>
                        </h2>
                    </span>
                </div>
                <div class="col-span-1 ">
                    <span className='flex flex-col items-center'>
                      <AiFillTwitterCircle color="#f0f3f4"  className='text-2xl bg-gradient-to-r from-#F56040 to-#FCAF45'/>
                          <h2 className="text-[#f0f3f4] text-2xl">Whatsapp</h2>
                    </span>
                </div>
              </div>
          </div>

          <div className="w-full mt-2">
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between gap-4 items-center">
              <p className="text-sm">© 2023 Perplexity. All rights reserved.</p>
              <p className="text-sm">Designed By <span className="text-red-500">&hearts;</span>Lazan Web Development Team</p>
            </div>
          </footer>
          </div>
    </div>
  )
}

export default Footer

