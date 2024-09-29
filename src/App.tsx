
import { useState } from 'react';
import  * as colorData from './colors.json';

const App = () => {

    //states to show the colors component and to hold the colors Array
    const [showColors, setShowColors ] = useState(false);
    const [colorsArray, setColorsArray] = useState([]);
    
    //colorButton component
    const ColorButton = ({onClick, children}) => {
        return <button type="button" id="colorButton" onClick={onClick}>{children}</button>;
    };

    //colors display div
    // loops through the colorsArray set below and colors the divs with the lucky colors
    const ColorsDisplayDiv = () => {
        let divs = colorsArray.map(({hex, name}) => {
            return <div key={name} style={{backgroundColor: `#${hex}`, padding: '1rem'}}>{name}</div>
        })
        return divs

    };

    
    //function that randomly (luckily) picks the lucky colors for the user
    const randomColorPicker = (colorsLength: number) => {
        const randomNumberArray = [];

        for(let i = 0; i < 5; i++) {
         randomNumberArray.push(Math.floor(Math.random() * colorsLength));
        }
        return randomNumberArray;
    }



    //function to handle the button click
    const handleButtonColorClick = () => {
        //calls the randomeColorPicker function and sets it to the randomArray
        const randomNumberArray = randomColorPicker(colorData.default.length);
        setShowColors(true);
        
        //temporary array to hold the color objects until the map finishes
        let tempColorArray =  [];


        //iterating through the randomNumberArray to use the numbers to set an array with the objects from the colorObj
        randomNumberArray.map((colorIndex) => {
            let colorObj = colorData.default[colorIndex];
            tempColorArray.push(colorObj);
        })

        //after the loop finishes sets the color arrays to be used in the ColorsDisplayDiv component 
        setColorsArray(tempColorArray);
        }

    return (
        <>
            <h1>Welcome to Color World!</h1>
            <p>Press the button below for an iridescent            suprise!</p>
            {/* displays the button and uses onClick to handle the click */}
            <ColorButton onClick={handleButtonColorClick}> You're lucky colors for today!</ColorButton>
            {/* conditional rendering of the colors display div */}
            {showColors && <ColorsDisplayDiv />}
        </>
    );
};

export default App;
