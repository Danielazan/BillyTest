import {useState, useEffect}from 'react'
import Navbars from 'components/Navbars'
import Aboutbg from 'asstes/Aboutbg.jpg'
import './styles/Aboutbgbtn.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Manager from "asstes/Teams Pictures/Manager.jpg"
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from "axios"
import base from "base.js"
import Footer from 'Pages/Hero Page/Footer';
import MissionPic from "asstes/Company Pictures/working.jpg"
import visionPic from "asstes/Company Pictures/roads.jpg"
import TeamContext from "Hooks/Team"

const About = () => {
  const URL = base.local

  const {Team, dispatchTeam} = TeamContext()

  useEffect(() => { 
      
    axios.get(`${URL}/api/teams`).then((res)=>{
     const json = res.data

     dispatchTeam({type:"Display Team",payload:json})
     console.log(Team)
      // dispatchMachine({type:"Display Machines",payload:json})
   })
   
   
 }, [dispatchTeam])
  
  return (
    <div className='w-full flex flex-col items-center bg-[#161616] '>
      <div className='bg-cover bg-no-repeat w-full max-w-full h-[70vh]  md:w-full' style={{ backgroundImage: `url(${Aboutbg})`, backgroundPosition:`center`}} >
        <Navbars/>
            {/* the hero side of the about page */}
          <div className='flex flex-col w-full items-center justify-center '>
            <h1 className='flex flex-col text-2xl lg:text-6xl items-center justify-center font-poppins text-white '>We are changing the <span>Whole Game</span></h1>

              {/* the buttons on about page */}
            {/* <div className='flex lg:w-1/6 h-fit items-center justify-between gap-4 w-1/2'>
              <button class="btn h-[50px]">
                  Button
              </button>

              <button class="btn h-[50px]">
                  Button
              </button>
            </div> */}

          </div>
          </div>
          {/* the div section that contains the our stroy */}
          <div className='w-full h-fit flex flex-col lg:flex-row  pt-3 pl-4 pr-4'>
              <div className='w-full lg:w-1/2 flex flex-col items-start justify-between'>
                  <h2 className="text-4xl text-yellow-500 font-bold font-poppins">Our Story</h2>
                  <div className="w-full h-fit">
                  <p className='text-md text-[#818287] text-justify font-poppins '>
                  Solution Road Equipment & Spares Ltd is a Company that manufactures Road  construction equipments and Industrial Spare Parts.
                  </p>
                  <p className="font-poppins text-[#818287] text-md text-justify">
                  Solution Road Equipment & Spars Ltd was founded in 2018 upon an experienced and Construction crew. We created a path to standardization as we grow into construction equipments and spare parts. Solution began work in construction in 2019 in various trades of construction which he realized he truly valued manufacturing equipments and so he began framing and construction of spare parts.
                  </p>
                  <p className="font-poppins text-[#818287] text-md text-justify">
                  We quickly gained recognition and respect among general contractors as a professional manufacturing company who’s attention to detail, high quality of work, ability to produce spare parts and our unique building style was noticeably unparalleled. As more and more projects were completed, and through their interaction with Solution on their job sites, we gained the trust of construction companies and commercial government bodies who still today continue to recommend our exceptional work. As the years went by we began to get inquiries from business owners and construction companies for projects such as manufacturing of equipments, parts reproduction and repairs to construction equipments and spare parts. By 2020, we were handling large equipments remodeling projects, as well as additions and production work. 

                  </p>
                    <p className="font-poppins text-[#818287] text-md text-justify">
                    Our philosophy has always been that a quality project begins with the right equipments and the right structure. With this in mind, we have assembled a team of proven elite and educated professionals in which we can place our trust and our clients’ best interests.
                    </p>

                    <p className="font-poppins text-[#818287] text-md text-justify">
                    Solution understands the value of having a professional equipment that can work effectively and efficiently. We are humbled to be a leading manufacturing company in the market and will continue to strive for excellence as we build our reputation by creating for you!
                    </p>
                    
                  </div>
                  <div className='w-full h-fit flex items-center justify-center mb-3'>
                    <div class="spinner">
                      <div></div> 
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  {/* <div className='w-full flex flex-col mt-4'>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium esse odit inventore fugiat dolorum distinctio saepe, quaerat ipsum quisquam quod earum mollitia hic, aperiam similique nesciunt illo vitae corrupti.
                    </p>

                  </div> */}

              </div>

              {/* Our story second section */}
              <div className='w-full lg:w-1/2 flex flex-col justify-between items-center mt-6'>
                  <div className='flex w-full ml-2 justify-between'>
                      
                      <div className='w-full flex flex-col ml-3'>

                        <h3 className="text-[#e2a80a]">Longevity</h3>
                        <p className="text-poppins font-bold text-[#818287] text-md text-justify">
                          The company has been in the business for a significant amount of time, which demonstrates our ability to adapt to changing market conditions and provide consistent service to their customers
                        </p>
                      </div>
                  </div>
                  <div className='flex w-full ml-2 justify-between'>
                      
                      <div className='w-full flex flex-col ml-3'>
                        <h3 className="text-[#e2a80a]">Knowledge</h3>
                        <p className="text-[#818287] font-poppins text-md text-justify">
                          With years of experience, the company has developed a deep understanding of the construction industry and the equipment needed to complete various projects. Hence we can provide expert advice and guidance to help you make the right equipment choices for your specific needs.
                        </p>
                      </div>
                  </div>
                  <div className='flex w-full ml-2 justify-between'>
                      
                      <div className='w-full flex flex-col ml-3'>
                        <h3 className="text-[#e2a80a]">Quality</h3>
                        <p className="text-[#818287] font-poppins text-md text-justify">
                          The Company has  a reputation  for selling high-quality equipment. They have likely built strong relationships with reputable manufacturers and suppliers, ensuring that they can offer reliable and durable products to their customers.
                        </p>
                      </div>
                  </div>
                  <div className='flex w-full ml-2 justify-between'>
                      
                      <div className='w-full flex flex-col ml-3'>
                        <h3 className="text-[#e2a80a]">Industry Connections</h3>
                        <p className="text-[#818287] font-poppins text-md text-justify">
                          Over the years, the company has  built a network of industry connections, including contractors, suppliers, and manufacturers. This network can be a valuable resource for  customers, providing access to a wide range of products and services that has help us complete  construction projects more efficiently and effectively.
                        </p>
                      </div>
                  </div>
                  <div className='flex w-full ml-2 justify-between'>
                      
                      <div className='w-full flex flex-col ml-3'>
                        <h3 className="text-[#e2a80a]">Customer Service</h3>
                        <p className="text-[#818287] font-poppins text-md text-justify">
                          The Company understands the importance of providing excellent customer service. We have refined our processes and systems to ensure that we can efficiently handle customer inquiries, orders, and after-sales support.
                        </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Our Missions Section */}

          <div className='w-full flex flex-col md:flex-row items-center justify-between pl-4 pr-4'>
              <div className='md:w-1/2 w-full '>
                  <div className='w-full flex items-start'>
                    <h1 className='text-white font-poppins lg:text-4xl text-2xl'>Our Mission</h1>
                  </div>
                  <div className="w-full px-4">
                    <p className="font-poppins text-[#818287] text-md text-justify">
                    To be a leading construction and manufacturing company in the global market.
                    To become the customers' most preferred choice by attaining excellence in quality and timely completed value added projects.
                    To provide the highest level of service in the construction industry while offering superior craftsmanship to every project, we handle.
                    To continually innovate, develop and adopt state-of-the-art technology in methods and materials to enhance productivity and cost effectiveness.
                    To continually improve the competence of our team, and employ diverse, innovative & results-oriented personals, motivated to deliver excellence.
                    To build a safety culture aimed at continually reducing the frequency severity rate towards achieving zero accidents.
                    To identify and mitigate all the environmental impacts arising from our activities, and comply with applicable environmental norms.
                    </p>
                  </div>
                  {/* <div className='flex w-full items-center justify-between '>
                      <div>
                        <h2>100%</h2>
                        <p>Transparency</p>
                      </div>
                      <div>
                        <h2>70M+</h2>
                        <p>Emails Per month</p>
                      </div>
                      <div>
                        <h2>10k</h2>
                        <p>Monthly Work Done</p>
                      </div>
                  </div> */}
              </div>

              <div className='w-full lg:w-1/2 '>
              <img crossorigin="anonymous"  src={MissionPic}alt="mechain" className="w-full h-[20rem]" />
              </div>
          </div>

          {/* Our vision sections  */}

          <div className='w-full bg-[#161616] flex flex-col md:flex-row justify-between pl-4 mt-4'>
              <div className='w-full lg:w-1/2 '>
              <img crossorigin="anonymous"  src={visionPic}alt="mechain" className="w-full h-[20rem]" />
              </div>
              <div className='lg:w-1/2 w-full'>
                  <div className='w-full flex items-center justify-center'>
                    <h1 className='text-white font-poppins font-bold'>Our Vision</h1>
                  </div>
                  <div className='w-full px-4'>
                      <p className="font-poppins text-[#818287] text-md text-justify">
                      To become the leading construction & manufacturing firm, while delivering projects that consistently exceed international standards and provide exceptional customer satisfaction.
                      To continually deliver excellent value & innovative construction solutions to meet our clients' requirements.
                      Using modern principles and sophisticated technologies, Solution Road Equipment And Spars Limited envisions being the primary preference at all times both nationally and globally, for their renowned excellence, quality, performance and reliability in all types of constructions.

                      </p>
                  </div>
                  {/* <div>
                  <img crossorigin="anonymous"  src={MissionPic}alt="mechain" className="w-full h-[20rem]" />
                  </div> */}
              </div>
          </div> 

          {/* Leading Strong teams */}
              
         <div className="w-full h-fit">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-yellow-500 font-bold">Our Strong Team</h1>
            </div>

         <div className="w-full items-center justify-center ">
         <div className='w-full  gap-2 items-center justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-4 pr-4'>
              {
                Team && Team.map(team =>{
                  return(
                    <div className="teamcard border-white w-full md:w-[300px] h-[380px] flex flex-col items-center justify-between text-left mb-3 lg:mb-0">
                      <div className='rounded-full w-[110px] h-[120px] bg-black mb-4'>
                        <img className=" rounded-full h-auto w-full lg:mr-0 " src={`${base.local}/images/`+team.ImagePath } alt="Image description"/>
                      </div>
                      <h1 className='text-[18px]  text-white '>
                        {team.Name}
                      </h1>
                      <p className='text-md font-poppins text-[#dea2eb] text-center font-bold'>
                       {team.Position}
                      </p>
                      <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
                        <IoLogoWhatsapp className="text-lg" color="#3dbf4f"/> {team.whatsAppNumber}
                      </h1>
                      <h1 className='text-[14px] flex justify-between gap-2 items-center  text-white '>
                        <BsFillTelephoneInboundFill className="text-lg" color="#00f6ff"/> {team.PhoneNumber}
                      </h1>
                    

                  </div>
                  )
                })
              }
              
            </div>
         </div>
         </div>

         <Footer/>
    </div>
  )
}

export default About