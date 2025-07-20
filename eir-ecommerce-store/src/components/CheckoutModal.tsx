import React from 'react';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cartItems } = useCart();

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const generateWhatsAppMessage = () => {
        const messageLines = cartItems.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`);
        const message = `Checkout Summary:\n${messageLines.join('\n')}\nTotal: $${totalAmount.toFixed(2)}`;
        return `https://wa.me/2348034295030?text=${encodeURIComponent(message)}`;
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Checkout</h2>
                    <ul className="mb-4">
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <button className="bg-gray-300 p-2 rounded" onClick={onClose}>Close</button>
                        <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded">Checkout</a>
                    </div>
                </div>
            </div>
        )
    );
};

export default CheckoutModal;