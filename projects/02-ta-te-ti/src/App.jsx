import { useState } from 'react'
import './App.css'

// Primero los turnos
const TURNS = {
  X: 'x',
  O: 'o'
}

// Segundo el tablero
// const board = Array(9).fill(null)

// Los cuadrados
const Square = ({ children, updateBoard, isSelected, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

// Combos ganadores
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)

  //null cuando no hay ganador y folse cuando hay un empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    //para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = cumbo
      if (
        boardToCheck[a] && //aquie vemos si en el 0 hay una x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

  const updateBoard = (index) => {
    //No actualizamos esta posicion si ya hay algo
    if (board[index]) return

    //Actualizar el tablero
    const newBoard = [...board] //Generamos un nuevo board
    newBoard[index] = turn //En esta pocicion en este indice guardamos el turno
    setBoard(newBoard) //Actualizamos

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
