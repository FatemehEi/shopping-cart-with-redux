import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//component
import Cart from './Cart';

//styles
import styles from "./ShopCart.module.css";


//Actions
import { checkout, clear } from '../redux/cart/cartActions';

const ShopCart = () => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch(checkout())}>Check Out</button>
                        <button className={styles.checkout} onClick={() => dispatch(clear())}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check out successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;