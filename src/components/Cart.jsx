import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function Cart(){

    const cartItems = useSelector(store => store.cart.items)
    const total = useSelector(store => store.cart.totalItems)

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total,item) => {
            return  total + item.price * item.quantity
        },0);
        
    } , [cartItems])

    
    if(cartItems.length == 0){
        return <p className="loading">Your Cart is Empty</p>
    }

    return(
        <>
        <div className="cart">
            <h3>Shopping Cart</h3>
            {cartItems.map((item) => (
                <CartItem key={item.id} item ={item}/>
            ))}
            <hr/>
            <div className="totalPrice"><p>Total({total} items):</p>  ₹{ totalPrice.toFixed(2)}</div>
        </div>

        <Link to="/checkout" className="link">
            <button className="checkout">Checkout</button>
        </Link>
        </>
    )
}

export default Cart;