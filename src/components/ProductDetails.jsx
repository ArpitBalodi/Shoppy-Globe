import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


function ProductDetails(){

    // Retrieve route parameters(product id)
    const params = useParams(); 

    // State to store selected product details
    const [product,setProduct] = useState(null)

    const { data, error, loading } = useFetch("https://dummyjson.com/products");

    const dispatch = useDispatch();

    // Function to handle adding an item to the cart.
    function handleAddItem(item){
            dispatch(addItem(item))
        }
    

    useEffect(() => {
        if(data && data.products){
            const selectedProduct = data.products.find(
                // Match product ID from route parameters
                (product) => product.id === Number(params.id)
            );
                setProduct(selectedProduct);          
        }
    },[data,params.id])

    if (error) {
        return <p>Error in Loading Data: {error.message}</p>;
    }

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    const width = product.dimensions?.width;
    const height = product.dimensions?.height;

    return (
        <>
            
         <div className="productDetail">
            
            <div className="image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            
            <div className="basicDetails">
                <h2>{product.brand}</h2>
                <p>{product.description}</p>
                <hr/>
                <div className="price">
                    <sup>₹</sup>
                    <p>{(product.price )}</p>
                </div>
                <span><strong>Rating: </strong>{product.rating}</span>

                <strong>{product.returnPolicy}</strong>
                <hr/>

                <div  className="moreDetail">
                    <h5>Product Details</h5>

                    <p><strong>Name: </strong> {product.title}</p>
                    <p><strong>Warranty: </strong> {product.warrantyInformation}</p>
                    <p><strong>Product Width: </strong> {width || "Not available"}</p>
                    <p><strong>Product Height: </strong> {height || "Not available"}</p>
                    <hr/>
                </div>

                <button onClick={() => handleAddItem(product)} className="button">Add to Cart</button>

            </div>
             
         </div>
                <h5 className="heading">Reviews</h5>
                <div className="reviews">
                    {product.reviews && product.reviews.length > 0 ? (
                        product.reviews.map((review,index) => (
                            <div key={index} className="review">
                                <p><strong>Reviewer:</strong> {review.reviewerName}</p>
                                <p><strong>Rating:</strong> {review.rating}</p>
                                <p><strong>Comment:</strong> {review.comment}</p>
                                <p><strong>Email:</strong> {review.reviewerEmail}</p>
                                <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
                                <hr/>
                            </div>
                        ))
                    ) : (
                        <p>No Reviews available</p>
                    )}
                </div>
        </>
    );
    
}

export default ProductDetails;