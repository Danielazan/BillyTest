import {useEffect,useState,useContext} from 'react'
import { motion } from 'framer-motion';
import { HiOutlineSearch } from "react-icons/hi";
import "./styles/containt.css"
import axios from "axios"
import MachinaryContext from "Hooks/useMachinaryContext"
import base from "base.js"
import "./styles/containt.css"
import {DashboardContext } from './Admin';
import EditEqui from "./EditEqui"
import Teams from "./Team"
import TeamContext from "Hooks/Team"

const Dashboard = () => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const optionsSmall = { month: 'short', day: 'numeric' };
    const formattedDateSmall = today.toLocaleDateString('en-US', optionsSmall);

    const URL = base.local

    const [remechains, setremechains] = useState([])

    const {mechines, dispatchMachine} = MachinaryContext()

    const [DashboardVariable, setDashboardVariable] = useContext(DashboardContext)

    const [showAllCards, setShowAllCards] = useState(false);

    const {Team, dispatchTeam} = TeamContext()
    
    useEffect(() => {
        axios.get(`${URL}/api/machine`).then((res)=>{
            const json = res.data.reverse()
    
            console.log(json)
            
             dispatchMachine({type:"Display Machines",payload:json})

             setremechains(mechines.reverse())

             console.log(remechains)
          })
          
          axios.get(`${URL}/api/teams`).then((res)=>{
            const json = res.data
    
            console.log(json)
            
            dispatchTeam({type:"Display Team",payload:json})
             

             console.log(remechains)
          })
          
          
    }, [dispatchMachine,dispatchTeam])


    // useEffect(() => {
    //     axios.get(`${URL}/api/teams`).then((res)=>{
    //         const json = res.data
    
    //         console.log(json)
            
    //         dispatchTeam({type:"Create Team",payload:json})
             

    //          console.log(remechains)
    //       })
          
    // }, [dispatchTeam])
    

    const match = mechines.reverse().slice(0,3)
    
    



  return (
    <div className="w-full h-screen overflow-scroll p-4 main-cont ">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                    <div className="w-full h-[4rem] pt-2 rounded-xl " style={{ border: '2px solid white' }}>
                        <div className='w-full flex items-center justify-between pl-2 pr-4 '>
                            
                            <div className='flex items-center justify-between w-[13rem] md:w-fit md:h-fit h-fit border border-gray-300 rounded-xl bg-[#f0f3f463]'>
                                <input
                                    type="text" 
                                    placeholder="Search for equipment"

                                    className="md:pl-6  py-2 
                                    bg-transparent rounded-xl focus:outline-none"
                                />
                                <div className="inset-y-0 left-0 flex items-center md:pl-3 pointer-events-none">
                                    <HiOutlineSearch color='red' className="w-5 h-5 text-2xl  mr-4" />
                                </div>
                            </div>
                            <div className="hidden md:flex w-[5rem] md:w-fit text-white">
                                    <h3>{formattedDate}</h3>
                                </div>

                            <div className="block md:hidden text-white">
                                    <h3>{formattedDateSmall}</h3>
                                </div>
                        </div>

                        
                    </div>
                    
                    {/* second div */}
                    <div className="w-full  h-[30rem] md:h-[25rem] rounded-xl mt-6" style={{ border: '2px solid white' }}>
                         <div className="flex items-center justify-between w-full md:px-4 py-3">
                            <div className="flex flex-col w-1/2 pl-2">
                                <h2 className='text-4xl font-poppins text-white'>List Item</h2>

                                <h3 className='text-sm font-bold text-white '>1000+ <span className='text-gray-300 font-poppins text-sm'>
                                    Machines Available
                                    </span></h3>
                            </div>
                            <div className='flex items-center justify-evenly'>
                                <h2 className='flex flex-col'>
                                    
                                   
                                </h2>
                                {/* vertical Line */}
                                <div className="w-0.5 bg-red-600 h-[2rem]"></div>
                                {/* vertical line ends here */}
                                <h2 className='flex flex-col '>
                                    
                                </h2>
                            </div>
                         </div>

                         {/* the table contents starts here */}

                         
                                {/* show in medium screen up */}
                            <div className="hidden md:block overflow-scroll main-cont  w-full h-[16.6rem] md: h-[14rem]
                            shadow-md md:rounded-xl md:px-4 md:py-3  rounded-lg ">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-black" >
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-white">
                                                Product ID
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-white">
                                                Product name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                            Description
                                            </th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                {
                                  match.map(equi =>{
                                    return(
                                      <tr
                                className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  {equi.id}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">{equi.Name}</td>
                                <td class="whitespace-nowrap px-6 py-4">{equi.Description}</td>
                              </tr>
                                    )
                                  })
                                }
                            </tbody>
                                </table>
                            </div>

                            {/* show on small screen */}
                                 <div className="md:hidden overflow-scroll  w-full h-[20.6rem]
                            shadow-md md:rounded-xl md:px-4 md:py-3  rounded-lg ">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-black" >
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-white">
                                                Product ID
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-white">
                                                Product name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                            Description
                                            </th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                {
                                  match.map(equi =>{
                                    return(
                                      <tr
                                className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  {equi.id}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">{equi.Name}</td>
                                <td class="whitespace-nowrap px-6 py-4">{equi.Description}</td>
                              </tr>
                                    )
                                  })
                                }
                            </tbody>
                                </table>
                            </div>
                        
                    </div>

                    {/* third div section */}
                    <div className="w-full h-[10rem] overflow-scroll main-cont mt-4" >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between rounded-xl pl-4 pr-4 md:pr-0">
                  {
                    mechines && match.map(mec =>{
                      return(
                        <div className="w-[20rem] h-[10rem] relative rounded-xl" onClick={()=>setDashboardVariable(<EditEqui/>)}>
                          <img crossorigin="anonymous"  src={`${base.local}/images/`+mec.ImagePath }alt="mechain" className="w-full md:w-[15rem] h-[10rem]" />
                          {/* <div className="absolute w-[15rem] h-[7rem]  bottom-3 left-[2rem] md:left-28 flex flex-col items-center justify-center bg-[#21252962]">

                          </div> */}
                        </div>
                      )
                    })
                  }


            
          </div>
                    </div>

                    {/* Fourth Section */}

                    <div className="w-full mt-4 hidden md:block overflow-scroll main-cont shadow-md md:rounded-xl md:px-4 md:py-3  rounded-lg " style={{ border: '2px solid white' }}>
                            <div onClick={()=>setDashboardVariable(<Teams/>)} className="w-full flex iteams-center justify-center">
                                <h2 className="font-poppins font-bold text-white">Team Members</h2>
                            </div>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-black" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-white">
                                            Member ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-white">
                                             FullName
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Position
                                        </th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                            {
                              Team.map(team =>{
                                return(
                                  <tr
                            className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {team.id}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">{team.Name}</td>
                            <td class="whitespace-nowrap px-6 py-4">{team.Position}</td>
                          </tr>
                                )
                              })
                            }
                        </tbody>
                            </table>
                    </div>
                    
                    {/* For small Screens Only */}

                    <div className="md:hidden overflow-scroll  w-full h-[20.6rem] mt-4
                            shadow-md md:rounded-xl md:px-4 md:py-3  rounded-lg  " style={{ border: '2px solid white' }}>
                            <div onClick={()=>setDashboardVariable(<Teams/>)} className="w-full flex iteams-center justify-center">
                                <h2 className="font-poppins font-bold text-white">Team Members</h2>
                            </div>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-black" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-white">
                                            Member ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-white">
                                             FullName
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Position
                                        </th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                            {
                              Team.map(team =>{
                                return(
                                  <tr
                            className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {team.id}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">{team.Name}</td>
                            <td class="whitespace-nowrap px-6 py-4">{team.Position}</td>
                          </tr>
                                )
                              })
                            }
                        </tbody>
                            </table>
                    </div>
                </motion.div>
                </div>
  )
}

export default Dashboard