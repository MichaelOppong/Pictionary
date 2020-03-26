import React from 'react';
import Button from './Button';
import animals from './animals.json';


function PlayerOne(props) {
   function selectAnimal(){
       let animalIndex = Math.ceil(Math.random() * animals.length);
       let newAnimal = animals[animalIndex];
       props.setAnimal(newAnimal)
    }
    return(
        <div>
            <h1>{props.animal}</h1>
            <Button 
                handleClick={selectAnimal}
                text='Choose an Animal'
            />
            <Button
                handleClick={() => { props.setTurn(2); }}
                text='Done drawing!'
            />
        </div>
    )

}

export default PlayerOne;