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
const node = document.getElementsByClassName("nodeInput");

const Board = () => {
    // Get deep variable of the board
    const deepVariable = (board) => {
        return JSON.parse(JSON.stringify(board));
    };

    const [board, setBoard] = useState(deepVariable(initialBoard));

    const changeNumber = (event, row, column) => {
        console.log(parseInt(event));
        const inputValue = parseInt(event.target.value) || 0,
            playersBoard = deepVariable(board);
        // Czytamy wartości od 1 do 9 (tylko takie mamy w Sudoku) oraz 0 jako wartość pustego pola
        if (inputValue === 0 || (inputValue >= 1 && inputValue <= 9)) {
            playersBoard[row][column] = inputValue;
        }
        setBoard(playersBoard);
        // isValid()
    };

    return (
        <div className="sudoku">
            <div className="header">Sudoku!</div>
            <table className="board">
                <tbody>
                    {numbers.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {numbers.map((column, columnIndex) => {
                                    return (
                                        <td key={columnIndex}>
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
