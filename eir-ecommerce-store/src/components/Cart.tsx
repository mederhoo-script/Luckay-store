import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center mb-2">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="w-16 border rounded p-1"
                                    />
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 font-bold">
                        Total: ${totalPrice.toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;