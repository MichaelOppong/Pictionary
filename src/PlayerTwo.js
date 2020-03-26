import React, {useState} from 'react';
import NextGameButton from './Button';

function PlayerTwo(props) {
    const [guess,setGuess] = useState('');
    function handleChange(e) {
        e.preventDefault();
        setGuess(e.target.value.toLowerCase());
    }

    function handleSubmit(e){
        e.preventDefault();
        checkAnswer();
    }
    
    function checkAnswer(){
        if (props.animal === guess) {
           alert("Your answer is " +guess+ " and it is correct.") ;
        } else{
            alert("Your answer is " +guess+ " and it is wrong. The correct answer is "+props.animal);
        }
    }

   function handleNextGameButtonClick() {
        props.setTurn(1); 
        props.setAnimal('');
        let canvas = props.refCanvas.current;
        canvas.clear();
    }

    return(
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <label>Make Your Guess! </label>
                <input
                    type='text'
                    name='guess'
                    value={guess}
                    onChange={handleChange}
                />
                <button>Submit Your Answer</button>
            </form>
            <NextGameButton
                handleClick={handleNextGameButtonClick}
                text='Next Round'
            />
        </div>   
    );

}



export default PlayerTwo;