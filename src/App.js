import React, {lazy, Suspense} from 'react';
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
import About from './components/About';
import Grocery from './components/Grocery';
import CompoC from './components/CompoC';
// import Gerocery from './components/Gerocery'; // normal importna karke hum lazy me dalenge


// lazy loading or dynamic import or code spliting

const grocery = lazy(()=>import('./components/Grocery'))

const App = ()=>{
    return( 
    <div>
        <Navbar />
        {/* <CompoC /> */}
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
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement:<Error />
    },
])




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
// root.render(<App/>)


