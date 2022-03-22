import React from "react";
import Board from "./components/Board.js";

const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

document.getElementsByClassName("nodeInput");

const checkNumber = (nodeInput) => {
    if (nodeInput.value < 0 || nodeInput.value > 9) {
        console.log("mieści się");
        return true;
    } else {
        console.log("nie mieści się");
        return false;
    }
};

function App() {
    return <Board />;
}

export default App;
