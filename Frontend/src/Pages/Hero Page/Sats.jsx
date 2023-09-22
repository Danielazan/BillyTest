import React from 'react'
import "./styles/Sats.css"
import Banner from "asstes/card.png"
import { BsStarFill,BsFillCursorFill } from "react-icons/bs";
import { MdOutlineGppGood,MdGppGood } from "react-icons/md";
import "./styles/istButton.css"
import "./styles/pyriamid.css"
import Card from "asstes/bill.png"
import './styles/joiningbox.css'
import Testimony from './Testimony';



const Sats = () => {
  return (
    <div className='w-screen md:w-full h-fit bg-custombg p-2 md:p-0'>
      <div className='flex w-full h-fit  justify-between items-center '>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center '>
            <span className='font-bold text-lg lg:2xl font-poppins text-white '>8542+</span>
            <span className='font-bold text-lg lg:2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text '>Active Members</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center gap-2 md:gap-0 text-center justify-center align-items-center sm:w-full'>
            <span className='font-bold text-lg lg:2xl  font-poppins text-white'>8542+</span>
            <span className='font-bold text-lg lg:2xl lg:4xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Trusted By People</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center'>
            <span className='font-bold text-lg lg:2xl lg:4xl font-poppins text-white'>330k+</span>
            <span className='font-bold text-lg lg:2xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Worked Done</span>
        </div>
      </div>

      {/* the two div section starts here */}
      <div className='w-full flex flex-col lg:flex-row lg:mt-8'>

        <div className='w-full lg:w-1/2 flex flex-col  lg:items-start justify-center font-poppins text-white '>
            <div className='w-full pr-8 md:pl-8 m-4 md:m-0'>
              <h2 className='text-white flex flex-col align-left font-poppins text-xl md:text-2xl pl-2 lg:mr-8 mt-4 lg:mr-0 text-left'>
              Manufacturer & Exporter of Road Construction <span>Machineries, Equipments, Servicing & Trading.</span>
            </h2>
            </div>
          
          <div className=' text-[#b3b4b7] text-sm font-poppins pl-2 lg:pl-8 lg:pr-8'>
            <p className='lg:mr-9 text-md flex flex-col'>
              Our Equipments Have been exported to many countries, 
                <span>
                in the world and the performance is already proven by our Customers.
                </span> 
            </p> 
          </div>
            {/* <div className="w-full pr-8 pl-8">
                <button className="button w-[120px] h-[45px] mt-4 ml-6 lg:ml-0 items-center justify-center"> Button
              </button>
            </div> */}
        </div>

        <div className='w-full lg:w-1/2 flex flex-col items-center justify-between mt-4 lg:mt-0  lg:ml-6 lg:pr-14'>

            {/* the list card */}
            <div className='flex items-center justify-between gap-4 m-2'>
            <BsStarFill color="#00f6ff" className='hidden md:flex text-6xl ml-4 ' />
            <section className="">
              <span className='text-[#7d919a] text-white text-xl font-poppins'>
                Rewards
              </span>
              <p className='text-[#b3b4b7] text-xl font-poppins'>
              We are able to provide the best-fit custom plant for any
                condition that is wanted by our Customers.
              </p>
            </section>
            </div>

            <div className='flex items-center justify-between gap-4 backdrop-blur-lg bg-[#737373] p-4 bg-opacity-20 m-2 rounded-[18px] '>
            <BsFillCursorFill color="#00f6ff" className='text-4xl hidden md:flex ml-4 ' />
            <section>
              <span className='text-white text-white text-xl font-poppins'>
                100% Fidelity
              </span>
              <p className='text-[#b3b4b7] text-xl font-poppins'> 
              We are committed to superior quality
                  and prominent results.

              </p>
            </section>
            </div>

            <div className='flex items-center justify-between gap-4 m-2'>
            <MdOutlineGppGood color="#00f6ff" className='text-8xl hidden md:flex ml-4 ' />
            <section>
              <span className='text-white text-white text-xl font-poppins'>
                  Customer’s Satisfaction
              </span>
              <p className='text-[#b3b4b7] text-xl font-poppins'>
                  We use modernized equipments & machineries which provides work efficiency and attributes.
              </p>
            </section>
            </div>
        </div>
      </div>

      {/* second two div section */}
      <div className='p-6 md:p-0 flex flex-col lg:flex-row w-full h-fit lg:mr-0 mt-8 lg:mt-6  '>
        <div className='w-full lg:w-1/2 lg:ml-14'>
           <img className=" h-auto w-full lg:mr-0 lg:w-1/2" src={Banner} alt="Image description"/>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col items-start justify-center'>
          <div class="pyramid-loader">
            <div class="wrapper">
              <span class="side side1"></span>
              <span class="side side2"></span>
              <span class="side side3"></span>
              <span class="side side4"></span>
              <span class="shadow"></span>
            </div>  
          </div>
          <h2 className='text-white flex flex-col items-start font-poppins text=lg ml-4 lg:mr-8 mt-4  text-left'>
          Easily get all your products <span>delivered to your destination at low cost.</span>
          </h2>
          <p className='text-[#b3b4b7] text-sm font-poppins flex flex-col ml-4 lg:ml-0 mr-10 lg:mr-0 md:pr-6'>
          Our system streamlines the process of managing orders and customers, reducing the time and effort required to complete these tasks.With our system, businesses can easily access customer information, track orders, and respond to customer inquiries, improving customer satisfaction and retention.Our system is designed to be user-friendly and customizable, allowing businesses to tailor it to their specific needs and preferences.

          
          </p>
            <div className='w-1/2'>

            </div>
          </div>
      </div>

        {/* third two div section */}

      <div className='flex flex-col lg:flex-row w-full h-fit lg:mr-0 mt-8 lg:mt-6  '>
        <div className='w-full lg:w-1/2 flex flex-col items-start justify-center lg:mr-16 lg:mt-6'>

          <div class="loader items-center justify-center ml-28">
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
          </div>
          <h2 className='text-white flex flex-col items-start font-poppins text=lg ml-4 lg:ml-8 mt-4  text-left'>
            Reliability
          </h2>
          <p className='text-[#b3b4b7] text-md font-poppins flex flex-col ml-4 lg:ml-8 mr-10 lg:mr-0'>
          The degree in which our equipments are designed aids a highclass functionality thereby producing highly unmatchable results.
          </p>
        </div>

        <div className='w-full lg:w-1/2 lg:ml lg:flex lg:items-center lg:justify-center '>
           <img className=" h-auto w-full lg:mr-0 lg:w-1/2" src={Card} alt="Image description"/>
        </div>
      </div>
        {/* Testimonial section */}

        <Testimony/>
    </div>
  )
}

export default Sats