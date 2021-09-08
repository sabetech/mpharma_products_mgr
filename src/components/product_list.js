import { Grid } from '@material-ui/core';
import React from 'react';
import ProductItem from './product_item';
import { useSelector } from 'react-redux';


export default function ProductList(){
    const state = useSelector((state) => state);

    console.log("current State!!!");
    console.log(state);

    return (
        <div style={{ padding: 20 }}>
            <Grid container spacing={5}>
                {
                    state.result && state.result?.map(item => 
                        <ProductItem key={item} index={item} product={state.entities.products[item]} prices={state.entities.prices} />)
                }
                
            </Grid>
        </div>
    );
}