import React, { useState } from 'react'
import Home from '../components/Home'
import Library from '../components/Library'
import Search from '../components/Search'

const menuItems = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/96/ffffff/home.png',
        inActive: 'https://img.icons8.com/fluency-systems-regular/96/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/96/ffffff/search--v1.png',
        inActive: 'https://img.icons8.com/ios/96/ffffff/search--v1.png',
    },
    {
        name: 'Library',
        active: 'https://img.icons8.com/ios-filled/96/ffffff/tidy-shelf.png',
        inActive: 'https://img.icons8.com/ios/96/ffffff/tidy-shelf.png',
    },
]



const HomePage = () => {

    const[isActive, setIsActive] = useState('Home')

    const MenuList = ({imgUrl, name, bold}) => (
            <div className='text-white mt-4 flex ml-10 cursor-pointer' onClick={()=> [setIsActive(name)]}>
                <img src={imgUrl} 
                        height={30}
                        width={30}/>
                    <text className={`mx-4 items-center flex font-${bold}`}>{name}</text>
            </div> 

    )


  return (
    <div className='flex'>
        <div className='bg-black min-h-screen w-56'>
                <div className='text-white mt-6 font-semibold text-2xl justify-center flex'>
                    Chordale
                </div>
                <div className='mt-24'>
                    {menuItems.map((item,index) => (
                    
                        <MenuList key={index} 
                                  name={item.name} 
                                  imgUrl={isActive == item.name? item.active: item.inActive}
                                  bold={isActive == item.name? 'bold': 'semibold'}
                        />
                    ))}
                </div>
        </div>
        {/*<div className='bg-gray-900 min-h-screen grow'>
            <div className='bg-gradient-to-b from-cyan-600 h-40 flex items-center'>
                <div className='text-white mx-10 font-bold text-3xl'>
                    Good Morning
                </div>
            </div>
        </div>*/}
        {
            isActive == 'Home' ? <Home/>:<></>
        }
        {
            isActive == 'Search' ? <Search/>:<></>
        }
        {
            isActive == 'Library' ? <Library/>:<></>
        }
    </div>
  )
}

export default HomePage