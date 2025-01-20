import React from 'react';
import ReactDOM from'react-dom/client';
// default export
import Navbar from './components/Navbar';
// named export
import { ProductCard } from './components/ProductCart';

const App = ()=>{
    return( 
    <div>
        <Navbar />
        <ProductCard />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)


