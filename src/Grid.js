import React from 'react';


class Grid extends React.Component {
    state = {
        grid: ["", "", "", "", "", "", "", "", ""],
        turn: true
    }

    takeTurn(index) {
            this.setState((currState) => {
                if (currState.grid[index] === "") {
                    const newGrid = [...currState.grid]
                    newGrid[index] = (currState.turn ? "X" : "O")
                    return {grid: newGrid, turn: !currState.turn}
                }
            })
        }

    render() {
        return (
            <div id="grid">
            <div class="row">
                <div id={0} class="square" onClick={()=>this.takeTurn(0)}><p>{this.state.grid[0]}</p></div>
                <div id={1} class="square" onClick={()=>this.takeTurn(1)}><p>{this.state.grid[1]}</p></div>
                <div id={2} class="square" onClick={()=>this.takeTurn(2)}><p>{this.state.grid[2]}</p></div>
            </div>
            <div class="row">
                <div id={3} class="square" onClick={()=>this.takeTurn(3)}><p>{this.state.grid[3]}</p></div>
                <div id={4} class="square" onClick={()=>this.takeTurn(4)}><p>{this.state.grid[4]}</p></div>
                <div id={5} class="square" onClick={()=>this.takeTurn(5)}><p>{this.state.grid[5]}</p></div>
            </div>
            <div class="row">
                <div id={6} class="square" onClick={()=>this.takeTurn(6)}><p>{this.state.grid[6]}</p></div>
                <div id={7} class="square" onClick={()=>this.takeTurn(7)}><p>{this.state.grid[7]}</p></div>
                <div id={8} class="square" onClick={()=>this.takeTurn(8)}><p>{this.state.grid[8]}</p></div>
            </div>
        
        </div>
        )  
    }

    makeGrid(numOfRows) {
        const grid = [];
        for (let i = 0; i < numOfRows*numOfRows; i++) {
            grid.push("")
        }
        this.setState({grid: grid})
        
        for (let i = 0; i < numOfRows; i++) {
            <div class="row">
                {for (let j = 0; j < numOfRows; j++) {
                    
                }}
            </div>
        } 
    }
     
}
export default Grid;