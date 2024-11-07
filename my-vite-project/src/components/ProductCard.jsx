import React from 'react'
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material'
export const ProductCard = ({name="undefine", category='undefine', price='undefine', img}) => {

  return (
    <Card>
        <CardContent>
            <CardMedia
                component="img"
                image={img}
            >

            </CardMedia>
            <Typography>Name:{name}</Typography>
            <Typography>Category:{category}</Typography>
            <Typography>Price:{price}</Typography>
            <Button>Add To Cart</Button>
        </CardContent>
    </Card>
  )
}
