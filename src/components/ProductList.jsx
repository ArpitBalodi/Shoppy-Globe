import { useOutletContext } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useState, useEffect } from "react";
import Product from "./Product";

function ProductList() {
    // Accessing the `search` term from the context provided by the parent route
    const { search } = useOutletContext(); 
    
    const { data, error, loading } = useFetch("https://dummyjson.com/products");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Ensure data exists before attempting to filter
        if (data && data.products) {
            const searchItem = search?.toLowerCase() || "";
            const filtered = data.products.filter((product) =>
                product.title.toLowerCase().includes(searchItem) ||
                product.category.toLowerCase().includes(searchItem) ||
                product.price.toString().includes(searchItem) ||
                product.brand?.toLowerCase().includes(searchItem)
            );
            setFilteredProducts(filtered);
        }
    }, [data, search]);
    

    if (error) {
        return <p className="loading">Error in Loading Data: {error.message}</p>;
    }

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <div className="productList">
            {filteredProducts.length ? (
                filteredProducts.map((product) => (
                <Product key={product.id} productDetail={product} />
            ))
            ) : (
                <p>No Products Found</p>
            )}
        </div>
    );
}

export default ProductList;

