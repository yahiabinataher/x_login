import React from 'react'
import { RxCross2 } from "react-icons/rx";


const Modal_login = ({children,hide}) => {
  return (
    <>
    <div className="modal  bg-black/90 border-[1px] border-slate-600 flex flex-col gap-3 py-6 ">
        <div className="modal_title flex items-center  ">
           <button  onClick={() => hide(false)} className='font-bold text-xl pl-4 '><RxCross2/></button>
            <div>
                <img className='h-10 text-center ml-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/640px-X_logo_2023_%28white%29.png" alt="" />
            </div>
        </div>
        <div className="modal_header px-20">
            <h2 className='text-4xl font-extrabold'>Sign in to X</h2>
        </div>
        <div className="modal_body px-20">{children}</div>
       
    </div>
    </>
  )
}

export default Modal_login