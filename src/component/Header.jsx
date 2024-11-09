import { AuthContext } from '@/contextApi/AuthContext'
import React, { useContext } from 'react'
import { AiOutlineUser } from 'react-icons/ai'


const Header = () => {
  const {setOpen} = useContext(AuthContext)

  const handelAccountModal =()=>{
    setOpen(true)
    // console.log("true")
  }
  return (
    <header className='flex w-full justify-between px-8 py-2 shadow'>
        <h4 className='text-3xl font-bold text-cyan-700'>Logo</h4>
        <button onClick={handelAccountModal}><AiOutlineUser/></button>
       
        
    </header>
  )
}

export default Header