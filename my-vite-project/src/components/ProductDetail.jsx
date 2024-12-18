import { Box, Button, Card, CardContent, CardMedia, Input, InputLabel, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import ShoppingContext from './Context/ShoppingCart'


export const ProductDetail = ({item}) => {
    const {cart, addItem}= useContext(ShoppingContext)
    const [amount, setAmount]= useState(1)
    const handleSubmit =()=>{
        addItem(item,amount)
    }
    const handleChange=(e)=>{
        setAmount(e.target.value)
    }
  return (
    <Card>

        <CardContent sx={{justifyContent:'center', display:'flex'}}>
            
            <CardMedia
                component='img'
                src={item.image}
                style={{maxWidth:'60vw', maxHeight:'60vh'}}></CardMedia>
            <Typography sx={{fontSize:60, fontWeight:'bold', flexWrap:'wrap'}}>{item.title}</Typography>
            <Box sx={{display:'flex', flexDirection:'column'}}>

                <Typography>Category: {item.catagory}</Typography>
                <Typography>Description: {item.description}</Typography>
                <Typography>Rating: {item.rating['rate']}/5</Typography>
                <Typography>Reviews: {item.rating['count'] }</Typography>
                <Box>
                    <InputLabel>Quatity</InputLabel>
                    <Input type='number' value={amount} onChange={handleChange} ></Input>
                    <Button onClick={()=>handleSubmit()}>Add to Cart</Button>
                </Box>
                <Button onClick={()=>{console.log(amount);console.log(cart)}}>amount</Button>
            </Box>
        </CardContent>
        
    </Card>
  )
}
