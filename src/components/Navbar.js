import { useState } from "react";

const Navbar = ()=>{
    const [btnName,setBtnName] = useState("Light")
    return(
        <div className='navbar'>
            <h1>LOGO</h1>
            <ul className='menu_items'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>ABOUT</li>
                <li>KIDS</li>
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