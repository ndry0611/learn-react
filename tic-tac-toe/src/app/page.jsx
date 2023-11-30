"use client";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function Board({ xIsNext, squares, onPlay }) {

  /*
    handleClick otomatis dijalankan pada onSquareClick (yang seharusnya hanya dijalankan ketika di click)
    () -> pharanteses dalam function berarti lgsg mengeksekusi functionnya.
    agar function tidak langsung di eksekusi, bisa dibungkus terlebih dahulu menggunakan sebuah function
    ex :61
  */
  function handleClick(i) {
    //Condition untuk square berisi
    if (squares[i] || calculateWinner(squares)) return;

    //Buat array baru menampung value
    /* Tujuan array baru = punya 2 nilai (array baru dan array sebelumnya) */
    const nextSquares = squares.slice(); //slice without params == duplicate array

    //Logic turn X and O
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = '';
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  //Looping
  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, i) => <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />)}
      </div>
    </>
  )


  // // No Loooping
  // return (
  //   <>
  //     <div className="status">{status}</div>
  //     <div className="board">
  //       <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
  //       <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
  //       <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  //       <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
  //       <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
  //       <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  //       <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
  //       <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
  //       <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  //     </div>
  //   </>
  // )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, i) => {
    let description = '';
    if (i > 0) {
      description = 'Go to move #' + i;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={i}>
        <button onClick={() => jumpTo(i)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

// Winning condition
function calculateWinner(squares) {
  const win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  for (let i = 0; i < win.length; i++) {
    // const cond1 = win[i][0]
    // const cond2 = win[i][1]
    // const cond3 = win[i][2]

    //JS destructuring
    const [cond1, cond2, cond3] = win[i];
    if (squares[cond1] && squares[cond1] === squares[cond2] && squares[cond1] === squares[cond3]) {
      return squares[cond1];
    }
  }
  return false;
}