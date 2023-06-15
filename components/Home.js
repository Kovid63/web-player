import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth, db } from '../Firebase'
import Link from 'next/link'
import { collection, doc, getDocs, query } from 'firebase/firestore'
import ReactAudioPlayer from 'react-audio-player'
import ReactPlayer from 'react-player'


const songData = [
    {
        name: 'Heelo',
    },
    {
        name: 'Heelo',
    },
    {
        name: 'Heelo',
    },
    {
        name: 'Heelo',
    },
    {
        name: 'Heelo',
    },
    {
        name: 'Helo',
    },
]

const Home = () => {

    const[data, setData] = useState([])


    const[play,setPlay] = useState(false)

    const[url,setUrl] = useState('')

    const[time ,setTime] = useState(0)


   

    const datahandler = () => {
        getDocs(collection(db,'songs')).then((snap)=> setData(snap.docs.map((doc) => doc.data()))).catch((e) => console.log(e.message))
    }
  

    useEffect(() => {
    
        datahandler()

    }, [])

    useEffect(() => {
    
       console.log(time)
        
    }, [time])

    const SongCard = ({title, imgUrl, songUrl}) => (
        <div className='my-4 bg-gray-700 h-20 w-72 rounded-lg flex cursor-pointer' onClick={()=> [setUrl(songUrl),play? setPlay(false) :setPlay(true)]}>
                <Image className='object-cover rounded-tl-lg rounded-bl-lg' src={imgUrl}
                        height={80} width={80} quality={100}
                />
                <text className='self-center ml-8 text-white font-bold'>{title.length > 10 ? title.slice(0,5) + "...": title}</text>
                
        </div>
    )

    

  return (
    <div className='bg-gray-900 min-h-screen grow'>
            <div className='bg-gradient-to-b from-cyan-600 h-40 flex items-center'>
                <div className='text-white mx-10 font-bold text-3xl'>
                    Greetings
                </div>
                <img className='h-6 w-6 mt-2 ml-16' src={play? 'https://img.icons8.com/ios-glyphs/30/ffffff/pause--v1.png':'https://img.icons8.com/ios-glyphs/96/ffffff/play--v1.png'}/>
            <Link href='/Navigation'>
                <div className='absolute right-20 cursor-pointer' onClick={() => { [signOut(auth)
    
                ]}}>
         
                    <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/ffffff/external-setting-basic-ui-elements-flatart-icons-outline-flatarticons.png"
                        height={20} width={20}
                    />
                </div>
            </Link>
            </div>
            <div className='grid grid-cols-3 mx-10'>
                { data.map((song,index) => (
                    <>  
                        <SongCard title={song.title} key={index} imgUrl={song.artwork} songUrl={song.url}/>
                    </>
                ))

                }
            </div>
            <ReactPlayer url={url} playing={play} onProgress={progress => setTime(progress.playedSeconds)}/>
        </div>
  )
}

export default Home