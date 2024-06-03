import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatPage />
    </>
  )
}

export default App
