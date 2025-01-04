import React from "react";
import list from '../data';
import Cards from'./card';
import '../styles/prod.css';

const Prod=({cart, setCart, setWarning })=>{
    

    return(
        <section>
            {
                list.map((item)=>(
                <Cards key={item.id} item={item} cart={cart} setCart={setCart} setWarning={setWarning}/>
            ))}
        </section>
    );
};
export default Prod;