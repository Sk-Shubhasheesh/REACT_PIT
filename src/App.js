import React from 'react';
import ReactDOM from'react-dom/client';
// default export
import Navbar from './components/Navbar';
// named export
import { ProductCard } from './components/ProductCart';

import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';

import Kids from './components/Kids';
import Error from './components/Error';
import Men from './components/Men';
import ProductDetails from './components/ProductDetails';

const App = ()=>{
    return( 
    <div>
        <Navbar />
        <Outlet />
        {/* <ProductCard /> */}
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<ProductCard/>
            },
            {
                path:"/kid",
                element:<Kids/>
            },
            {
                path:"/men",
                element:<Men />
            },
            {
                path:"/product/:productId",
                element:<ProductDetails />
            }
        ],
        errorElement:<Error />
    },
])




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
// root.render(<App/>)


