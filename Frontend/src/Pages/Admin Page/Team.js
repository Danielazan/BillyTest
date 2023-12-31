import {useState, useEffect} from 'react'
import "./styles/showscrollbar.css"
import axios from "axios"
import base from "base.js"
import {LuSaveAll} from "react-icons/lu";
import { motion } from 'framer-motion';
import TeamContext from "Hooks/Team"

import "./styles/EditTeambtn.css"

const Team = () => {
    const URL = base.local

    const {Team, dispatchTeam} = TeamContext()

    const [File, setFile] = useState()

    const [EditMember, setEditMember] = useState(false)

    const [TeamName, setTeamName] = useState("")

    const [Position, setPosition] = useState("")

    const [PhoneNumber, setPhoneNumber] = useState("")

    const [Email, setEmail] = useState("")

    const [whatsAppNumber, setwhatsAppNumber] = useState("")

    const [Error, setError] = useState("")

    const [Message, setMessage] = useState()


    const [SaveEditID, setSaveEditID] = useState(-1)

    const [ScrollBar, setScrollBar]=useState(true)


    const handlefile =(e)=>{
        setFile(e.target.files[0])
    }

    const handleupload =()=>{
        const formdata = new FormData()
        formdata.append("image",File)
        formdata.append("Name",TeamName)
        formdata.append("PhoneNumber",PhoneNumber)
        formdata.append("Position",Position)
        formdata.append("Email",Email)
        formdata.append("whatsAppNumber",whatsAppNumber)
        

        axios.post(`${URL}/api/teams`,formdata,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((res =>{
            const json =res.data
            if (res.data){
                setMessage("successful")

                dispatchTeam({type:"Create Team",payload:json})

            }
            console.log(res.data)
        })).catch(error =>{
            setError(error.response.data)
            console.log(error.response.data)
        })
        setPosition("")
        setTeamName("")
        setPhoneNumber("")
        setEmail("")
        setwhatsAppNumber("")
        setFile()
    }

    const handleEdit = async (id)=>{
        const formdata = new FormData()
        formdata.append("image",File)
        formdata.append("Name",TeamName)
        formdata.append("PhoneNumber",PhoneNumber)
        formdata.append("Email",Email)
        formdata.append("whatsAppNumber",whatsAppNumber)
        formdata.append("Position",Position)

        await axios.put(`${URL}/api/teams/${id}`, formdata).then((res) => {
          const json = res.data
          
          dispatchTeam({type:"Create Team",payload:json})
          console.log(res.data);
        });

        setSaveEditID(-1)
    }

    const handleDelete = async (id)=>{
        await axios.delete(`${URL}/api/teams/${id}`).then((res) => {
          const json = res.data
          
          dispatchTeam({type:"DeLETE Team",payload:json})
          console.log(res.data);
        });
       }

    useEffect(() => { 
      
        axios.get(`${URL}/api/teams`).then((res)=>{
         const json = res.data.reverse()
 
         console.log(json)
         
          dispatchTeam({type:"Display Team",payload:json})

        
       })
       
       
     }, [dispatchTeam])

   

  return (
    <div className="w-full h-fit md:h-screen overflow-scroll p-4 main-cont ">
            <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full h-fit"
                >
                
                {/* Adding data to the team */}

                   <div className="w-full flex justify-end h-fit">
                    <div className="Editmainbtn">
                            <div className="Editupbtn">
                                <button
                                onClick={()=>{setEditMember(false)}}
                                className="Editcard1btn">
                                <h2 className=" text-[1rem] font-poppins font-bold text-green-500 addmem">
                                    Add Member
                                    </h2>                          
                                </button>
                                
                                <button 
                                    onClick={()=>{setEditMember(true)}}
                                className="Editcard2btn">
                                    <h2 className=" text-[1.1rem] font-poppins font-bold text-green-500 editmem">
                                    Edit Member
                                    </h2> 
                                </button>
                            </div>
                        </div>
                   </div>

                        <div className={`${!EditMember ? "flex":"hidden"} w-full h-[20rem]  flex-col gap-6 md:gap-0 rounded-xl` }>
                        
                        <div className="w-full h-fit flex items-center justify-between p-6" >
                            <h1 className='text-2xl hidden md:block text-blue-500 font-poppins'>Full Name</h1>
                            <input 
                            className="border-b text-white font-bold border-blue-500 w-[40rem]" placeholder="Full Name" type="text"
                            style={{backgroundColor: "transparent"}}
                            value={TeamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-fit flex  items-center justify-between p-6" >
                            <h1 className='text-2xl hidden md:block text-blue-500 font-poppins'>Position</h1>
                            <input 
                            className="border-b text-white font-bold border-blue-500 w-[40rem]" placeholder="Position In the company" type="text"
                            style={{backgroundColor: "transparent"}}
                            value={Position}
                            onChange={(e) => setPosition(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-fit flex  items-center justify-between p-6" >
                            <h1 className='text-2xl hidden md:block text-blue-500 font-poppins'>Phone Number</h1>
                            <input 
                            className="border-b text-white font-bold border-blue-500 w-[40rem]" placeholder="Phone Number" type="text"
                            style={{backgroundColor: "transparent"}}
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-fit flex  items-center justify-between p-6" >
                            <h1 className='text-2xl hidden md:block text-blue-500 font-poppins'>Email</h1>
                            <input 
                            className="border-b text-white font-bold border-blue-500 w-[40rem]" placeholder="Email eg.Dan@gmail.com" type="text"
                            style={{backgroundColor: "transparent"}}
                            rteamred
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-fit flex  items-center justify-between p-6" >
                            <h1 className='text-2xl hidden md:block text-blue-500 font-poppins'>whatsApp Number</h1>
                            <input 
                            className="border-b text-white font-bold border-blue-500 w-[40rem]" placeholder="whatsApp Number" type="text"
                            style={{backgroundColor: "transparent"}}
                            value={whatsAppNumber}
                            onChange={(e) => setwhatsAppNumber(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-fit flex flex-col md:flex-row md:items-center justify-between p-6  " >
                            <h1 className='text-2xl text-blue-500 font-poppins'>Add Profile Picture</h1>
                            <input className=" w-fit border md:p-6 border-[#fdc901] rounded-xl" type="file" onChange={handlefile} />
                        </div>
                        <div className="w-full items-center flex justify-center flex-col gap-6">
                            {/* <button className="rounded-full w-[12rem] h-[4rem] flex items-center justify-evenly p-4" style={{ border: '2px solid white' }}
                            onClick={handleupload}
                            >
                                <LuSaveAll className="text-2xl font-bold"
                                color="#c95dff"/>
                                <span className="font-bold text-white font-poppins ">Save</span>
                            </button> */}

                            {Error  && <h2 className="font-poppins font-extrabold text-xl text-red-500">{Error.error}</h2>}

                            {Message && <h2 className="font-poppins font-extrabold text-xl text-green-500">{Message}</h2>}
                        </div>

                        <div className="w-full mt-4 mb-6 items-center justify-center flex ">
                            <button className=' lg:ml-20' onClick={handleupload}>
                                Submit
                                <div id="clip">
                                    <div id="leftTop" class="corner"></div>
                                    <div id="rightBottom" class="corner"></div>
                                    <div id="rightTop" class="corner"></div>
                                    <div id="leftBottom" class="corner"></div>
                                </div>
                                <span id="rightArrow" class="arrow"></span>
                                <span id="leftArrow" class="arrow"></span>
                        </button>
                        </div>
                        </div>
                        
                        {/* Section to eadit datas on TeamMembers */}
                        <div className={`${EditMember ? "flex":"hidden"} mt-4 w-full h-fit`}>
                        {
                        Team && <div className={`w-full overflow-scroll showscroll`}>
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
                                    Team.map((team,index) =>{
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
                        </div>
                        
                </motion.div>
    </div>
  )
}

export default Team