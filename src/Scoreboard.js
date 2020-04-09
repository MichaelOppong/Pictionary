import React from 'react';

function Scoreboard(props){
    return(
        <div>
            <div>
                <p>Round: {props.round}/7</p>
                <p>Drawing Player: Player {props.drawingPlayer}</p>
            </div>
            <div>
                <div>
                    <p>Score: {props.score}</p>
                </div>
            </div>

        </div>

    )
}

export default Scoreboard;