import React, {useState} from 'react'
import {Header} from './components/Header'
import { Board } from './components/Board'
import fn from './methods/fn'
import './App.css'

export const App = () => {
//Aqui estoy guardando en la variable card el array random
    const [card, setCard]= useState([])

    const handleClick = () =>{
      startGame();
    }


    const startGame = () =>{
      let arrayrandom =  fn.create()
      console.log(arrayrandom)
      setCard(arrayrandom)
    }

  return (
    <div>
      <Header  />
      <Board 
        cards={card} />
      <button onClick={handleClick}> Start Game </button>
    </div>
  )
}
