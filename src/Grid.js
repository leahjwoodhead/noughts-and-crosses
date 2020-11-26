import { render } from '@testing-library/react';
import React from 'react';


    

class Grid extends React.Component {
    state = {}
    // onClick={()=>takeTurn()}
    render() {
    return (
        <div id="grid">
        <div id='row1' class="row">
            <div id={1} class="square"></div>
            <div id={2} class="square"></div>
            <div id={3} class="square"></div>
        </div>
        <div id='row2' class="row">
            <div id={4} class="square"></div>
            <div id={5} class="square"></div>
            <div id={6} class="square"></div>
        </div>
        <div id='row3' class="row">
            <div id={7} class="square"></div>
            <div id={8} class="square"></div>
            <div id={9} class="square"></div>
        </div>
        
    </div>
    )
}

    //return 
    
    
}
export default Grid;