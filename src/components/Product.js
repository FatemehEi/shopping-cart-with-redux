import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//functions
// import { shorten, isInCart, quantityCount } from '../../helper/functions';

//icons
import trashIcon from "../assets/icons/trash.svg";

//styles
import styles from "./Product.module.css";

//Actions
import { addItem, removeItem, increase, decrease } from '../redux/cart/cartActions';

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => id === item.id);
    if(index === -1){
        return false;
    } else {
        return state.selectedItems[index].quantity;
    }
}

const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}

const Product = ({productData}) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="remove" ></img></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;