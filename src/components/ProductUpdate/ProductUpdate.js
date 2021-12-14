import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import { Button, Grid, TextField } from '@mui/material';

const ProductUpdate = () => {
    const [products, setProducts] = useState({});
    const {id} = useParams();

    useEffect(()=> {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])

    const handleOnBlur = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;
        const updateProduct = {...products};
        updateProduct[field] = value;
        setProducts(updateProduct);
        console.log(updateProduct);
    }

    const handleUpdateProduct = e => {
        e.preventDefault();

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                setProducts({});
            }
        })
    }
    return (
        <div>
            <h2>Update The Product : {products.name}</h2>
            <Grid container spacing={2} sx={{mt: 5}}>
        <Grid item xs={12} md={12} sm={12}>
          <div>
              <form onSubmit={handleUpdateProduct} style={{marginTop:'10px'}}>
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
                <Button type='submit' variant='contained'>Update Product</Button>
              </form>
          </div>
        </Grid>
      </Grid> 
        </div>
    );
};

export default ProductUpdate;