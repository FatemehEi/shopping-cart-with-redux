import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productsAction';
import Product from './Product';
import styles from "./Store.module.css"

const Store = () => {
    const productsState = useSelector(state => state.productsState);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!productsState.products.length) {
            dispatch(fetchProducts());
        }
    }, [])

    return (
        <div className={styles.container}> 
            {productsState.loading ? <h1>Loading...</h1> :
            productsState.error ? <h1>Error</h1> :
            productsState.products.map(product => <Product key={product.id} productData={product} />) 
            }
        </div>
    );
};

export default Store;