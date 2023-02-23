import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Checkout.module.css';
const Checkout = () => {
    const n = useNavigate();
    const deleteAll=()=>{
        fetch("http://localhost:8081/cart/deleteall", {
            method: 'DELETE'
        }).then(()=>n("/"));
    }

    return(
        <>
        <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
        </div>
        <div className={styles.mainContainer}>
            <h1>ThankYou for Ordering....!</h1>
            <h2>Your Order is Placed!</h2>
            <div>
                <button className={styles.startover} onClick={deleteAll}>Start Over?
                </button>
            </div>

        </div>
        </>
    );
}
export default Checkout;