import {useState,useEffect} from 'react'
import "./styles/voltagebtn.css"
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'components/Navbars';
import Excavator from 'asstes/Equipments/excavato.jpg'
import Equi2 from 'asstes/Equipments/equi2.jpg'
import Equi3 from 'asstes/Equipments/equi3.jpg'
import Equi4 from 'asstes/Equipments/equi4.jpg'
import Footer from 'Pages/Hero Page/Footer';
import axios from "axios"
import MachinaryContext from "Hooks/useMachinaryContext"
import base from "base.js"

const EquiImages = () => {

    
    const [showAllCards, setShowAllCards] = useState(false);

    const navigate = useNavigate();

    const {mechines, dispatchMachine} = MachinaryContext()

   
    useEffect(() => { 
      
       axios.get(`${base.local}/api/machine`).then((res)=>{
        const json = res.data.reverse()

        // console.log(JSON.parse(json[4].Model))
        
         dispatchMachine({type:"Display Machines",payload:json})
      })
      
      
    }, [dispatchMachine])
    // console.log(mechines)

    const visibleCards = showAllCards ? mechines : mechines.slice(0, 3);

  const handleButtonClick = () => {
    
    setShowAllCards(true);
  };

  const Desfun = (id) => {
    navigate(`/Des/${id}`)
  };
  return (
  <div className="w-full ">
      <Navbar/>
    <div className='w-full h-fit flex flex-col md:flex-row items-center px-2'>
        <div className=' w-full md:w-2/4 h-[]'>
            <Carousel>
                {mechines && mechines.map((image)=>(
                   
                    <Carousel.Item interval={2000} as={"div"} >
                <img crossorigin="anonymous"  src={`${base.local}/images/`+image.ImagePath }alt="mechain" className="w-full h-[20rem] md:h-[22rem]" />
                    {/* <Carousel.Caption>
                      <h3 className='text-black'>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                
                  
                ))}
            </Carousel>
        </div>

        <div className='w-full md:w-2/4  h-fit px-3 '>
            <div className='w-full flex items-center justify-center'>
              <h1 className="text-poppins text-white text-2xl">Discover Our High-Quality Road Construction Equipment</h1>
            </div>

            <div className='w-full '>
              <div className='w-full '>
                  <p className='text-poppins text-[#c0ccc0] '>
                  Road construction is a specialized area of construction that requires various specialized equipment to make the job safer and easier. At our company, we offer a wide range of high-quality road construction equipment that can help you achieve efficient and safe projects. Our equipment is designed to meet the demands of different types of road construction projects, whether it's building a new road or rehabilitating an old one. We offer a variety of machines, including asphalt plants, cold planers, drum rollers, and more. Our equipment is designed to provide the best results while minimizing the labor cost and time required for the project. With our commitment to excellence and innovation, we aim to be the go-to resource for all your road construction equipment needs. Join us on this journey as we help you build the path to success.
                  </p>
              </div>

              <div className='w-full flex items-center justify-center'>
                <button className="voltage-button">
                  View All Equipments
                </button>
              </div>

            

            </div>
        </div>
    </div>
      
        {/* section for machine image display */}
      <div className="w-full h-fit p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                    mechines && visibleCards.map(mec =>{
                      return(
                        <div className="w-full relative">
                          <img crossorigin="anonymous"  src={`${base.local}/images/`+mec.ImagePath }alt="mechain" className="w-full h-[20rem]" />
                          <div className="absolute w-[15rem] h-[7rem]  bottom-3 left-[3rem] md:left-28 flex flex-col items-center justify-center bg-[#21252962]">

                          <h1 className="text-2xl text-poppins font-bold text-[#fdc901]">{mec.Name}</h1>
                             

                              
                                <button class="desbtn" onClick={()=>{Desfun(mec.id)}}>
                                    <span class="desbtn-content">Description</span>
                                </button>
                            

                          </div>
                        </div>
                      )
                    })
                  }


            
          </div>

                {/* button to view all equipments */}
          <div className='w-full h-fit flex items-center justify-center mt-2'>
              {!showAllCards && (
                <button data-label="Register" class="rainbow-hover" onClick={()=>handleButtonClick()}>
                <span class="sp">See All Equipments</span>
              </button>
          )}
          </div>
      </div>

      {/* Footer */}

      <Footer/>
  </div>
  )
}

export default EquiImages