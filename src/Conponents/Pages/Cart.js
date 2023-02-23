import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


import styles from './Cart.module.css';
import CartProduct from "./CartProduct";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [total,setTotal] = useState(0);
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PKR'
        }).format(value);

    useEffect(() => {
        let t=0;
        fetch("http://localhost:8081/cart/allcart").then((response) => response.json()).then((result) => {
            setItems(result);
            result.forEach(element => {
                t+= element.totalPrice;
                setTotal(t);
            });
        });
    }, []);

    const deleteProduct=(item)=>{
        setItems(prev=> prev.filter(prevItem=> prevItem.id !== item.id));
        setTotal(prev=> prev-=item.totalPrice);
    }
    return (
        <>
            <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
            </div>
            <div className={styles.cart}>
                <h1>Selected Items!</h1>
                {
                    items.length !== 0 ? items.map((x) => {
                        return (
                            <CartProduct x={x} deleteProduct={deleteProduct}/>
                        );
                    }) : null
                }
                <div className={styles.pricerow}>
                    <div className={styles.pricecolumn}>
                        <label><h4>Your Total Bill: </h4></label>
                        <input readOnly className={styles.totalPrice} type="text" value={numberFormat(total)} placeholder="Order Total"></input>
                    </div>
                </div>

                <div className={styles.btnrow}>
                    <div className={styles.btncolumn}>
                        <Link to='/checkout'>
                            <button className={styles.button} type="submit">
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={styles.btnrow}>
                    <div className={styles.btncolumn}>
                        <Link to='/'>
                            <button className={styles.button} type="submit">
                                Return to Shopping
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Cart;