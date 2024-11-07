import { Box, Button, Card, CardContent, CardMedia, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'

export const ProductDetail = ({item}) => {
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
                    <Input type='number'></Input>
                    <Button>Add to Cart</Button>
                </Box>
            </Box>
        </CardContent>
        
    </Card>
  )
}
