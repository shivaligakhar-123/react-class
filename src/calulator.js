import React , {useState} from 'react';
import './calculator.css';
const Calculator = () => {
    const [result, setResult] = useState("");
    const handleClick=(e) =>{
        setResult(result.concat(e.target.name));
    }
    const clear = () =>{
        setResult("");
    }
    const backspace =() =>{
        setResult(result.substring(0,result.length-1));
    }
    const calculate = () =>{
        setResult(eval(result).toString());
    }
    return(
        <>
            <div className="container">
                <input type ="text" value={result}/>
                <div className="keypad">
                    <button onClick={clear}>Clear</button>
                    <button onClick={backspace}>C</button>
                    <button onClick={handleClick} name="/">&divide;</button>
                    <button onClick={handleClick} name="7"> 7</button>
                    <button onClick={handleClick} name="8">8</button>
                    <button onClick={handleClick} name="9">9</button>
                    <button onClick={handleClick} name="*">&times;</button>
                    <button onClick={handleClick} name="4"> 4</button>
                    <button onClick={handleClick} name="5">5</button>
                    <button onClick={handleClick} name="6">6</button>
                    <button onClick={handleClick} name="-">-</button>
                    <button onClick={handleClick} name="1">1</button>
                    <button onClick={handleClick} name="2">2</button>
                    <button onClick={handleClick} name="3">3</button>
                    <button onClick={handleClick} name="+">+</button>
                    <button onClick={handleClick} name="0">0</button>
                    <button onClick={handleClick} name=".">.</button>
                    <button onClick={calculate} name="=">=</button>
                    
                </div>
            </div>
        </>
    )
}

export default Calculator;
