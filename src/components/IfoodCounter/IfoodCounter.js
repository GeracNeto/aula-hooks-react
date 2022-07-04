import { useState, useEffect } from 'react'
import './IfoodCounter.css'

export default function IfoodCounter() {

    const [value, setValue]  = useState(1);
    const [buttonClass, setButtonClass] = useState('button-active');

    useEffect(()=>{
        alert('Carrinho vazio!')        
    },[buttonClass])

    function up(){
        setValue(value+1);
        setButtonClass('button-active');  
    }

    function down(){
        if(value > 0){
            setValue(value-1);
        }

        if(value < 1){
            setButtonClass('button-inactive');
        } 
    }

    return (
        <div className='master-container'>

        <button className={buttonClass} onClick={down}>-</button>

        <p>{value}</p>

        <button className='button-active' onClick={up}>+</button>

        </div>
    )
}
