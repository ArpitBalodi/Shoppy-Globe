import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

function CartItem(prop){

    // Destructuring properties from the passed `prop.item` object for readability
    const {thumbnail,title,price,description,availabilityStatus,shippingInformation,quantity} = prop.item;  
        
        // State to manage the current quantity of the item in the cart
        const [count, setCount] = useState(quantity);

        // Hook to dispatch actions to the Redux store
        const dispatch = useDispatch();


        function handleRemoveItem(item){
            if(count > 0){
                dispatch(removeItem(item));
                setCount(count-1);
            }
        }
        
    return(
        <>
        <hr/>
        <div className="cartItem">
            <img src={thumbnail} alt={title}/>

            <div className="cartItemDetails">
                <p>{description}</p>
                <p className="status">{availabilityStatus}</p>
                <p className="shippingInfo">{shippingInformation}</p>
                <p>No.of Items : {quantity} </p>
                <p>Total Price:  ₹{(count * price).toFixed(2)}</p>
                
                <button onClick={() => handleRemoveItem(prop.item)} className="button">Remove</button>
            </div>

        </div>
        </>
    )
}

export default CartItem;