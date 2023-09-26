import {useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import { AiOutlineDropbox } from "react-icons/ai";
import base from "base.js"
import {LuSaveAll} from "react-icons/lu";
import MachinaryContext from "Hooks/useMachinaryContext"
import "./styles/containt.css"


const SetEqui = () => {
    const [File, setFile] = useState()

    const URL = base.local
    
    const [Modelcap, setModelcap] = useState([])
    const [ModelName, setModelName] = useState("")
    const [ModelCapcity, setModelCapcity] = useState("")

    const [NotModel, setNotModel] = useState(false)

    const [EquimentName, setEquimentName] = useState("")
    const [Description, setDescription] = useState("")

    const {mechines, dispatchMachine} = MachinaryContext()

    const [Error, setError] = useState()

    const [LastID, setLastID] = useState()

    const Models ={
        ModelName,
        Capacity:ModelCapcity
    }

       

        const mechinesData = ()=>{
            axios.get(`${URL}/api/machine`).then((res)=>{
                const json = res.data
           
                const lastid = json[json.length -1].id
                console.log(lastid)
                setLastID(lastid)
              })

              return LastID
        }
       const AddModel =async()=>{
        await mechinesData()
        const id=LastID

        console.log(id)

        await axios.post(`${URL}/api/model/${id}`, Models).then((res) => {
            const json = res.data
            
            // dispatchMachine({type:"Display Machines",payload:json})
            console.log(res.data);
          });
           
            setModelcap([...Modelcap, Models])
            setModelName("")
            setModelCapcity("")

            console.log(Modelcap)
            console.log(Modelcap)
        }

    const handlefile =(e)=>{
        setFile(e.target.files[0])
    }

    const handleupload =()=>{
        const formdata = new FormData()
        formdata.append("image",File)
        formdata.append("Name",EquimentName)
        formdata.append("Description",Description)
        formdata.append("Model",JSON.stringify(Modelcap))

        axios.post(`${URL}/api/machine`,formdata,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((res =>{
            console.log(res.data)
            const json =res.data

            mechinesData()

            dispatchMachine({type:"Create Mechains",payload:json})
        })).catch(error =>{
            setError(error.response.data)
            console.log(error.response.data)
        })

        

        setDescription("")
        setEquimentName("")
    }
    useEffect(() => { 
      
        axios.get(`${URL}/api/machine`).then((res)=>{
         const json = res.data
 
         
         
          dispatchMachine({type:"Display Machines",payload:json})
       })
       
       
     }, [dispatchMachine])

  return (
    <div className='w-full h-screen overflow-scroll p-4 main-cont'>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" rounded-xl w-full"
        >
            <div className="w-full h-fit flex flex-col gap-6 md:gap-0 rounded-xl" >
                
                <div className="w-full h-fit flex items-center justify-between p-6" >
                    <h1 className='text-2xl hidden md:block text-blue-500 font-poppins'>Equiment Name</h1>
                    <input 
                    className="border-b text-white font-bold border-blue-500 w-[40rem]" placeholder="Equipment" type="text"
                    style={{backgroundColor: "transparent"}}
                    value={EquimentName}
                    onChange={(e) => setEquimentName(e.target.value)}
                      />
                </div>

                <div className="w-full h-fit flex  items-center justify-between p-6" >
                    <h1 className='text-2xl hidden md:block text-blue-500 font-poppins'>Description</h1>
                    <input 
                    className="border-b text-white font-bold border-blue-500 w-[40rem]" placeholder="Description" type="text"
                    style={{backgroundColor: "transparent"}}
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                      />
                </div>

                <div className="w-full h-fit flex flex-col md:flex-row md:items-center justify-between p-6  " >
                    <h1 className='text-2xl text-blue-500 font-poppins'>Add Image</h1>
                    <input className=" width-border md:p-6 border-[#fdc901] rounded-xl" type="file" onChange={handlefile} />
                </div>
                <div className="w-full items-center flex justify-center flex-col gap-6">
                    <button className="rounded-full w-[12rem] h-[4rem] flex items-center justify-evenly p-4" style={{ border: '2px solid white' }}
                    onClick={handleupload}
                    >
                        <LuSaveAll className="text-2xl font-bold"
                         color="#c95dff"/>
                        <span className="font-bold text-white font-poppins ">Save Equipment</span>
                    </button>

                    {Error  && <h2 className="font-poppins font-extrabold text-xl text-red-500">{Error.error}</h2>}
                </div>
                
                <div className="w-full items-center flex justify-center">
                    <h2 className="text-yellow-500 text-sm font-poppins"><span className="text-red-500 font-bold font-poppins text-md ">
                            Note:
                        </span>Save Equipment First Before Adding Models</h2>
                </div>
                <div className="w-full items-center md:items-left h-fit pl-4 mt-2 justify-center">
                    <button className=" border border-blue-500 w-[14rem] rounded-xl md:w-[28rem]" onClick={()=>{setNotModel(!NotModel)}}>
                        <AiOutlineDropbox className='w-[300px] ' color="#22a7f2"/>
                        Add models and Capacity for this Equipment
                    </button>

                    <div className={`${NotModel ? "hidden":"block"} flex flex-col gap-4 w-full mt-6 h-fit text-left `}>
                        <div className="w-full h-fit flex items-center justify-between">
                        <h1 className="text-white hidden md:block font-poppins text-2xl">Model Name</h1>

                        <input 
                        className="border-b border-blue-500 w-[40rem] text-white" placeholder="Model Name" type="text"
                        value={ModelName}
                        style={{backgroundColor: "transparent"}}
                        onChange={(e) => setModelName(e.target.value)}
                        />
                        </div>

                        <div className="w-full h-fit flex items-center justify-between">
                        <h1 className="text-white hidden md:block font-poppins text-2xl">Model Capacity</h1>

                        <input 
                        className="border-b border-blue-500 w-[40rem] text-white" placeholder="Model Capacity" type="text"
                        style={{backgroundColor: "transparent"}}
                        value={ModelCapcity}
                        onChange={(e) => setModelCapcity(e.target.value)}
                        />
                        </div>
                           {/* <div className="w=full h-fit flex items-center justify-center">
                           <button className="font-poppins text-white text-xl" onClick={AddModel}>
                                Add More Models
                            </button>
                           </div> */}
                    </div>
                </div>

                
                <div className="w-full mt-4 mb-6 items-center justify-center flex ">
                    <button className=' lg:ml-20' onClick={AddModel}>
                    Add More Models
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

export default SetEqui