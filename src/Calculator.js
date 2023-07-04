import React, { useState } from 'react';
import './Calculator.css';

function Calculator(){
    const [result, setResult] = useState('');
    const [additionalFunctions, setAdditionalFunctions] = useState(false);

    /**
     * Concats the button strings and uses it to evaluate the output
     * @param {*} e
     */
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    /**
     * Clears the state 
     */
    const clear = () => {
        setResult('');
    }

    /**
     * Calculates the actual toString output 
     */
    const calculate = () => {
        let calculatedResult;
        try {
            if (additionalFunctions) {
                calculatedResult = getRandomFunction();
            } 
            else {
                if (result === ''){
                    setResult('');
                    return;
                }
                calculatedResult = eval(result).toString();
            }
            setResult(calculatedResult);
        } 
        catch (error) {
            setResult('Error');
        }
    };

    /**
     * Prints out imaginary/incorrect values no matter the input string
     * @returns value
     */
    const incorrectValues = () => {
        var arr = ['-0', '-∞', '∞'];
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * Prints out random strings 
     * @returns string
     */
    const randomStrings = () => {
        var str_arr = ['Too ez do it yourself', 'god is good', 'ʕ ͡° ͜ʖ ͡°ʔ'];
        return str_arr[Math.floor(Math.random() * str_arr.length)];
    }

    /**
     * TO DO: "=" -> counter for troll mode. Outputs strings to suggest clicking on me won't help:
     * "stop it don't click me ...... -> 'Im warning you!""
     *  When the counter reaches a certain number: make the calculator burst/disappear.
     */
    

    /**
     * 
     * @returns Randomizes functions when "TROLL" mode is toggled on 
     */
    const getRandomFunction = () => {
        const functions = [
            incorrectValues(),
            calculate(),
            randomStrings()
        ];
        return functions[Math.floor(Math.random() * functions.length)];
    }

    const toggleAdditionalFunctions = () => {
        setAdditionalFunctions(!additionalFunctions);
        setResult(''); // Clear the result when toggle is clicked
    };
    

    return (
        <div className="calculator">
                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            <div className="calc-container">
                <input type="text" value={result} />
            
                <div className="keypad">
                    <button className="highlight" onClick={clear} id="clear">
                    C
                    </button>
                    <button name="/" onClick={handleClick}>
                    /
                    </button>
                    <button name="7" onClick={handleClick}>
                    7
                    </button>
                    <button name="8" onClick={handleClick}>
                    8
                    </button>
                    <button name="9" onClick={handleClick}>
                    9
                    </button>
                    <button name="*" onClick={handleClick}>
                    *
                    </button>
                    <button name="4" onClick={handleClick}>
                    4
                    </button>
                    <button name="5" onClick={handleClick}>
                    5
                    </button>
                    <button name="6" onClick={handleClick}>
                    6
                    </button>
                    <button name="-" onClick={handleClick}>
                    -
                    </button>
                    <button name="1" onClick={handleClick}>
                    1
                    </button>
                    <button name="2" onClick={handleClick}>
                    2
                    </button>
                    <button name="3" onClick={handleClick}>
                    3
                    </button>
                    <button name="+" onClick={handleClick}>
                    +
                    </button>
                    <button name="0" onClick={handleClick}>
                    0
                    </button>
                    <button name="." onClick={handleClick}>
                    .
                    </button>
                    <button className="equal" onClick={calculate} id="result">
                    =
                    </button>
                </div>

                {/* <div className="toggle">
                    <label>
                        Troll Mode
                        <input type="checkbox" checked={additionalFunctions} onChange={toggleAdditionalFunctions} />
                    </label>
                </div> */}
            </div>
        </div>
      );

}
export default Calculator;