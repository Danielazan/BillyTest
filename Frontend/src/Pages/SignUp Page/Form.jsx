import React from 'react'
import './styles/Form.css'
import { NavLink } from 'react-router-dom';

const Form = () => {
  return (
    <div>
        <div className="container">
            <div className="box  justify-between flex flex-col w-full">
                <span className="title font-poppins text-white text-center text-2xl">SignUp</span>
                <div>
                    <section>
                    <h2 className='text-white font-poppins font-bold text-lg'>Register As An Admin</h2>
                        <h1 className='text-sm font-poppins font-bold text-white flex gap-2'>Already An Admin 
                            <span>
                            <NavLink to='/Login' className={`font-poppins font-bold cursor-pointer text-[18px] text-NavTextColor no-underline`}>Login</NavLink>
                            </span>
                        </h1>
                    </section>
                    {/* for the forms inputs */}
                    <div className='in'>
                        <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-evenly'>
                            {/* firstName */}
                            <div className="firstname">
                                <input required="" type="text" name="text" class="input"/>
                                <label className="label">Username</label>
                            </div>
                            {/* lastName */}
                            <div className=" w-[130px] h-[35px] rounded backdrop-blur-sm bg-white bg-opacity-50">
                            <div className="firstname">
                                <input required="" type="text" name="text" class="input"/>
                                <label className="label">Username</label>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default Form