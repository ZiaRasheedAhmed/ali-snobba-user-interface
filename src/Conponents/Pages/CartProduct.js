import styles from './CartProduct.module.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const CartProduct = ({x,deleteProduct}) => {
    const[product,setProduct] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8080/product/"+x.productID).then((response)=>response.json()).then((result)=>setProduct(result));
    },[])
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PKR'
        }).format(value);
    const deleteitem = () => {
        fetch("http://localhost:8081/cart/"+x.id, {
            method: 'DELETE'
        }).then(()=>{
            deleteProduct(x);
        });
    }
    
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <img className={styles.img} src={product.productImage}></img>
                <div className={styles.listrow}>
                    <h4>{product.productName}</h4>
                    <p>Quantity: {x.quantity}</p>
                    <p>Price: {numberFormat(product.productPrice)}/=</p>
                    <p>Total Price: {numberFormat(x.totalPrice)}</p>
                </div>
                    <i onClick={deleteitem} class="fa-solid fa-x "></i>
            </div>
        </div>
    );
}
export default CartProduct;