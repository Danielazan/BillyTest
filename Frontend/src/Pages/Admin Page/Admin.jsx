import Sidebar from 'components/sidebar'
import {useState, createContext,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';
import { AiFillHome } from "react-icons/ai";
import {BsFillPeopleFill } from "react-icons/bs";
import { MdShoppingBag,MdNotificationsActive } from "react-icons/md";
import  Navbar  from 'components/Navbars';
import { SiBlockchaindotcom } from "react-icons/si";
import { BsFillProjectorFill,BsBrowserSafari } from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { BsFillGrid3X3GapFill,BsFillFileExcelFill} from "react-icons/bs";
import Dashboard from "./Dashboard"
import Equi from "./setEqui"
import EditEqui from "./EditEqui"
import Team from "./Team"


import logo from "asstes/Solution Road New Logo.png"

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [DashboardVariable, setDashboardVariable] = useState(<Dashboard/>);
  
    return (
      <DashboardContext.Provider value={[DashboardVariable, setDashboardVariable]}>
        {children}
      </DashboardContext.Provider>
    );
  };

const Admin = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const [Main, setMain] = useState(<Dashboard/>)

    const [DashboardVariable, setDashboardVariable] = useContext(DashboardContext)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

//   useEffect(() => {
//     setDashboardVariable(<Dashboard/>)
  
    
//   }, [])
  
  return (
    <div className='w-full h-fit bg-[#081225]'>
        <Navbar/>

        <div className='w-full flex items-center pl-4 md:hidden'>
            {!isOpen && <GiHamburgerMenu color="white" className="text-4xl mt-2" onClick={()=>toggleSidebar()} />}
            {isOpen && <BsFillFileExcelFill color="white" className="text-4xl mt-2" onClick={()=>toggleSidebar()} />}
        </div>

        <div className="w-full h-fit flex flex-col md:flex-row">
            <div className='w-1/6 h-fit  ml-4 hidden md:block' >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                    <div className='w-full bg-black rounded-xl flex flex-col  h-fit'style={{ border: '2px solid white' }}>

                        <div className='w-full mt-3 p-4'>
                            <h1 className='text-white font-poppins text-[1.6rem]'>Solution Roads</h1>
                        </div>

                        <div className='w-full items flex flex-col justify-between  gap-10 mb-3 pl-4'>
                            <div className='flex items-center justify-start gap-2'>
                                <SiBlockchaindotcom/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<Dashboard/>)
                                    
                                    }} 
                                    className='no-underline text-white font-poppins'>Dashboard</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillPeopleFill/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<Equi/>)
                                    
                                }} className='no-underline text-white font-poppins'>New Equipmet</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillProjectorFill/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<EditEqui/>)
                                }} className='no-underline text-white font-poppins'>Edit Equipments</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsBrowserSafari/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<Team/>)
                                }} className='no-underline text-white font-poppins'>New Team Member</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <MdNotificationsActive/>
                                <Link to="/" className='no-underline text-white font-poppins'>Notification</Link>
                            </div>
                            <div className='flex items-start justify-start gap-2'>
                                <BiSolidLogOut/>
                                <Link to="/" className='no-underline text-white font-poppins'>Login Out</Link>
                            </div>
                            
                        </div>

                        <div className='items-center h-fit w-full flex flex-col '>
                        <div className='w-full h-auto flex flex-col items-center text-center justify-center'>
                            <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
                                <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                            </div>
                            
                            <span className='font-poppins ml-4 mr-2 font-bold cursor-pointer text-sm lg:text-lg flex  text-yellow-500'>Solutions Road Equipments & Spars Ltd</span>
                            
                        </div>
                    </div>

                    </div>
                </motion.div>
            </div>

            {/* Mobile view */}

            <div className={`${isOpen ? 'block' : 'hidden'}`} >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                    <div className='w-full bg-black rounded-xl flex flex-col  h-fit'style={{ border: '2px solid white' }}>

                        <div className='w-full mt-3 p-4'>
                            <h1 className='text-white font-poppins text-[1.6rem]'>Solution Roads</h1>
                        </div>

                        <div className='w-full items flex flex-col justify-between  gap-10 mb-3 pl-4'>
                            <div className='flex items-center justify-start gap-2'>
                                <SiBlockchaindotcom/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<Dashboard/>)
                                    toggleSidebar()
                                    }}
                                    className='no-underline text-white font-poppins'>Dashboard</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillPeopleFill/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<Equi/>)
                                    toggleSidebar()
                                    }} 
                                    className='no-underline text-white font-poppins'>New Equipmet</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillProjectorFill/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<EditEqui/>)
                                    toggleSidebar()
                                }} className='no-underline text-white font-poppins'>Edit Equipments</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsBrowserSafari/>
                                <Link onClick={()=>{
                                    setDashboardVariable(<Team/>)
                                    toggleSidebar()
                                }} className='no-underline text-white font-poppins'>New Team Member</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <MdNotificationsActive/>
                                <Link to="/" className='no-underline text-white font-poppins'>Notification</Link>
                            </div>
                            <div className='flex items-start justify-start gap-2'>
                                <BiSolidLogOut/>
                                <Link to="/" className='no-underline text-white font-poppins'>Login Out</Link>
                            </div>
                            
                        </div>

                        <div className='items-center h-fit w-full flex flex-col '>
                        <div className='w-full h-auto flex flex-col items-center text-center justify-center'>
                            <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
                                <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                            </div>
                            
                            <span className='font-poppins ml-4 mr-2 font-bold cursor-pointer text-sm lg:text-lg flex  text-yellow-500'>Solutions Road Equipments & Spars Ltd</span>
                            
                        </div>
                    </div>

                    </div>
                </motion.div>
            </div>
            {/* Second half of the the Admin page begins here */}
            <div  className=" w-full md:w-5/6 ">
                {DashboardVariable}
            </div>
        </div>
    </div>
  )
}

export default Admin