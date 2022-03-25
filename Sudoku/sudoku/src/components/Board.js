import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const initialBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1],
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => {
    // Get deep variable of the board
    const deepVariable = (board) => {
        return JSON.parse(JSON.stringify(board));
    };

    const [board, setBoard] = useState(deepVariable(initialBoard));

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
                    if (playersBoard[i][column] == inputValue) {
                        return false;
                    }
                }
                playersBoard[row][column] = inputValue;
            }
        } else {
            playersBoard[row][column] = 0;
        }

        setBoard(playersBoard);
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
