// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

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

const Board = ({ initialBoard, currentBoard, changeNumber }) => {
    return (
        <div className="sudoku">
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
                                                    currentBoard[row][
                                                        column
                                                    ] === 0
                                                        ? ""
                                                        : currentBoard[row][
                                                              column
                                                          ]
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
