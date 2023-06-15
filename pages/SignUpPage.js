import { createUserWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import React, { useState } from 'react'
import { auth } from '../Firebase'

const SignUpPage = () => {
    const[selected, setSelected] = useState(false)
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    

    const signInUserHandler = async(email,password) => {
        await createUserWithEmailAndPassword(auth,email,password).then(() => { console.log('success')
        }).catch((e)=> console.log(e.message))
    }
    

  return (
    <div className={`bg-black min-h-screen justify-center flex`}>
        <div className='mt-40'>
            <text className='text-white font-bold text-5xl'>
                Sign Up
            </text>
            <div className='mt-8 text-white' onClick={() => setSelected(true)}>
                <input className='outline-none h-8 text-lg bg-transparent'
                       placeholder='Email' 
                       type={'email'}
                       onChange={(e) => setEmail(e.currentTarget.value)}
                
                />
            </div>
            <div className={`bg-${selected? 'cyan-500': 'white'} w-64 h-[1px]`}>  
            </div>
            <div className='mt-8 text-white' onClick={() => setSelected(true)}>
                <input className='outline-none h-8 text-lg bg-transparent' 
                       placeholder='Password' 
                       type={'password'}
                       onChange={(e) => setPassword(e.currentTarget.value)}
                       />
            </div>
            <div className={`bg-${selected ? 'cyan-500': 'white'} w-64 h-[1px]`}>  
            </div>
            <div className='mt-8 text-white' onClick={() => setSelected(true)}>
                <input className='outline-none h-8 text-lg bg-transparent' 
                       placeholder='Username' 
                       type={'text'}
                       onChange={(e) => setPassword(e.currentTarget.value)}
                       />
            </div>
            <div className={`bg-${selected ? 'cyan-500': 'white'} w-64 h-[1px]`}>  
            </div>
          <Link href='/Navigation'>
                <div onClick={() => {signInUserHandler(email,password)}} className='text-cyan-500 flex justify-center items-center mt-10 font-semibold border-gray-600 border-2 h-10 w-40 rounded-full cursor-pointer'>
                    Sign Up
                </div>
            </Link>
        </div>
    </div>
  )
}
export default SignUpPage