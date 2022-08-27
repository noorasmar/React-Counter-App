import React from 'react';
import './style.css'

function Button({operation, count, setCount}) {

    const hundleClick = ()=>{
        if(operation === 'add') setCount(count + 1)
        else{
            if(count > 0)
                setCount(count - 1)
        }
    }

    return (
        <button className={operation} onClick={hundleClick}>
            {operation === 'add'? '+' : '-'}
        </button>
    );
}

export default Button;