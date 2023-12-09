
import React, { useState } from 'react'
import Home from '../Home/Home'
import Modal from '../../component/Modal/Modal'
import { createToast, isMobail } from '../../helpers/helpers'
import Modal_login from '../../component/Modal/Modal_login'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  const [modal,setModal] = useState(true)

  const [input,setInput]= useState({
      phone:"",
     
    })

  const [border,setBorder]= useState({
      phone:true
    })

//submit
    const handleUserRegister = (e) =>{
      e.preventDefault()
      //validation
      if(!input.phone  ){
        createToast("All Fiends Are Required")
      }else{
        createToast("Data Stable","success")
      }
    }
//value
    const handleInputChange = (e) =>{
      setInput((prevState) =>({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
    //border red
    const handleBlur = (e) => {
      if( e.target.value == ""){
        setBorder((prevState) =>({
          ...prevState,
          [e.target.name]:false
        }))
      }else{
        setBorder((prevState) =>({
          ...prevState,
          [e.target.name]:true
        }))
      }
     
    }
  return (
    <>
    <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ' >
     <div className="login_wraper w-[450px] overflow-hidden">
     {modal ?  <Modal_login hide={setModal}>
     <div className="x_content flex flex-col gap-3 " >
              
                <button className=' w-80 py-2 rounded-full bg-white text-black flex items-center justify-center gap-2 '>
                    <span className='text-xl'><FcGoogle></FcGoogle> </span>Sign up with Google
                </button>
                <button className=' w-80 py-2 rounded-full bg-white text-black flex items-center justify-center gap-2 text-slate-900 font-bold'>
                    <span className='text-xl'><FaApple></FaApple> </span>Sign up with Apple
                </button>
                <div className='flex items-center gap-2 '>
                    <div className='h-[0.3px] w-36 bg-slate-500'></div>
                    <span>Or</span>
                    <div className='h-[0.3px] w-36 bg-slate-500'></div>
                </div>
              <form  action="" onSubmit={handleUserRegister}>
             <input  className={`py-4 rounded-md bg-transparent border-[1px] ${border.phone ? 'border-slate-500' : 'border-red-500'} hover:border-sky-500 hover:border-[2px] outline-none pl-2 w-80 `} type="text" name="phone" value={input.phone} onChange={handleInputChange} onBlur={handleBlur} placeholder='Phone' /><div className="modal_footer w-full mt-4 ">
            </div>
 
                <button className=' w-80 py-2 rounded-full bg-white text-slate-700 font-bold'>Next
                </button>
         </form>
               
                <button className=' w-80 py-2 rounded-full bg-transparent text-sky-600 border-[1px] border-slate-200 font-extrabold'>Forgeting Password</button>
                <p className='w-80 text-[16px] text-center mt-6'>Don’t have an account?
                <Link to="/sign" className='font-bold text-sky-600'> Sign up</Link> </p>

            </div>
        
     </Modal_login> : ""}
     </div>
    </div>
    <Home  />
    </>
  )
}

export default Login