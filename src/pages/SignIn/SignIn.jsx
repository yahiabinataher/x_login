import React, { useState } from 'react'
import Home from '../Home/Home'
import Modal from '../../component/Modal/Modal'
import { date, mounth } from '../../faker'
import { createToast, isMobail } from '../../helpers/helpers'

const years = Array.from({length: new Date().getFullYear() - 1900}, (_,i) => 1901 + i).reverse()
console.log(years);

const SignIn = () => {

    const [modal,setModal] = useState(true)

    const [input,setInput]= useState({
        name:"",
        phone:"",
        day:"",
        month:"",
        year:""
      })

    const [border,setBorder]= useState({
        name:true,
        phone:true
      })

//submit
      const handleUserRegister = (e) =>{
        e.preventDefault()
        //validation
        if(!input.name || !input.phone  ){
          createToast("All Fiends Are Required")
        }else if(!isMobail(input.phone)){
          createToast("Phone is not valid")
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
   <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' >
    {modal ?  <Modal hide={setModal}>
        <form className='flex flex-col gap-3' action="" onSubmit={handleUserRegister}>
            <input className={`py-4 rounded-md bg-transparent border-[1px] ${border.name ? 'border-slate-500' : 'border-red-500'} hover:border-sky-500 hover:border-[2px] outline-none pl-2`} type="text" name='name' value={input.name}  onChange={handleInputChange} onBlur={handleBlur} placeholder='Name' />
            <input  className={`py-4 rounded-md bg-transparent border-[1px] ${border.phone ? 'border-slate-500' : 'border-red-500'} hover:border-sky-500 hover:border-[2px] outline-none pl-2`} type="text" name="phone" value={input.phone} onChange={handleInputChange} onBlur={handleBlur} placeholder='Phone' />
            <div className='text-right '>
                <span className='font-medium text-sm hover:underline text-sky-400'>Use email instend</span>
            </div>
            <h4>Date of birth</h4>
            <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            <div className='flex gap-3'>
                <div>
                    <select className='w-52 border-[1px] bg-black border-slate-300 hover:border-sky-600 py-4 outline-none' name="month" id="" onChange={handleInputChange}>
                        <option value="">Month</option>
                        {mounth.map((item,index) => <option key={index} selected={new Date().getMonth() == index ? true : false} value={item}>{item}</option> )}
                    </select>
                </div>
                <div>
                    <select className='w-28  border-[1px] bg-black border-slate-300 hover:border-sky-600 py-4 outline-none' name="day" id="" onChange={handleInputChange}>
                        <option value="">date</option>
                        {date.map((item,index) => <option key={index} selected={new Date().getDate() === item} value={item}>{item}</option>)}
                    </select>
                </div>
                <div>
                    <select className='w-28 border-[1px] bg-black border-slate-300 hover:border-sky-600 py-4 outline-none' name="year" id="" onChange={handleInputChange}>
                        <option value="" >Year</option>
                        {years.map((item,index) => <option key={index} selected={new Date().getFullYear() === item ? true:false} value={item}>{item}</option>)}
                    </select>
                </div>
                
            </div>
            <div className="modal_footer w-full mt-4 ">
        <button className='w-full py-3  rounded-full bg-slate-400 text-black font-bold text-lg'>Next</button>
           </div>

        </form>
    </Modal> : ""}
   </div>
   <Home  />
   </>
  )
}

export default SignIn