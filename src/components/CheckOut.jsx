import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


function CheckOut(){

    // Get the total items and cart items from the Redux store
    const total = useSelector(store => store.cart.totalItems)
    const cartItems = useSelector(store => store.cart.items)

    // State for storing contact details entered by the user
    const [contactDetails, setContactDetails] = useState({
        name: "",
        country: "",
        address: "",
        city: "",
        pinCode: "",
        mobileNo: "",
    });

    // Handle input field changes and update the corresponding field in contactDetails
    function handleInputChange(e) {
        const fieldName = e.target.name; // Get the name of the field
        const fieldValue = e.target.value; // Get the value of the field
      
        return setContactDetails((prevDetails) => ({...prevDetails,[fieldName]: fieldValue,}));
      };

    // Handle form submission to simulate order placement
    function handleSubmit(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        console.log("Order Placed:", { contactDetails, cartItems});
        alert(
            `Order placed successfully!,
             Customer :  ${ contactDetails.name},
             Total Price : ₹ ${(totalPrice).toFixed(2)}`
        );

        setContactDetails({
            name: "",
            country: "",
            address: "",
            city: "",
            pinCode: "",
            mobileNo: "",
        });       
    }
    
    // Calculate the total price of items in the cart
    const totalPrice = useMemo(() => {
        return cartItems.reduce(
            (total,item) => total + item.price * item.quantity,
            0
        );
    } , [cartItems])
    
    return(
        <div className="checkOut-page">
            <h2>CheckOut</h2>
        {cartItems.length > 0 ? (

            <div className="detail">
                <div className="contact">
                    <h2>Contact</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <label>Full Name:</label>
                        <input type="text" name="name" value={contactDetails.name} onChange={handleInputChange} required/>

                        <label>Country</label>
                        <input type="text" name="country" value={contactDetails.country} onChange={handleInputChange} required/>

                        <label>Address</label>
                        <input type="text" name="address" value={contactDetails.address} onChange={handleInputChange}  required/>
                        
                        <label>City</label>
                        <input type="text" name="city" value={contactDetails.city} onChange={handleInputChange} required/>

                        <label>Pin Code</label>
                        <input type="text" name="pinCode" value={contactDetails.pinCode} onChange={handleInputChange} required/>

                        <label>Mobile No.</label>
                        <input type="tel" name="mobileNo" pattern="[6-9][0-9]{9}" value={contactDetails.mobileNo} onChange={handleInputChange} required/>

                        <div className="order">
                            <button className="placeOrder">Place Order</button>
                        </div>
                    </form>
                </div>    

                <div className="checkout-cart">
                    <h2>Cart</h2>

                    <div className="checkout-detail">
                        <div>
                            <div className="edit">
                            <p>{total} items</p>
                            <Link to="/cart" className="edit-link">
                                <p>EDIT</p>
                            </Link>

                            </div>

                            {cartItems.map((item) => (
                                <div key={item.id}>
                                <div className="items-detail">
                                    <img src={item.thumbnail} width="100px"/>
                                    <div>
                                        <p>₹ {item.price}</p>
                                        <p>{item.title}</p>
                                        <p>Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <hr/>
                                </div>
                            ))}                     
                        </div>

                        <p className="subtotal">SubTotal: ₹{totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="empty">
                <h1>Yor Cart is Empty</h1>
                <p>Once you add something to your cart - it will appear here.</p>
                <Link to="/">
                    <button className="button">Get Started</button>
                </Link>
            </div>
        )}
                                   
        </div>
    )
}

export default CheckOut;