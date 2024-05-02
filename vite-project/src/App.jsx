import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Player} from "./components/ui/player"
import { Header } from './components/ui/player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Player></Player>
    </>
  )
}

export default App
