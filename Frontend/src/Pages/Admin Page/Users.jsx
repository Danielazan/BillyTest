import {useState, useEffect} from 'react'
import axios from "axios"
import base from "base.js"
import { motion } from 'framer-motion';

function Users() {
    const URL = base.local

    // const [Mangers, setMangers] = useState(second)
  return (
    <div className="w-full h-fit md:h-screen overflow-scroll p-4 main-cont ">
         <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full h-fit"
                >
                {/* <div className={`${EditMember ? "flex":"hidden"} mt-4 w-full h-fit`}>
                        {
                        Teams && <div className={`w-full overflow-scroll showscroll`}>
                            <table className="min-w-full text-center text-sm font-light font-poppins text-white h-fit">
                              <thead class="border-b font-medium dark:border-neutral-500 bg-[#7d919a]">
                                <tr className="">
                                  <th scope="col" className="px-6 py-4">Member Id</th>

                                  <th scope="col" className="px-6 py-4">FullName</th>
                                  
                                  <th scope="col" className="px-6 py-4">Position</th>
                                  
                                  <th scope="col" className="px-6 py-4 ">PhoneNumber</th>

                                  <th scope="col" className="px-6 py-4 ">whatsAppNumber</th>
                                  <th colspan="2" scope="col" className="px-6 py-4 ">Email</th>
                                </tr>

                                
                              </thead>
                              <tbody>
                                  {
                                    Teams.map((team,index) =>{
                                      return(
                                        team.id === SaveEditID ?
                                        
                                            

                                        <tr>
                                            <td 
                                        
                                        className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                            {team.id}
                                            </td>

                                            <td 
                                        
                                            className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                    <input 
                                        className="border border-blue-500   w-[8rem] text-white rounded-xl p-2"  
                                        placeholder={team.Name} 
                                        type="text"
                                        value={TeamName}
                                        style={{backgroundColor: "transparent"}}
                                        onChange={(e) => setTeamName(e.target.value)}
                                    />
                                        </td>
                                        
                                        <td 
                                        className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                            <input 
                                                    className="w-[8rem] p-2 border border-blue-500 rounded-xl"  
                                                    placeholder={team.Position} 
                                                    type="text"
                                                    name="cap"
                                                    value={Position}
                                                    style={{backgroundColor: "transparent"}}
                                                    onChange={(e)=>{setPosition(e.target.value)}}
                                                />
                                        </td>

                                        <td 
                                        className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                            <input 
                                                    className="w-[8rem] p-2 border border-blue-500 rounded-xl"  
                                                    placeholder={team.PhoneNumber} 
                                                    type="text"
                                                    name="cap"
                                                    value={PhoneNumber}
                                                    style={{backgroundColor: "transparent"}}
                                                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                                />
                                        </td>

                                        <td 
                                        className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                            <input 
                                                    className="w-[8rem] p-2 border border-blue-500 rounded-xl"  
                                                    placeholder={team.whatsAppNumber} 
                                                    type="text"
                                                    name="cap"
                                                    value={whatsAppNumber}
                                                    style={{backgroundColor: "transparent"}}
                                                    onChange={(e)=>{setwhatsAppNumber(e.target.value)}}
                                                />
                                        </td>

                                        <td 
                                        className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                            <input 
                                                    className="w-[8rem] p-2 border border-blue-500 rounded-xl"  
                                                    placeholder={team.Email} 
                                                    type="text"
                                                    name="cap"
                                                    value={Email}
                                                    style={{backgroundColor: "transparent"}}
                                                    onChange={(e)=>{setEmail(e.target.value)}}
                                                />
                                        </td>

                                        <td className="bg-black whitespace-nowrap px-6 py-4 flex flex-col justify-between gap-4">

                                        <input className=" w-[10rem] border md:p-2 border-[#fdc901] rounded-xl" type="file" onChange={handlefile} />
                                        

                                        <button
                                        onClick={()=>handleEdit(team.id)} 
                                        className="bg-blue-500 text-xl rounded-full font-bold font-poppins w-[6rem] h-[2rem]">
                                            Update
                                        </button>
                                        </td>
                                        
                                        </tr>
                                       
                                        :
                                        <tr
                                  className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                  <td className=" bg-black whitespace-nowrap px-6 py-4 font-medium">
                                    {team.id}
                                  </td>
                                  <td className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                  {team.Name} 
                                  </td>
                                  <td class="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                  {team.Position} 
                                  </td>

                                  <td class="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                  {team.PhoneNumber} 
                                  </td>

                                   <td class="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                  {team.whatsAppNumber} 
                                  </td>

                                   <td class="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                  {team.Email} 
                                  </td>

                                   <td class="bg-black whitespace-nowrap flex flex-col items-center justify-between gap-2 px-6 py-4">
                                    <button 
                                    onClick={()=>{
                                        setSaveEditID(team.id)
                                        setScrollBar(false)
                                    }}
                                    className="bg-green-500 text-xl rounded-full font-bold font-poppins w-[6rem] h-[2rem]">
                                      Edit
                                    </button>

                                    <button 
                                     onClick={()=>{handleDelete(team.id)}}
                                    className="bg-red-500 text-xl rounded-full font-bold font-poppins w-[6rem] h-[2rem]">
                                      Delete
                                    </button>
                                    </td>
                                    
                                    </tr>
                                      )
                                    })
                                  }
                              </tbody>
                            </table>
                        </div>
                        }
                        </div> */}
                </motion.div>
        
    </div>
  )
}

export default Users