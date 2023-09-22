import {useState, useEffect} from 'react'
import axios from "axios"
import base from "base.js"
import {LuSaveAll} from "react-icons/lu";
import { motion } from 'framer-motion';
import MachinaryContext from "Hooks/useMachinaryContext"

const Team = () => {
    const URL = base.url

    const [File, setFile] = useState()

    const [TeamName, setTeamName] = useState("")

    const [Position, setPosition] = useState("")

    const [PhoneNumber, setPhoneNumber] = useState("")

    const [Email, setEmail] = useState("")

    const [whatsAppNumber, setwhatsAppNumber] = useState("")

    const [Error, setError] = useState("")

    const [Message, setMessage] = useState()

    const handlefile =(e)=>{
        setFile(e.target.files[0])
    }

    const handleupload =()=>{
        const formdata = new FormData()
        formdata.append("image",File)
        formdata.append("Name",TeamName)
        formdata.append("PhoneNumber",PhoneNumber)
        formdata.append("Email",Email)
        formdata.append("whatsAppNumber",whatsAppNumber)
        

        axios.post(`${URL}/api/teams`,formdata,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((res =>{
            if (res.data){
                setMessage("successful")
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
  return (
    <div className="w-full h-screen overflow-scroll p-4 main-cont ">
            <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                
                {/* Adding data to the team */}

                        <div className="w-full h-fit flex flex-col gap-6 md:gap-0 rounded-xl" >
                        
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
                            required
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
                            <input className=" width-border md:p-6 border-[#fdc901] rounded-xl" type="file" onChange={handlefile} />
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
                        

                        {/* <div className="w-full items-center md:items-left h-fit pl-4 mt-2 justify-center">
                            <button className=" border border-blue-500 w-[14rem] rounded-xl md:w-[28rem]" onClick={()=>{setNotModel(!NotModel)}}>
                                <AiOutlineDropbox className='w-[300px] ' color="#22a7f2"/>
                                Add models and Capacity for this Equipment
                            </button>

                            <div className={`${NotModel ? "hidden":"block"} flex flex-col gap-4 w-full mt-6 h-fit text-left `}>
                                <div className="w-full h-fit flex items-center justify-between">
                                <h1 className="text-white hidden md:block font-poppins text-2xl">Model Name</h1>

                                <input 
                                className="border-b border-blue-500 w-[40rem]" placeholder="Model Name" type="text"
                                value={ModelName}
                                style={{backgroundColor: "transparent"}}
                                onChange={(e) => setModelName(e.target.value)}
                                />
                                </div>

                                <div className="w-full h-fit flex items-center justify-between">
                                <h1 className="text-white hidden md:block font-poppins text-2xl">Model Capacity</h1>

                                <input 
                                className="border-b border-blue-500 w-[40rem]" placeholder="Model Capacity" type="text"
                                style={{backgroundColor: "transparent"}}
                                value={ModelCapcity}
                                onChange={(e) => setModelCapcity(e.target.value)}
                                />
                                </div>
                                <div className="w=full h-fit flex items-center justify-center">
                                <button className="font-poppins text-white text-xl" onClick={AddModel}>
                                        Add More Models
                                    </button>
                                </div>
                            </div>
                        </div> */}

                        
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
                </motion.div>
    </div>
  )
}

export default Team