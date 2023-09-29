import React from 'react'
import './styles/Testimonbtn.css'
import './styles/AboutCard.css'
import './styles/TeamCard.css'
import './styles/whatpeople.css'
import './styles/TryServices.css'
import Operations from "asstes/Teams Pictures/Operat.jpg"
import supervisor from "asstes/Teams Pictures/22.jpg"
import Manager from "asstes/Teams Pictures/Manager.jpg"
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import front from "asstes/Flip Front 1.jpg"
import back from "asstes/Flip Back.jpg"
import { useNavigate } from 'react-router-dom';

const Testimony = () => {
  const navigate = useNavigate();

  const Desfun = (id) => {
    navigate(`/About`)
  };
  return (
    <div className='h-fit w-full'>
      {/* what people say about us */}
      
      <div className='flex flex-col lg:flex-row w- mt-8 items-center justify-center mb-4'>
 
      <div className='w-full lg:w-1/2 flex flex-col lg:block items-center justify-center lg:items-start lg:justify-start'>
            <div className="myCard lg:ml-28 lg:mb-4 items-center justify-center">
              <div class="innerCard">
                  <div class="frontSide p-2">
                      <img src={front} alt="" />
                  </div>
                  <div class="backSide p-2">
                  <img src={back} alt="" />
                  </div>
              </div>
          </div>
            <div className="w-full h-fit md:h-[8rem] ">
              <p className='flex flex-col font-poppins text-[#b3b4b7] lg:ml-6 text-left  mt-4 lg:mt-0  lg:text-left text-lg text-justify mx-6'>
                Our Computer-aided  design softwares enables to design the most critical
                parts in  such a way that they are capable of withstanding  the
                severest  of  shocks  and  vibrations  during  operation. Ready
                availability  of  all  frequently  needed  spares along with quick
                service  response  helps   our  customers   achieve  maximum
                productivity.
              </p>
            </div>
            
          </div>

          <div className='w-full  lg:w-1/2 lg:items-center lg:justify-center flex flex-col'>

              <h1 className='text-white text-2xl font-poppins flex flex-col lg:text-4xl mt-6 lg:mt-0  text-center lg:text-left'>
              What people are <span>saying about us</span>
              </h1>

              <div  className="mt-2 w-full flex items-center justify-center">
                    <button onClick={Desfun
                    } className=' lg:ml-20' mt-2 >
                      Learn More
                      <div id="clip">
                          <div id="leftTop" class="corner"></div>
                          <div id="rightBottom" class="corner"></div>
                          <div id="rightTop" class="corner"></div>
                          <div id="leftBottom" class="corner"></div>
                      </div>
                      <span id="rightArrow" class="arrow"></span>
                      <span id="leftArrow" class="arrow"></span>
                  </button>
              </div>
          </div>
          
      </div>

      {/* Teams Section */}

          <div className='w-full h-fit flex items-center justify-center'>
          <h1 className='text-white font-poppins text-4xl lg:text-6xl '>Team Members</h1>
          </div>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between lg:pl-4 lg:pr-4'>
          
        <div className="teamcard border-white w-[300px] h-[380px] flex flex-col items-center justify-between text-left mb-3 lg:mb-0">
            <div className='rounded-full w-[110px] h-[120px] bg-black mb-4'>
              <img className=" rounded-full h-auto w-full lg:mr-0 " src={Manager
              } alt="Image description"/>
            </div>
            <h1 className='text-[18px]  text-white '>
              VIJAY PRAKASH
            </h1>
            <p className='text-md font-poppins text-[#dea2eb] text-center font-bold'>
              Managing Director
            </p>
            <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
              <IoLogoWhatsapp className="text-lg" color="#3dbf4f"/> +2347084618070
            </h1>
            <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
              <BsFillTelephoneInboundFill className="text-lg" color="#00f6ff"/> +2349127794404
            </h1>
           

        </div>

        <div className="teamcard w-[300px] h-[380px] flex flex-col items-center justify-between text-left mb-3 lg:mb-0">
            <div className='rounded-full  w-[110px] h-[120px] bg-black mb-4'>
                <img className=" rounded-full h-auto w-full lg:mr-0 " src={supervisor} alt="Image description"/>
            </div>
            <h1 className='text-[18px]  text-white '>
              SANTOSH KUMAR K 
            </h1>
            <p className='text-md font-poppins text-[#dea2eb] text-center font-bold'>
              Fabrication Supervisor
            </p>

            <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
              <IoLogoWhatsapp className="text-lg" color="#3dbf4f"/> +234802934452
            </h1>
            <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
              <BsFillTelephoneInboundFill className="text-lg" color="#00f6ff"/> +2349036645619
            </h1>
           

        </div>

        <div className="teamcard w-[300px] h-[380px] flex flex-col items-center justify-between text-left mb-3 lg:mb-0">
            <div className='rounded-full w-[110px] h-[120px] bg-black mb-4'>
                <img className=" rounded-full h-auto w-full lg:mr-0 " src={Operations} alt="Image description"/>
            </div>
            <h1 className='text-[18px]  text-white '>
              JAYANTILAL AMLIYA
            </h1>
            <p className='text-md font-poppins text-[#dea2eb] text-center font-bold'>
              Operation Manager 
            </p>
            <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
              <IoLogoWhatsapp className="text-lg" color="#3dbf4f"/> +2349160938791
            </h1>
            <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
              <BsFillTelephoneInboundFill className="text-lg" color="#00f6ff"/> +2349127794404
            </h1>

        </div>
      </div>

        {/* Try our services section */}

        <div className='w-full flex flex-col items-center justify-center mt-6 relative'>
          <div className=" w-[200px] height-200 lg:w-[600px] lg:h-[400px]  py-5 d-flex justify-content-center align-items-center mb-20">
              <div className="obj ">
                  <div className="objchild">
                    <h1 className='text-white text-center text-2xl'>Try our services Now</h1>
                      <span className="inn6 text-white text-md">
                        <p className='font-poppins text-2xl text-yellow font-bold p-4'> Solution Road Equipments & Spars Ltd.</p>
                      </span>
                  </div>
              </div>
          </div>

          <div className='mt-20 w-[200px] h-[200px]'>

          </div>


        </div>

      

        
    </div>

      
  )
}

export default Testimony