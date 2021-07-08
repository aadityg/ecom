 import React from 'react';
 import './Subtotal.css';
 import CurrencyFormat from "react-currency-format";
 export default  function Subtotal(){
    return(
        <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                Subtotal (0 items):<strong> 0</strong>
            </p>
            <small className='subtotal-gift'>
                <input type='checkbox'/> This order cointains a gift  
            </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button>Procced to checkout</button>

        </div>
    )
};