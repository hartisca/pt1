import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [ fact, setFact ] = useState('')
  
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
        .then((data) => setFact(data.fact))
  },[])

  return (
    <>
      <h1>Cosas de gatos: {fact}</h1>
    </>
  )
}

export default App
