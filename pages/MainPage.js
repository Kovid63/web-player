import React from 'react'
import Link from 'next/link'

const MainPage = () => {
  return (
    <div className='bg-black min-h-screen flex items-center justify-center' >
        <div className=''>
          <Link href={'/LoginPage'}>
            <div className='bg-cyan-500 h-10 w-40 cursor-pointer rounded-full text-white font-semibold flex items-center justify-center mt-64'>
                Login
            </div>
          </Link>
          <Link href={'/SignUpPage'}>
            <div className='text-cyan-500 flex justify-center items-center mt-4 font-semibold border-gray-600 border-2 h-10 w-40 rounded-full cursor-pointer'>
                Sign Up
            </div>
          </Link>
        </div>    
    </div>
  )
}

export default MainPage