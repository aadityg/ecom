import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
export default function Checkout(){
    return(
        <div className='checkout'>
            <div className='checkout-left'>
                <h2 className='checkout-title'> HELLO, THIS BASKET </h2>
            </div>
            <div className='checkout-right'>
<Subtotal/>
            </div>
        </div>

    )
}