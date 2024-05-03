import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Player} from "./components/ui/player"
import { Header } from './components/ui/player'
import User from "./components/user/user"
import { Routine } from './components/container/exo'
import { Compteur } from './components/container/compteur'
import { AfficheNom } from './components/container/input'
import { Menu } from './components/container/menu'
import{SigninForm} from "./components/container/formu"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SigninForm></SigninForm>
    <Menu titre="react"><p>C'est dur</p></Menu>
    <AfficheNom></AfficheNom>
    <Compteur></Compteur>
      {/* <Header></Header> */}
      <User></User>
      {/* <Player></Player> */}
      <Routine></Routine>
    </>
  )
}

export default App
