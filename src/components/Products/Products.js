import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Products = ({product,deleted}) => {
    const {name, description, img, price} = product;
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount>0){
                    alert("Deleted Successfully!");
                    deleted(id); 
                }
            })
        }
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, maxHeight:450 }}>
            <CardMedia
                component="img"
                alt="image not set yet"
                width="80"
                height="150"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                 {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ml:10}}>
                <NavLink to={`/product/update/${product._id}`} style={{textDecoration:'none', marginRight:'10px'}}><Button variant='contained' size="small">UPDATE</Button></NavLink>
                <Button sx={{backgroundColor:"red"}} onClick={()=> handleDelete(product._id)} variant='contained' size="small">DELETE</Button>
            </CardActions>
            </Card>
        </Grid>
    );
};

export default Products;