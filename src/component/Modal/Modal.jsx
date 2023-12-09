import React from 'react'
import { RxCross2 } from "react-icons/rx";


const Modal = ({children,hide}) => {

  
  return (
    <>
    <div className="modal w-[620px] h-[550px] bg-black/90 border-[1px] border-slate-600 flex flex-col gap-3 py-3">
        <div className="modal_title flex items-center ">
           <button onClick={() => hide(false)} className='font-bold text-xl pl-4'><RxCross2/></button>
            <h4 className='text-xl font-bold ml-10'>Step 1 of 5</h4>
        </div>
        <div className="modal_header px-20">
            <h2 className='text-4xl font-extrabold'>Create your account</h2>
        </div>
        <div className="modal_body px-20">{children}</div>
       
    </div>
    </>
  )
}

export default Modal