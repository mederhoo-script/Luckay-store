import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">EIR - Elegant Iconnent Resources</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-gray-400">Cart</Link>
                    </li>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
};

export default Header;