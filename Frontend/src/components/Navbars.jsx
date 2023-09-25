import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from "../asstes/Solution Road New Logo.png"
import { useNavigate } from 'react-router-dom';
import "./Nabars.css"
import { BsFillGrid3X3GapFill,BsFillFileExcelFill} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

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
            <span className='font-poppins font-bold cursor-pointer text-sm text-yellow-500'>Solutions Road</span>
            <span className='font-poppins font-bold cursor-pointer text-yellow-500 text-[10px]'>Equipments & Spars Ltd</span>
        </div>
       
        <div className='flex gap-6 '>
          <NavLink to='/' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Home</NavLink>
          <NavLink to='/Equi' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Equipments</NavLink>
          <NavLink to='/About' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>About</NavLink>
          <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Services</NavLink>
          <NavLink to='/Admin' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Admin</NavLink>
          <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Contact</NavLink>
        </div>
      </nav>
          {/* mobile navbar */}
      <nav className=' w-screen flex    justify-between  lg:hidden z-50' >
        <div className="flex flex-col justify-center  items-center">
          <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
          <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
          </div>
          <span className='font-poppins bg-black font-bold cursor-pointer text-sm text-yellow-500'>Solutions Road</span>
            <span className='font-poppins bg-black font-bold cursor-pointer text-yellow-500 text-[10px]'>Equipments & Spars Ltd</span>
        </div>
       
        <div className={`flex flex-col  md:hidden  relative  px-4`}>
          {/* {toogle ? <BsFillFileExcelFill color="white" onClick={()=>handleClick()}   className="text-9xl" /> : <BsFillGrid3X3GapFill color="white" className="text-6xl" />} */}
          {toogle && <GiHamburgerMenu color="white" className="text-4xl mt-2" onClick={()=>handleClick()} />}
          {!toogle && <BsFillFileExcelFill color="white" className="text-4xl mt-2" onClick={()=>handleClick()} />}
        <div className={`${toogle ? "hidden":"flex"} mt-4 flex rounded-md flex-col gap-6 bg-black w-[120px] items-center right-0 absolute top-8 justify-center `}>
          <NavLink to='/' className={`font-poppins font-bold cursor-pointer text-[16px] text-white no-underline`}>Home</NavLink>
          
          <NavLink to='/About' className={`font-poppins font-bold cursor-pointer text-[16px] text-white no-underline`}>About</NavLink>
          <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[16px] text-white no-underline`}>Services</NavLink>
          <NavLink to='/Admin' className={`font-poppins font-bold cursor-pointer text-[18px] text-white no-underline`}>Admin</NavLink>
          <NavLink to='' className={`font-poppins font-bold cursor-pointer text-[16px] text-white no-underline`}>Contact</NavLink>

          <NavLink to='/Equi' className={`font-poppins font-bold cursor-pointer text-[18px] text-white no-underline`}>Equipments</NavLink>
        </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbars

