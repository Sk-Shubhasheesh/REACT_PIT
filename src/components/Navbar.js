import { useContext, useState } from "react";
import {Link} from "react-router-dom"
import UserContext from "../utils/UserContext"
const Navbar = ()=>{
    const [btnName,setBtnName] = useState("Light")
    
    const user = useContext(UserContext)

    useContext
    return(
        <div className="flex justify-between px-10 py-5 shadow-md">
            <h1 className="font-bold text-2xl ">AJIO</h1>
            <ul className="flex justify-between w-[40%]">
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/women">WOMEN</Link></li>
                <li>ABOUT</li>
                <li><Link to="/kid">KIDS</Link></li>
                <li>CARD</li>
                <li>{user.name}</li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/grocery">GROCERY</Link></li>
                <button className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0f0]" onClick={()=>{
                  btnName === "Light" ?setBtnName("Dark"):setBtnName("Light");

                }}>{btnName}</button>
            </ul>
           
        </div>
    )
}

// default export
export default Navbar;