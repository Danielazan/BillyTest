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
      <div className='flex p-2 w-full h-fit gap-2 md:gap-0 justify-between items-center '>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center '>
            <span className='font-bold text-lg lg:2xl font-poppins text-white '>1000+</span>
            <span className='font-bold text-lg lg:2xl text-[#ffc600] '>Active Members</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center gap-2 md:gap-0 text-center justify-center align-items-center sm:w-full'>
            <span className='font-bold text-lg lg:2xl  font-poppins text-white'>5000+</span>
            <span className='font-bold text-lg lg:2xl lg:4xl  text-[#ffc600]'>People Trust Our Services</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center'>
            <span className='font-bold text-lg lg:2xl lg:4xl font-poppins text-white'>2000+</span>
            <span className='font-bold text-lg lg:2xl  text-[#ffc600]'>Work Done for Clients</span>
        </div>
      </div>

      {/* the two div section starts here */}
      <div className='w-full flex flex-col lg:flex-row items-start lg:mt-8'>

        <div className='w-full lg:w-1/2 flex flex-col  lg:items-start justify-center font-poppins text-white '>
            <div className='w-full pr-8 md:pl-8 m-4 md:m-0'>
              <h2 className='text-white flex flex-col align-left font-bold font-poppins text-xl md:text-2xl pl-2 lg:mr-8 mt-4 text-left'>
              Manufacturer & Exporter of Road Construction <span>Machineries, Equipments, Servicing & Trading.</span>
            </h2>
            </div>
          
          <div className=' text-[#b3b4b7] text-sm font-poppins mx-4  md:pl-8 lg:pr-8'>
            <p className='font-poppins lg:mr-9 text-lg text-justify flex flex-col'>
            Our equipment has been exported to many countries around the world, and its performance has been proven by our customers. While there are many examples of successful exports of equipment, there are also instances where countries have received defective or malfunctioning equipment. For example, China's defense industry has exported malfunctioning and defective military equipment in recent years, leaving countries short of what's needed for their security while also draining military budgets. However, the export of technology and equipment is a highly regulated process, and companies must comply with strict guidelines to ensure that their exports are legal and safe. The U.S. Department of Commerce provides guidelines for an effective export compliance program, which includes management commitment, risk assessment, and training and awareness. Testing and certification for export products is also an important aspect of ensuring that equipment is safe and effective. 
            </p> 
          </div>
            {/* <div className="w-full pr-8 pl-8">
                <button className="button w-[120px] h-[45px] mt-4 ml-6 lg:ml-0 items-center justify-center"> Button
              </button>
            </div> */}
        </div>

        <div className='w-full lg:w-1/2 flex flex-col items-center justify-between mt-4 lg:mt-0  lg:ml-6 lg:pr-14 mt-2'>

            {/* the list card */}
            <div className='flex items-center justify-between gap-4 m-2'>
            <BsStarFill color="#00f6ff" className='hidden md:flex text-6xl ml-4 ' />
            <section className="pl-4">
              <span className='text-[#7d919a] text-white  text-2xl font-bold font-poppins'>
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
              <span className='text-white text-white text-2xl font-poppins font-bold'>
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
            <section className="pl-4">
              <span className='text-white text-white text-2xl font-bold font-poppins'>
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
      <div className='p-2 md:p-0 flex flex-col lg:flex-row w-full h-fit lg:mr-0 mt-8 lg:mt-6  '>
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
          <h2 className='text-white flex flex-col items-start font-poppins text-xl md:text-2xl ml-4 lg:mr-8 mt-4 font-bold text-left'>
          Easily get all your products <span>delivered to your destination at low cost.</span>
          </h2>
          <p className='text-[#b3b4b7] text-justify text-lg font-poppins flex flex-col mx-4 lg:ml-0  lg:mr-0 md:pr-6'>
          Our system streamlines the process of managing orders and customers, reducing the time and effort required to complete these tasks.With our system, businesses can easily access customer information, track orders, and respond to customer inquiries, improving customer satisfaction and retention.Our system is designed to be user-friendly and customizable, allowing businesses to tailor it to their specific needs and preferences.

          
          </p>
            <div className='w-1/2'>

            </div>
          </div>
      </div>

        {/* third two div section */}

      <div className='p-4 flex flex-col lg:flex-row w-full h-fit lg:mr-0 mt-8 lg:mt-6  '>
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
          <h2 className='text-white text-xl md:text-2xl flex flex-col items-start font-poppins font-bold ml-2 lg:ml-8 mt-4  text-left'>
            Reliability
          </h2>
          <p className='text-[#b3b4b7] text-lg text-justify font-poppins flex flex-col mx-2 lg:ml-8  lg:mr-0'>
          The degree to which our equipment is designed plays a significant role in ensuring that it functions at a high level, producing results that are unmatched by other equipment. The design of our equipment is carefully crafted to ensure that it is reliable, efficient, and effective. We use high-quality materials and components to ensure that our equipment is durable and long-lasting. Additionally, we subject our equipment to rigorous testing and quality control measures to ensure that it meets our high standards. This ensures that our equipment is capable of producing consistent and accurate results, even under challenging conditions. Our commitment to quality and reliability is reflected in the high-class functionality of our equipment, which enables us to produce results that are highly unmatchable.
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