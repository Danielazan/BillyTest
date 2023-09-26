import Footer from 'Pages/Hero Page/Footer'
import Navbars from 'components/Navbars'
import {useState, useEffect} from 'react'
import axios from "axios"
import base from "base.js"
import MachinaryContext from "Hooks/useMachinaryContext"
import { useParams } from "react-router-dom";


const EquiDes = () => {
  const {mechines, dispatchMachine} = MachinaryContext()
  const { id } = useParams();

  const [Result, setResult] = useState();
  
  const [Models, setModels]=useState()

  useEffect(() => { 
      
    axios.get(`${base.local}/api/machine/${id}`).then((res)=>{
     const json = res.data

     // console.log(JSON.parse(json[4].Model))
     console.log(json)
    
     setModels(json.Modles      )
     setResult(json.result)
   })
   
   
   console.log(Result)
 }, [])
  return (
    <div className='w-full h-fit bg-[#212529]'>
             {/* Machine descrition */}
        <Navbars/>
      <div className="w-full h-fit bg-white p-4" id="des">
            <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                          {
                            Result && <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" className="md:px-6 py-4">Name</th>
                                <th scope="col" className="px-6 py-4">Description</th>
                              </tr>
                            </thead>
                            <tbody>

                              <tr
                                className="border-b border-warning-200 bg-warning-100 text-neutral-800">
                                <td className="whitespace-nowrap md:px-6 py-4 font-medium">
                                  {Result.Name}
                                </td>
                                <td className="whitespace-nowrap md:px-6 py-4">{Result.Description}</td>
                              </tr>

                              
                              <td colspan="2" className="whitespace-nowrap md:px-6 md:py-4">
                                <tr
                                  className="border-b border-info-200 bg-info-100 text-neutral-800 flex items-center justify-center ">
                                  
                                  <table className="min-w-full text-center text-sm font-light">
                                 <div className="w-full items-center justify-center">
                                     <h2>Models And Capacity</h2>
                                 </div>
                                     <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="md:px-6 py-4">ModelName</th>
                                            <th scope="col" className="md:px-6 py-4">Capacity</th>
                                          </tr>
                                     </thead>
                                    {
                                      Models && Models.map(model =>{
                                        return (
                                          
                                          <tr  >

                                            <td className="whitespace-nowrap md:px-6 py-4">
                                              {model.ModelName}
                                            </td>

                                            <td className="whitespace-nowrap md:px-6 py-4">
                                              {model.Capacity}
                                            </td>
                                          </tr>
                                        )
                                      })
                                    }
                                  </table>
                                  
                                  
                                  
                                </tr>
                              </td>
                            </tbody>
                          </table>
                          }
                      </div>
                    </div>
                  </div>
                </div>
      </div>

      <Footer/>
    </div>
  )
}

export default EquiDes