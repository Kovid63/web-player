import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { auth } from '../Firebase'
import HomePage from './HomePage'
import MainPage from './MainPage'


const  Navigation = () => {
  const[currentUser, setCurrentUser] = useState(null)
  const userHandler = (user) => user ? setCurrentUser(user) : setCurrentUser(null)

useEffect(()=> {
      auth.onAuthStateChanged(user => userHandler(user))
},[])

  return (
    <>
      <UserContext.Provider>
        {/*<MainPage/>*/}
       { currentUser ? <HomePage/>:<MainPage/> }
      </UserContext.Provider>
    </>
  )
}

export default Navigation