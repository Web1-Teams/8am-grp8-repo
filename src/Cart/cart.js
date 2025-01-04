
import '../styles/cart.css';

const Cart=({cart})=>{
    
    return(
        <article>
            {
                cart?.map((item)=>(
                    <div className="cart_box"key={item.id}>
                       <div className="cart_img">
                        <img src={item.img} alt="product"/>
                         <p>{item.title}</p>
                       </div>
                       <div>
                         <button>+</button>
                         <button>{item.amount|| 1}</button>
                         <button>-</button>
                       </div>
                       <div>
                         <span>${item.price}</span>
                         <button>Remove</button>
                       </div>
                    </div>
                ))}
            <div className="total">
                <span>Total price of your cart</span>
                <span>Rs-0</span>
            </div>
        </article>
    )
}


export default Cart;