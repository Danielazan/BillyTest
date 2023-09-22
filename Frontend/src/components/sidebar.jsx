import {useState} from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';
import { AiFillHome } from "react-icons/ai";
import {BsFillPeopleFill } from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";
import { SiSequelize} from "react-icons/si";

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
       <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-200 w-64 md:w-16"
   >
         <div className='bg-gray-200  h-screen block'>
            <div className='w-full flex items-center justify-center'>
               <GiHamburgerMenu color="red" className='text-lg' onClick={()=>toggleSidebar()}/>   
            </div>
            <ul className={`p-4 flex flex-col   gap-3 ${isOpen ? 'block' : 'hidden'}`}>
               <li className='flex items-left justify-start gap-2 lg:gap-2 lg:justify-between  '>
                  <AiFillHome/>
                  <Link to=''>Home</Link>
               </li>
               <li className='flex items-center justify-start gap-2 lg:gap-2 lg:justify-between  '>
                  <BsFillPeopleFill/>
                  <Link to=''>Pepole</Link>
               </li>
               <li className='flex items-center justify-start gap-2 lg:gap-2 lg:justify-between  '>
                  <MdShoppingBag/>
                  <Link to=''>Products</Link>
               </li>
               <li className='flex items-center justify-start gap-2 lg:gap-2 lg:justify-between  '>
                  <SiSequelize/>
                  <Link to=''>Equipments</Link>
               </li>
               {/* <li className='flex items-center justify-start gap-2 lg:gap-2 lg:justify-between  '>
                  <Link to=''>Home</Link>
               </li> */}
            </ul>
         </div>
      </motion.div>
   </>
     
  )
}

export default Sidebar