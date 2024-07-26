import { useState, useEffect } from 'react'

function App() {
  const [greetings, setGreetings] = useState("")

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setGreetings)
  }, [])

  return (
    <>
      <h1>{greetings}</h1>
    </>
  )
}

export default App
