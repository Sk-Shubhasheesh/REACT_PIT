import { useState } from "react";
import {Link} from "react-router-dom"
const Navbar = ()=>{
    const [btnName,setBtnName] = useState("Light")
    return(
        <div className='navbar'>
            <h1>LOGO</h1>
            <ul className='menu_items'>
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/women">WOMEN</Link></li>
                <li>ABOUT</li>
                <li><Link to="/kid">KIDS</Link></li>
                <li>CARD</li>
                <button onClick={()=>{
                  btnName === "Light" ?setBtnName("Dark"):setBtnName("Light");

                }}>{btnName}</button>
            </ul>
           
        </div>
    )
}

// default export
export default Navbar;