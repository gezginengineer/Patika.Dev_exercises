import { useState } from "react";
import "../components/Counter.css"

const Counter = () => {
    const [number, setNumber] = useState(0)
    
    const Increase = () => {setNumber(number+1)}
    const Decrease = () => {setNumber(number-1)}
    const Reset = () => {setNumber(0)}
    
    return (
        <>
            <div>
            <h1>{number}</h1>
            <button id="Inc" onClick={Increase} >Increase</button>
            <button id="Dec" onClick={Decrease} >Decrease</button>
            <button id="Res" onClick={Reset}>Reset</button>
            </div>
        </>
    );
}

export default Counter;