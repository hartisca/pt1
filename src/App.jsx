import { useEffect, useState } from 'react'
import './App.css'

function App() {  
  const [ img, setImg ] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchFact()      
    }
    fetchData()
  }, [])

  const fetchFact = async () => {
    try{
      const respuesta = await fetch('https://catfact.ninja/fact')
      const data = await respuesta.json()
      const threeWords = data.fact.split(" ", 3).join(' ')    

      const image = await fetch(`https://cataas.com/cat/says/${threeWords}?fontSize=35&fontColor=red`)
      setImg(image.url)
    } catch (error){
      console.log(error)
    }      
  }
  
  return (
    <>      
      <img src={img} alt="" />
    </>
  )
}

export default App
