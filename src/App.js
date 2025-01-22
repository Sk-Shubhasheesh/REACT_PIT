import React from 'react';
import ReactDOM from'react-dom/client';
// default export
import Navbar from './components/Navbar';
// named export
import { ProductCard } from './components/ProductCart';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Kids from './components/Kids';
import Error from './components/Error';
import Men from './components/Men';

const App = ()=>{
    return( 
    <div>
        <Navbar />
        <ProductCard />
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error />
    },{
        path:"/kid",
        element:<Kids/>
    },
    {
        path:"/men",
        element:<Men />
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
// root.render(<App/>)


