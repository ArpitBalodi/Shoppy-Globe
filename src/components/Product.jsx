import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function Product(prop){

    const dispatch = useDispatch();

    function handleAddItem(item){
        dispatch(addItem(item))
    }

    return(
        <div className="product">
            <Link to={`product/${prop.productDetail.id}`} className="link">
                <img className="productImage" src={prop.productDetail.thumbnail}/>
                <h2 className="brand">{prop.productDetail.brand}</h2>
                <h4>{prop.productDetail.title}</h4>
            </Link>
                <h4>Cost: <span>₹ {prop.productDetail.price}</span></h4>
                <h4>{prop.productDetail.category}</h4>

                <h4>Rating: <span>{prop.productDetail.rating}</span></h4>
            

            <button onClick={() => handleAddItem(prop.productDetail)} className="button">Add to Cart</button>
        </div>
    )
}

export default Product;