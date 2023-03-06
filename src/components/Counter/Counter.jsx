import { useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0);
    
    const handleClickPlus = () => {
        setCounter(counter + 1)
    }

    const handleClickMinus = () => {
        setCounter (counter - 1)
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleClickPlus}>
                +1 
            </button>
            <button onClick={handleClickMinus}>
                -1 
            </button>
        </div>
    )
}