import {useEffect,useState} from 'react'
import { motion } from 'framer-motion';
import MachinaryContext from "Hooks/useMachinaryContext"
import axios from "axios"
import base from "base.js"
import "./styles/Editimgbtn.css"
import "./styles/containt.css"
import { VscDebugStepBack } from "react-icons/vsc";

const EditEqui = () => {
    const {mechines, dispatchMachine} = MachinaryContext()

    const [toggle, settoggle] = useState(true)

    const [OneImage, setOneImage] = useState({})
    const [single, setsingle] = useState("")
    const [EquiModels, setEquiModels] = useState([])

    const [addModelCapacity, setAddModelCapacity] = useState("")
    const [ModelName, setModelName] = useState("")

    const [ModelCapcity, setModelCapcity] = useState("")

    const [addModelName, setAddModelName] = useState("")

    // for Editing the equipments data
    const URL = base.local

    const [Capacity, setCapacity] = useState("")


   const[MecId,setMecId] = useState("")

    const [Description, setDescription] = useState("")

    const [EquimentName, setEquimentName] = useState("")

    const [SaveEdit, setSaveEdit] = useState(-1)
    
    const [ModelMessage, setModelMessage] = useState()

    const modelss ={
      ModelName:addModelName,
      Capacity:addModelCapacity
     }

    const AddModel =async(MecId)=>{

        const id =MecId

        console.log(id)

        await axios.post(`${URL}/api/model/${id}`, modelss).then((res) => {
            const json = res.data
            
            // dispatchMachine({type:"Display Machines",payload:json})
            console.log(res.data);

            setAddModelName("")
            setAddModelCapacity("")

          });
           
            
      
        }




    useEffect(() => { 
      
        axios.get(`${URL}/api/machine`).then((res)=>{
         const json = res.data
 
         console.log(json)
         
          dispatchMachine({type:"Display Machines",payload:json})
       })
       
       
     }, [dispatchMachine])

     const showEquipment = async(id)=>{
     
      await axios.get(`${URL}/api/machine/${id}`).then((res)=>{
        console.log(res.data)

        const datas = res.data

        setOneImage(datas.result)

        
        setsingle(datas.result.ImagePath)

        setEquiModels(datas.Modles)

        
      })
      
     }
     console.log(EquiModels)

     const ModelsEqui={
      EquimentName,
      Description
     }
     const Models = {
        ModelName,
        Capacity
     }

    

     const handleDelete = async (id)=>{
      await axios.delete(`${URL}/api/model/${id}`).then((res) => {
        const json = res.data
        
        // dispatchMachine({type:"DeLETE Mechains",payload:json})
        settoggle(!toggle)
        console.log(res.data);
      });
     }

     const handleDeleteEqui = async(id)=>{
        await axios.delete(`${URL}/api/machine/${id}`).then((res) => {
        const json = res.data
        
        
        console.log(res.data);
        settoggle(!toggle)
      });
     }

     const handelEquiEdit= async(id)=>{

        await axios.put(`${URL}/api/machine/${id}`, ModelsEqui).then((res) => {
          const json = res.data
          
          dispatchMachine({type:"Create Mechains",payload:json})
          console.log(res.data);
          
          setDescription("")
          setEquimentName("")
        });

     }
    const handleEdit = async (id)=>{
      
        await axios.put(`${URL}/api/model/${id}`, Models).then((res) => {
          const json = res.data
          
          // dispatchMachine({type:"Display Machines",payload:json})
          settoggle(!toggle)
          console.log(res.data);
        });

        setSaveEdit(-1)
    }
  return (
    <div className="w-full h-screen overflow-scroll p-4 main-cont">
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" rounded-xl w-full"
        >
            <div className="w-full h-fit flex flex-col gap-6 md:gap-0 rounded-xl p-6" style={{ border: '2px solid white' }} >



            {/* div to show all images  */}
            
                <div className={`${!toggle ?"hidden" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}`}>
                {
                    mechines && mechines.map(mec =>{
                      return(
                        <div>
                            <div className="w-full relative">
                          <img crossorigin="anonymous"  src={`${URL}/images/`+mec.ImagePath }alt="mechain" className="w-full h-[20rem]" />
                          <div className='w-full h-fit  mt-6 rounded-xl flex justify-center items-center'  >
                            <button className='editimgbtn w-full' onClick={()=>{
                                settoggle(!toggle)
                                showEquipment(mec.id)
                                setMecId(mec.id)
                            }}>
                                Edit Datas on this Equiments
                            </button>
                            {/* <span>Delete</span> */}
                      </div>
                        </div>


                        
                        </div>
                        

                        
                              
                      )
                    })
                  }
                
                
                </div>
                    
                <div className={`${toggle ? "hidden" : "block"}`}>
                    {/* previous data for the equipment */}
                    <div>
                      <h1 className="flex items-center justify-center text-white w-fit" onClick={()=>{settoggle(!toggle)}}>
                        <span className="pr-4">Back</span>
                        <VscDebugStepBack/>
                      </h1>
                    </div>
                  <div className='flex w-full flex-col md:flex-row items-center gap-2 justify-between'>
                   
                      {OneImage && <div className="w-full md:w-1/2 h-full bg-blue-500 rounded-xl">
                        
                        <img crossorigin="anonymous"  src={`${URL}/images/`+single }alt="mechaine" className="w-full h-[20rem] rounded-xl" />
                      </div>}
                      <div className='w-full md:w-1/2 h-full bg-green-500 rounded-xl'>
                      <div className="w-full items-center h-fit flex justify-center">
                        <h1 className="font-bold text-white text-4xl font-poppins">{OneImage.Name}</h1>
                      </div>
                      <div className="w-full h-[20rem] overflow-scroll main-cont">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-4">S/N</th>
                                <th scope="col" class="px-6 py-4">ModelName</th>
                                <th scope="col" class="px-6 py-4">Capacity</th>
                              </tr>
                            </thead>
                            <tbody>
                                {
                                  EquiModels.map(equi =>{
                                    return(
                                      <tr
                                className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  {equi.id}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">{equi.ModelName}</td>
                                <td class="whitespace-nowrap px-6 py-4">{equi.Capacity}</td>
                              </tr>
                                    )
                                  })
                                }
                            </tbody>
                          </table>
                      </div>
                      </div>
                  </div>

                  {/* Section to edit datas on the Equipment */}

                  <div className="w-full">
                      <div className="flex w-full h-fit items-center justify-center">
                        <h1 className="text-[#fdc901] mt-2 font-bold font-poppins">Edit Datas For this Equipment</h1>
                      </div>

                      <div className="w-full h-fit p-6">
                        <div className="flex flex-col md:flex-row w-full h-fit justify-between ">
                           <h2 className="text-white font-poppins text-2xl hidden md:block">Equiment Name</h2>
                            <input 
                            className="border-b border-blue-500 w-[40rem] text-white" placeholder="Equiment Name" type="text"
                            value={EquimentName}
                            style={{backgroundColor: "transparent"}}
                            onChange={(e) => setEquimentName(e.target.value)}
                        />
                        </div>

                        <div className="flex flex-col md:flex-row w-full h-fit justify-between ">
                           <h2 className="text-white font-poppins text-2xl hidden md:block">Description</h2>
                            <input 
                            className="border-b text-white border-blue-500 w-[40rem]" placeholder="Description" type="text"
                            value={Description}
                            style={{backgroundColor: "transparent"}}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        </div>

                        <div className="flex-col w-full md:flex-row">
                          <div className="mt-4 w-full h-fit items-center flex justify-center">
                              <button 
                                onClick={()=>{handelEquiEdit(OneImage.id)}}
                              className="w-[12rem] h-[4rem] rounded-full bg-blue-500 font-poppins text-2xl font-bold ">
                                  Save Changes 
                              </button>
                          </div>

                          <div className="mt-4 w-full h-fit items-center flex justify-center">
                              <button 
                              onClick={()=>handleDeleteEqui(OneImage.id)}
                              className="w-[12rem] h-[4rem] rounded-full bg-blue-500 font-poppins text-2xl font-bold ">
                                  Delete Equipment 
                              </button>
                          </div>
                        </div>
                      </div>

                      {/*sections for editing models for an equi */}

                      <div className="w-full h-fit flex items-center justify-center">
                          <h2 className="text-[#fdc901] font-bold font-poppins">Edit the Equipment Models here</h2>
                      </div>
                      
                      {
                        EquiModels && <div className="overflow-scroll main-cont">

                            <table class="min-w-full text-center text-sm font-light font-poppins text-white">
                              <thead class="border-b font-medium dark:border-neutral-500 bg-[#7d919a]">
                                <tr>
                                  <th scope="col" class="px-6 py-4">S/N</th>

                                  <th scope="col" class="px-6 py-4">ModelName</th>
                                  
                                  <th scope="col" class="px-6 py-4">Capacity</th>
                                  
                                  <th colspan="2" scope="col" class="px-6 py-4 ">Make Changes</th>
                                </tr>
                              </thead>
                              <tbody>
                                  {
                                    EquiModels.map((equi,index) =>{
                                      return(
                                        equi.id === SaveEdit ?
                                        <tr>
                                             <td 
                                             colspan="2"
                                             className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                        <input 
                                            className="border border-blue-500   w-[8rem] rounded-xl p-2"  
                                            placeholder={equi.ModelName} 
                                            type="text"
                                            value={ModelName}
                                            style={{backgroundColor: "transparent"}}
                                            onChange={(e) => setModelName(e.target.value)}
                                        />
                                            </td>
                                            <td 
                                            colspan="2"
                                            className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                                <input 
                                                      className="w-[8rem] p-2 border border-blue-500 rounded-xl"  
                                                      placeholder={equi.Capacity} 
                                                      type="text"
                                                      name="cap"
                                                      value={Capacity}
                                                      style={{backgroundColor: "transparent"}}
                                                      onChange={(e)=>{setCapacity(e.target.value)}}
                                                  />
                                            </td>

                                            <td class="bg-black whitespace-nowrap px-6 py-4">
                                              <button
                                              onClick={()=>handleEdit(equi.id)} 
                                              className="bg-blue-500 text-xl rounded-full font-bold font-poppins w-[6rem] h-[2rem]">
                                                Update
                                              </button>
                                            </td>
                                        </tr>
                                        
                                        :
                                        <tr
                                  className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                  <td className=" bg-black whitespace-nowrap px-6 py-4 font-medium">
                                    {equi.id}
                                  </td>
                                  <td className="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                  {equi.ModelName} 
                                  </td>
                                  <td class="text-white font-poppins font-bold bg-black whitespace-nowrap px-6 py-4">
                                  {equi.Capacity} 
                                  </td>

                                   <td class="bg-black whitespace-nowrap px-6 py-4">
                                    <button 
                                    onClick={()=>{setSaveEdit(equi.id)}}
                                    className="bg-green-500 text-xl rounded-full font-bold font-poppins w-[6rem] h-[2rem]">
                                      Edit
                                    </button>
                                    </td>

                                    <td class="bg-black whitespace-nowrap px-6 py-4">
                                    <button 
                                     onClick={()=>{handleDelete(equi.id)}}
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

                            
                            <div className="w-full mt-6 items-center md:items-left h-fit pl-4  justify-center">
                        <div className=" w-full flex items-center justify-center border border-blue-500 w-[14rem] rounded-xl">
                        
                          <h2 className="font-extrabold text-white font-poppins">
                            Add models and Capacity for this Equipment
                          </h2>
                    </div>

                      <div className={` flex flex-col gap-4 w-full mt-6 h-fit text-left `}>
                          <div className="w-full h-fit flex items-center justify-between">
                          <h1 className="text-white hidden md:block font-poppins text-2xl">Model Name</h1>

                          <input 
                          className="border-b border-blue-500 w-[40rem] text-white" placeholder="Model Name" type="text"
                          value={addModelName}
                          style={{backgroundColor: "transparent"}}
                          onChange={(e) => setAddModelName(e.target.value)}
                          />
                          </div>

                          <div className="w-full h-fit flex items-center justify-between">
                          <h1 className="text-white hidden md:block font-poppins text-2xl">Model Capacity</h1>

                          <input 
                          className="border-b border-blue-500 w-[40rem] text-white" placeholder="Model Capacity" type="text"
                          style={{backgroundColor: "transparent"}}
                          value={addModelCapacity}
                          onChange={(e) => setAddModelCapacity(e.target.value)}
                          />
                          </div>
                            {/* <div className="w=full h-fit flex items-center justify-center">
                            <button className="font-poppins text-white text-xl" onClick={AddModel}>
                                  Add More Models
                              </button>
                            </div> */}
                      </div>
                </div>

                      {ModelMessage && <div className="w-full items-center justify-center ">

                        <h1 className="text-green-500 text-md font-bold font-poppins">
                          {ModelMessage}
                        </h1>
                        </div>}
                    <div className="w-full mt-4 mb-6 items-center justify-center flex ">
                        <button className=' lg:ml-20' onClick={()=>{AddModel(MecId)}}>
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
                      }

                  </div>
                </div>

                
            </div>
        </motion.div>
    </div>
  )
}

export default EditEqui