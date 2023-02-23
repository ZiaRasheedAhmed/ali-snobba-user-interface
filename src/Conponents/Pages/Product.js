import styles from './Product.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useCallback } from 'react';


const Product = ({data}) => {
    const n = useNavigate();
    const [quantity, setQuantity] = useState('1');
    
    const handleQuantity = useCallback(e => {
        setQuantity(e.target.value);
    }, []);

    const addToCart=()=>{
        const cart_data={
            productID:data.id,
            quantity:quantity,
            totalPrice:quantity*data.productPrice
        };
        fetch("http://localhost:8081/cart/addcart", {
            method: 'POST',
            body: JSON.stringify(cart_data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
            }
            ).then(()=>n("/productcart"));
    }
    
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <img className={styles.img} src={data.productImage} alt={data.name}></img>
                <h2>
                    <Link to={`/productdetails/${data.id}`}>
                        {data.productName}
                    </Link>
                </h2>
                <p>{data.shortDescription}</p>
                <p>Price: {data.productPrice} Rupees Only</p>
                <label className={styles.label}>Quantity: </label>
                <input min={1} className={styles.qty} type="number" value={quantity} onChange={handleQuantity} />
                <p>
                    <button className={styles.btn} onClick={addToCart}>Add to Cart</button>
                </p>
                {/* <p className={styles.viewcart}>
                    <Link to={`/productcart/${data.id}`}>
                        <button className={styles.btn} >View Cart</button>
                    </Link>
                </p> */}
            </div>
        </div>
    );
}
export default Product;