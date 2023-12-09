import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <>
    <div className="container mx-auto ">
        <div className="x_wrapper h-screen flex justify-center items-center ">
            <div className="x_logo flex grow justify-end">
                <img className=' h-80' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/640px-X_logo_2023_%28white%29.png" alt="" />
            </div>
            <div className='flex grow justify-end'>
            <div className="x_content flex flex-col gap-3 " >
                <h1 className='text-[64px] font-extrabold mb-4'>Happening now</h1>
                <h4 className='text-4xl font-black'>Join today.</h4>
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
                <Link to="sign"><button className=' w-80 py-2 rounded-full bg-sky-500 text-white  text-slate-900 font-bold'>Create account
                </button></Link>
                <p className='w-80 text-[12px]'>By signing up, you agree to the <Link to="https://twitter.com/en/tos" className='font-bold text-sky-600'>Terms of services</Link> and  <Link to="https://twitter.com/en/privacy" className='font-bold text-sky-600'>Privicy Policy</Link> including  <Link to="https://help.twitter.com/en/rules-and-policies/x-cookies" className='font-bold text-sky-600'>Cookie Uses</Link></p>
                <h4 className='mt-10 text-xl font-bold'>Already have an account?</h4>
                <button className=' w-80 py-2 rounded-full bg-transparent text-sky-600 border-[1px] border-slate-200 font-extrabold'>Sign in</button>

            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home