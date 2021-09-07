import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../components/header';
import ProductList from '../components/product_list';

export default function Products(){

    return (
        <Container maxWidth="lg">
            <Header />
            <ProductList />
        </Container>
    );
}