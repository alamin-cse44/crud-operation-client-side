import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);

    const deleted = (id) => {
        const remainingProduct = products.filter(product => product._id !== id)
        setProducts(remainingProduct);
    }
    
    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    return (
        <>
        <Navigation></Navigation>
        <Container>
        <Grid container spacing={2} sx={{mt:8}}>
        {
            products.map(product => <Products
            key={product.name}
            deleted={deleted}
            product={product}
            ></Products>)
        }
        </Grid>
        </Container>
        </>
    );
};

export default ShowProducts;