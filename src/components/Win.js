import React from 'react'

export const Win = ({score, movement}) => {
    return (
        <div>
            <h1> Felicidades Ganaste!</h1>
            <p>Resumen del juego!</p>

            <table>
                <tr>
                   <td> Movimientos</td>
                   <td> {movement} </td> 
                </tr>
                <tr>
                   <td> Score </td>
                   <td> {score} </td> 
                </tr>
            </table>
        </div>
    )
}
