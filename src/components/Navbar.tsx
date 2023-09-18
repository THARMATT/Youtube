import React from 'react'
import {AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import {TiMicrophone} from 'react-icons/ti'
import {BsYoutube,BsCameraVideo,BsBell} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoAppsSharp} from 'react-icons/io5'
import {Link} from 'react-router-dom'
export default function Navbar() {
    
  return (
   <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
    <div className="flex gap-8 items-center text-2xl">
        <div>
            <GiHamburgerMenu/>
        </div>
    <Link to='/'>
        <div className="flex gap-1 justify-center items-center">
            <BsYoutube className='text-red-600 text-3xl'/>
            <span className='text-xl font-medium'>Youtube</span>
        </div>
    </Link>
    </div>
    <div className="flex tems-center justify-center gap-5">
        <form action="">
            <div className="flex bg-zinc-900 h-10 pr-10 items-center px-4">
                <div className="flex gap-4 items-center pr-5">
                  <div>  <AiOutlineSearch className='text-xl '/>
                  </div>
                  <input type="text"  className='w-96 bg-zinc-900 focus:outline-none border-none'/>
     
                <AiOutlineClose className='text-xl cursor-pointer'/>
                </div>
                <button className='h-10 w-16 item-center bg-zinc-800 justify-center'>
                <AiOutlineSearch className='text-xl '/>
                </button>
            </div>
        </form>
        <div className="text-xl bg-zinc-900 p-3 rounded-full">
<TiMicrophone/>
        </div>
    </div>
    <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp/>
        <div className="relative">
          <BsBell/>
          <span className="absolute bottom-2 left-2 bg-red-600 rounded-full px-1 text-xs">
            9+
            </span>  
        </div>
        <img src="https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj" className='h-9 w-9 rounded-full' alt="" />
    </div>
   </div>
  )
}
