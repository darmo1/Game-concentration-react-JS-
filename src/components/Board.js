import React, { useState } from 'react'
import Card from './Card'
import {Win} from './Win'

export const Board = ({ cards }) => {
  //const [chosenCards, setChosenCards] = useState([])
  const [firstCard, setFirstCard] = useState({item: null, idx: null})
  const [showCard, setShowCard] = useState({})
  const [movement, setMovement] = useState(0)
  const [score, setScore] = useState(0)
  
  
    
    if(score === 8){
      return(
        <>
          <Win score={score} movement={movement} />
        </>
      )
    }
    
    
   
  //console.log(firstCard)
  console.log(firstCard)

  return (
    <>
    <div className="container-emoji" >
      {cards.map((item, id) =>
        (<Card
        //cada item es decir cada cartica
          item={item}
          key={id}

          idx={id}
          firstCard={firstCard}
          setFirstCard={setFirstCard}
          showCard={showCard}
          setShowCard={setShowCard}

          movement={movement}
          setMovement={setMovement}

          score={score}
          setScore = {setScore}
        />
        ))}
    </div>
    <hr />

      <h1> Movimientos: {movement} </h1>
      <h1> Puntaje: {score} </h1>
    </>

  )
}
