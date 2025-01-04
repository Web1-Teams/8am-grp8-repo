import React from "react";
import"../styles/navb.css";

const Nav=({size,setShow})=>{
    return(
        <nav>
            <div className="nav_box">
                <span className="Golden_Glow" onClick={()=>setShow(true)}>
                    Golden Glow
                </span>
                <div className="cart" onClick={()=>setShow(false)}>
                    <span>
                        <i className="bi bi-cart"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}
export default Nav;