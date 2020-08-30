import React from 'react'


function Card(props) {
  //chosenCards,setChosenCards
  let { item, idx, firstCard, setFirstCard, showCard, setShowCard, movement, setMovement, score, setScore } = props;
  let chars = ['🥵', '😎', '🤯', '🤢', '👽', '😍', '🥶', '😈']

  function operacion(item) {
    console.log('Entro', showCard[idx])

    setShowCard(prevState => ({
      ...prevState,
      [idx]: true
    }))

    if (firstCard.item === null) {
      setFirstCard({
        item, 
        idx
      })
    } 
    
    else {
     
      
      if(firstCard.item !== item) {
        setShowCard(prevState => ({
          ...prevState,
          [idx]: true
        }))

        setMovement(movement+1)

        setTimeout(()=>{
          setShowCard(prevState => ({
            ...prevState,
            [idx]: false,
            [firstCard.idx]:false
          }))
        }, 500)

        setFirstCard({item: null, idx: null})
      }

      else{
        setShowCard(prevState => ({
          ...prevState,
          [idx]: true
        }))

        setMovement(movement+1)
        setScore(score+1)

        setFirstCard({item: null, idx: null})
      }

      
    }}

   /*  useEffect(() => {
      setShowCard(prevState => ({
        ...prevState,
        [idx]: false
      }))
    }, ) */

    

    return (
      <div className="cover" onClick={() => operacion(item, idx)} >
        <span className={`emoticon ${chars[item]}`} >
          {chars[item]}
        </span>
        <span
          className={showCard[idx] ? 'hidden' : 'emoticon-cover'}
          role="img"
          aria-label="cover"
        >🎆</span>
      </div>
    )
  }

  export default Card
