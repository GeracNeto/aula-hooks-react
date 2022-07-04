import { useState } from "react";

function Counter(){

    const [quantity, setQuantity] = useState(0);

    function increment(){
        setQuantity(quantity + 1);
        console.log(quantity);
    }

    return(
        <div>
            <h1>{quantity}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;