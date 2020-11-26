import React from 'react';


class Grid extends React.Component {
    state = {
        grid: ["", "", "", "", "", "", "", "", ""],
        turn: true,
        class: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
    }

    takeTurn(index) {
        this.setState((currState) => {
            if (currState.grid[index] === "") {
                const newGrid = [...currState.grid]
                const newClass = [...currState.class]
                newGrid[index] = (currState.turn ? "X" : "O")
                newClass[index] = "filled"
                return { grid: newGrid, turn: !currState.turn, class: newClass }
            }
        })
    }

    render() {
        return (
            <div id="grid">{
                this.state.grid.map((item, index) => {
                    return <div id={index} class={`square ${this.state.class[index]}`} onClick={() => this.takeTurn(index)}><p>{this.state.grid[index]}</p></div>
                })
            }
            </div>


        )
    }

    // componentDidMount() {
    //     const grid = [];
    //     for (let i = 0; i < numOfRows*numOfRows; i++) {
    //         grid.push("")
    //     }
    //     this.setState({grid: grid})
    // }

    // makeGrid(numOfRows) {

}
export default Grid;