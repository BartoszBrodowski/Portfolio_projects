import React, { useState } from "react";
import Board from "./components/Board.js";
import Header from "./components/Header.js";
import Buttons from "./components/Buttons";

// const buttonClicked = () => {
//     if ()
// }

function App() {
    const initialBoard = [
        [5, 2, 0, 8, 0, 0, 0, 0, 1],
        [4, 3, 0, 0, 0, 6, 2, 8, 0],
        [8, 0, 0, 2, 0, 0, 6, 0, 0],
        [0, 4, 1, 7, 0, 2, 0, 5, 3],
        [0, 8, 5, 0, 3, 0, 7, 2, 4],
        [0, 0, 3, 0, 0, 0, 0, 6, 0],
        [0, 0, 8, 0, 0, 7, 0, 9, 0],
        [3, 6, 0, 0, 1, 5, 0, 0, 7],
        [0, 0, 0, 0, 6, 0, 5, 1, 0],
    ];
    // Get deep variable of the board
    const deepVariable = (board) => {
        return JSON.parse(JSON.stringify(board));
    };

    const [board, setBoard] = useState(deepVariable(initialBoard));

    const checkIfFulfilled = () => {
        for (let i = 0; i < initialBoard[0].length; i++) {
            for (let j = 0; j < initialBoard[0].length; j++) {
                if (initialBoard[i][j] === 0) {
                    return false;
                }
            }
        }
        return true;
    };

    const changeNumber = (event, row, column) => {
        const inputValue = parseInt(event.target.value);
        const playersBoard = deepVariable(board);
        // Czytamy wartości od 1 do 9 (tylko takie mamy w Sudoku) oraz 0 jako wartość pustego pola

        if (inputValue === 0 || (inputValue >= 1 && inputValue <= 9)) {
            // Check if the inputed number is already in the boards row
            if (!playersBoard[row].includes(inputValue)) {
                // Check if the inputed number is in the boards column
                for (let i = 0; i < 9; i++) {
                    if (playersBoard[i][column] === inputValue) {
                        return false;
                    }
                }
                playersBoard[row][column] = inputValue;
            }
        } else {
            playersBoard[row][column] = 0;
        }

        setBoard(playersBoard);
        if (checkIfFulfilled) {
            console.log("Fulfilled");
        }
    };

    const buttons = [
        {
            id: 1,
            text: "Clear",
        },
        {
            id: 2,
            text: "Check",
        },
        {
            id: 3,
            text: "Hint",
        },
    ];

    const buttonsClicked = (name) => {
        if (name == "Clear") {
            // board = initialBoard
        }
    };

    return (
        <div className="main-container">
            <Header />
            <Board
                initialBoard={initialBoard}
                currentBoard={board}
                changeNumber={changeNumber}
            />
            <Buttons buttons={buttons} />
            {/* onClick={() => buttonClicked()} */}
        </div>
    );
}

export default App;
