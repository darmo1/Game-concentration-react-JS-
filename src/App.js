import React, {useState} from 'react'
import {Header} from './components/Header'
import { Board } from './components/Board'
import fn from './methods/fn'
import './App.css'

export const App = () => {
//Aqui estoy guardando en la variable card el array random
   
    const [card, setCard]= useState([])
    const [btn, setBtn] = useState(true)

    const handleClick = () =>{
      startGame();
      setBtn(false)
    }


    const startGame = () =>{
      let arrayrandom =  fn.create()
      console.log(arrayrandom)
      setCard(arrayrandom)
    }

  return (
    <div className="container-game">
      <div className="center">
      <h1> Emoji-match </h1>
      {  btn ? <button className="btn-startGame" onClick={handleClick}> Start Game </button>
       : <h2 className="juega"> 🤗🤗 ¡Juega!   🤗⏳ </h2>  } 
      
      </div>
      
      <Board 
        cards={card} />
    </div>
  )
}
