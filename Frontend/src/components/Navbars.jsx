import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from "../asstes/Solution Road New Logo.png"
import { useNavigate } from 'react-router-dom';
import "./Nabars.css"
import { BsFillGrid3X3GapFill,BsFillFileExcelFill} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { DiRequirejs } from "react-icons/di";

const Navbars = () => {
  const [navbar, setNavbar] = useState(false);
  const [toogle ,settoogle] =useState(true)
  const navigate = useNavigate();

  const handleClick = () => {
    settoogle(!toogle)
    console.log('React icon clicked!');
  };
  const showNav = () => {
    settoogle(!toogle)
    console.log('React icon clicked!');
  };
  return (
    <div className='w-screen  lg:px-4 relative z-50'>
      <nav className='hidden lg:flex w-full flex py-6 sticky top-0 justify-between items-center px-4 '>
        <div className="flex flex-col justify-center items-center">
        <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
        <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
        </div>
            <span className='font-poppins font-bold cursor-pointer text-sm text-yellow-500'>Solution Road</span>
            <span className='font-poppins font-bold cursor-pointer text-yellow-500 text-[10px]'>Equipments & Spars Ltd</span>
        </div>
       
        <div className='flex gap-6 '>
          <NavLink to='/' className={`font-poppins flex items-center justify-between font-bold cursor-pointer text-[20px] text-NavTextColor no-underline`}>
            <AiFillHome/>
            Home
            </NavLink>
          <NavLink to='/Equi' className={`font-poppins flex items-center justify-center font-bold cursor-pointer text-[20px] outline-black text-NavTextColor no-underline`}>
            <DiRequirejs/>
            Equipments
            </NavLink>
          <NavLink to='/About' className={`font-poppins flex items-center justify-center font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>
            <FaCodeCompare/>
            About
            </NavLink>
          {/* <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Services</NavLink> */}
          <NavLink to='/Admin' className={`font-poppins flex items-center justify-center font-bold cursor-pointer text-[20px] text-NavTextColor no-underline`}>
            <RiAdminFill/>
            Admin
          </NavLink>
          {/* <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Contact</NavLink> */}
        </div>
      </nav>
          {/* mobile navbar */}
      <nav className=' w-screen flex    justify-between  lg:hidden z-50' >
        <div className="flex flex-col justify-center  items-center p-6">
          <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
          <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
          </div>
          <span className='font-poppins font-bold cursor-pointer text-[14px] text-red-500'>Solution Road</span>
            <span className='font-poppins  font-bold cursor-pointer text-red-500 text-[13px]'>Equipments & Spars Ltd</span>
        </div>
       
        <div className={`flex flex-col  md:hidden  relative  px-4`}>
          {toogle && <GiHamburgerMenu color="white" className="text-4xl mt-2" onClick={()=>handleClick()} />}
          {!toogle && <BsFillFileExcelFill color="white" className="text-4xl mt-2" onClick={()=>handleClick()} />}
        <div className={`${toogle ? "hidden":"flex"} mt-4 flex rounded-md flex-col gap-6 bg-black w-[140px]  right-0 absolute top-8 justify-center items-center px-2`}>

            <NavLink to='/' className={`font-poppins flex items-center justify-start gap-2 w-full font-bold cursor-pointer text-[16px] text-white no-underline pt-2`}>
            <AiFillHome className="text-[16px]"/>
            <span>Home</span>
              </NavLink>
         
          
          <NavLink to='/About' className={`font-poppins font-bold flex items-center justify-start gap-2 w-full cursor-pointer text-[16px] text-white no-underline`}>
            <FaCodeCompare/>
            <span>About</span>
            </NavLink>

          {/* <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[16px] text-white no-underline`}>Services</NavLink> */}
          <NavLink to='/Admin' className={`font-poppins font-bold flex items-center justify-start gap-2 w-full cursor-pointer text-[18px] text-white no-underline`}>
            <RiAdminFill/>
            <span>Admin</span>
          </NavLink>

          {/* <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[16px] text-white no-underline`}>Contact</NavLink> */}

          <NavLink to='/Equi' className={`font-poppins flex items-center justify-start gap-2 w-full font-bold cursor-pointer text-[16px] text-white no-underline pb-2`}>
            <DiRequirejs/>
            <span>Equipments</span>
          </NavLink>
        </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbars

