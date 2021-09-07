import { Grid } from '@material-ui/core';
import React from 'react';
import ProductItem from './product_item';

export default function ProductList(){


    return (
        <div style={{ padding: 20 }}>
            <Grid container spacing={5}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </Grid>
        </div>
    );
}