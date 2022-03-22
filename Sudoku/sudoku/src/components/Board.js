import React from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => {
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
                                            <input className="nodeInput" />
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
