import {useState,useEffect} from 'react'
import "./styles/Form.css"
import axios from "axios"
import { NavLink } from 'react-router-dom';
import ManagerHook from "Hooks/ManagerContext"
import { useNavigate } from 'react-router-dom';
import base from "base.js"

const Form = () => {
    const URL = base.local

    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    const [Error, setError] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    
    const {User,dispatchU}=ManagerHook()

    const navigate = useNavigate();

    const Managerdata={
        UserName,
        PassWord:Password
       }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsLoading(true)

        axios.post(`${URL}/api/login`,Managerdata).then(res =>{
            const json = res.data
            localStorage.setItem("User", JSON.stringify(res.data))

            setIsLoading(false)
            setUserName("")
    
            setPassword("")

            
            dispatchU({type:"Login", payload:json})
            console.log(json)
            
    
            navigate('/admin')
        }).catch(datum =>{
            setIsLoading(false)
            console.log(datum.message)

            setError("UserName And Password Not Matched")
        })

        

        console.log(User)
    //     if (responds){
    //         localStorage.setItem("User", JSON.stringify(responds.data))

    //         setIsLoading(false)
    //         setUserName("")
    
    //         setPassword("")
    
    //         navigate('/admin')

    // }
    
        
        
    }
  return (
    <div className="w-full flex items-center justify-center h-screen">
        <div className="form-container">
            <p className="title">Login</p>
            <form className="form">
                <div className="input-group">
                    <label for="username">Username</label>
                    <input 
                    type="text" 
                    value={UserName} 
                    onChange={(e)=>setUserName(e.target.value)}
                    placeholder=""/>
                </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    value={Password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder=""/>
                    <div className="w-full items-center justify-center mb-4 mt-4">
                        {Error && <h2 className='font-poppins text-red-500 font-bold'>
                                {Error}
                            </h2>}
                    </div>
                </div>

                {
                    isLoading &&  <div className='w-full mt-4'>
                    <div className="Loginloader">
                        <div className="Logincircle">
                            <div className="Logindot"></div>
                            <div className="Loginoutline"></div>
                        </div>
                        <div className="Logincircle">
                            <div className="Logindot"></div>
                            <div className="Loginoutline"></div>
                        </div>
                        <div className="Logincircle">
                            <div className="Logindot"></div>
                            <div className="Loginoutline"></div>
                        </div>
                        <div className="Logincircle">
                            <div className="Logindot"></div>
                            <div className="Loginoutline"></div>
                        </div>
                        </div>
                </div>
                }

                
                <button
                disabled={isLoading} 
                onClick={handleSubmit}
                className="sign mt-4">Sign in</button>
            </form>
                <div className="social-message">
            
                </div>		
        </div>
    </div>
  )
}

export default Form