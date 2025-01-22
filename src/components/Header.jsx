import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import hamburger from "../assets/images/hamburger-icon.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header(prop) {

    // Get total items in the cart from Redux store
    const cartItems = useSelector(store => store.cart.totalItems)

    // State to track whether the menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

     // Toggle the mobile menu's visibility
    function toggleMenu(){
        setIsMenuOpen(prev => !prev);
      }


    return (
        <div className={`header ${isMenuOpen ? "open" : ""}`}>
            <div className="hamburger" onClick={toggleMenu}>
                <img src={hamburger} alt="icon" className="hamburger-icon"/>
            </div>
            <Link to="/" className="logo">
                <img src={logo} className="logo-image" alt="Logo" />
                <h2>
                    <span className="shoppy">Shoppy</span>
                    <span className="globe">Globe</span>
                </h2>
            </Link>
            
                <div className={`search ${isMenuOpen ? "open" : ""}`}>
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="search-bar"
                        onChange={(e)=>prop.setSearch(e.target.value)}
                    />                </div>
                <div className="nav">
                    <Link to="/cart" className="cartLogo">
                        <img src={cart} className="cart-image" alt="Cart" />
                        <span>{cartItems}</span>
                    </Link>
                </div>

            </div>
    );
}

export default Header;




