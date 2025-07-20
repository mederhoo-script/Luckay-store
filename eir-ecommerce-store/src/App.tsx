import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="container mx-auto p-4">
          <ProductList />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;