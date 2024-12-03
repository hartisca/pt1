import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ fact, setFact ] = useState('')
  const [ img, setImg ] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchFact()
      await fetchImg()
    }
    fetchData()
  }, [])

  const fetchFact = async () => {
    try{
      const respuesta = await fetch('https://catfact.ninja/fact')
      const data = await respuesta.json()
      const fact2 = data.fact.split(" ")
      setFact(fact2[0])
    } catch (error){
      console.log(error)
    }      
  }

  const fetchImg = async () => {
    try{
      const respuesta = await fetch('https://cataas.com/cat/says/hello')      
      setImg(respuesta.url)      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>{fact}</h1>
      <img src={img} alt="" />
    </>
  )
}

export default App
