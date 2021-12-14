import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';

const AddProducts = () => {
    const [products, setProducts] = useState({});

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...products};//ES6 spread operator
        newProduct[field] = value;
        setProducts(newProduct);
        console.log(newProduct);

        e.preventDefault();
    }

    const handleAddProduct = e => {
        e.preventDefault();

        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Product is added successfully!');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <>
        <Navigation></Navigation>
        <Grid container spacing={2} sx={{mt: 5}}>
        <Grid item xs={12} md={12} sm={12}>
          <div>
              <Typography variant="h4" sx={{fontWeight:500, color:'#002984'}}>Please add a product</Typography>
              <form onSubmit={handleAddProduct} style={{marginTop:'10px'}}>
                <TextField
                    label="Name"
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    sx={{width: '50%'}}
                    variant="standard"
                /> <br />
                <TextField
                    label="Description"
                    type="text"
                    name="description"
                    onBlur={handleOnBlur}
                    sx={{width: '50%', mt:2}}
                    maxRows={4}
                    multiline
                    variant="standard"
                /> <br />
                <TextField
                    label="Price"
                    type="number"
                    name="price"
                    onBlur={handleOnBlur}
                    sx={{width: '50%', mt:2}}
                    variant="standard"
                /> <br />
                <TextField
                    label="Img-url"
                    type="text"
                    name="img"
                    onBlur={handleOnBlur}
                    sx={{width: '50%', mt:2}}
                    variant="standard"
                />
                <br /> <br />
                <Button type='submit' variant='contained'>ADD Product</Button>
              </form>
          </div>
        </Grid>
      </Grid>
        </>
    );
};

export default AddProducts;