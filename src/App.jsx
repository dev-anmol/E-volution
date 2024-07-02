import { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Hero/Hero';
import './App.css'


function App() {
  let heroData = [
    {
      text1: "Dive into",
      text2: "what you love"
    }, {
      text1: "Indulge",
      text2: "your passions"
    }, {
      text1: "Give in to",
      text2: "your passions"
    }
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{
        return count == 2 ? 0 : count + 1;
      })
    }, 3000)
  }, [])

  return (
    <>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}

      />
    </>
  )
}

export default App
