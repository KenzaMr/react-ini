import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Player} from "./components/ui/player"
import { Header } from './components/ui/player'
import User from "./components/user/user"
import { Routine } from '../../exo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header></Header> */}
      <User></User>
      {/* <Player></Player> */}
      <Routine></Routine>
    </>
  )
}

export default App
