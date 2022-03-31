// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

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

// Board to test if checkIfFulfilled() function works

// const solvedBoard = [
//     [5, 2, 6, 8, 7, 9, 4, 3, 1],
//     [4, 3, 7, 1, 5, 6, 2, 8, 9],
//     [8, 1, 9, 2, 4, 3, 6, 7, 5],
//     [0, 4, 1, 7, 8, 2, 9, 5, 3],
//     [9, 8, 5, 6, 3, 1, 7, 2, 4],
//     [2, 7, 3, 5, 9, 4, 1, 6, 8],
//     [1, 5, 8, 4, 2, 7, 3, 9, 6],
//     [3, 6, 2, 9, 1, 5, 8, 4, 7],
//     [7, 9, 4, 3, 6, 8, 5, 1, 0],
// ];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => {
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

        // if (inputValue === 0 || (inputValue >= 1 && inputValue <= 9)) {
        //     playersBoard[row][column] = inputValue;
        // }
        // if (!playersBoard[row].includes(inputValue)) {
        //     console.log(playersBoard[row]);
        //     console.log(row);
        // }

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

    return (
        <div className="sudoku">
            <div className="header">Sudoku!</div>
            <table className="board">
                <tbody>
                    {numbers.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex} className={`row${row}`}>
                                {numbers.map((column, columnIndex) => {
                                    return (
                                        <td
                                            key={columnIndex}
                                            className={`column${column}`}
                                        >
                                            <input
                                                value={
                                                    board[row][column] === 0
                                                        ? ""
                                                        : board[row][column]
                                                }
                                                className="nodeInput"
                                                onChange={(e) =>
                                                    changeNumber(e, row, column)
                                                }
                                                disabled={
                                                    initialBoard[row][column] // !== 0 ?? (TODO)
                                                }
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Board;
