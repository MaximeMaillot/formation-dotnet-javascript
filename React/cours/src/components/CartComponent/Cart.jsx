import React, { useState } from 'react';
import "./Cart.css";

const Cart = ({ cart, updateCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <div className='relative'>
            <div className="cart-list over">
                {
                    cart.length > 0 ?
                        <div>
                            <h2>Panier</h2>
                            <div className='inner-card'>
                                {cart.map(({ name, price, amount }, index) => {
                                    return <div key={index}>{name} {price} {amount} {price * amount}</div>;
                                })}
                            </div>
                            <button className='btn btn-secondary' onClick={() => { updateCart([]); }}>Vider Panier</button>
                        </div> :
                        <div className='vide'>Votre panier est vide</div>
                }
                <button className='btn btn-secondary' onClick={() => { setIsOpen(false); }}>
                    Closed
                </button>
            </div>
        </div>
    ) : (
        <div>
            <button className='btn btn-secondary' onClick={() => { setIsOpen(true); }}>
                Open
            </button>
        </div>
    );
};

export default Cart;