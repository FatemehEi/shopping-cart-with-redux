import React from 'react';
import { useDispatch } from 'react-redux';

//icon
import trashIcon from "../assets/icons/trash.svg";

//styles
import styles from "./Cart.module.css";

//Actions
import { increase, decrease, removeItem } from '../redux/cart/cartActions';


const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}

const Cart = (props) => {

    const dispatch = useDispatch();
    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <h3>{price} $</h3>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch(decrease(props.data))}>-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))}><img src={trashIcon} alt="trashIcon" style={{width:"20px"}}></img></button>
                }
                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
        </div>

    );
};

export default Cart;