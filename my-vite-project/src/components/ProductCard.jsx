import React from 'react'
import {Box, Button, Card, CardContent, CardMedia, Typography} from '@mui/material'
export const ProductCard = ({name="undefine", category='undefine', price='undefine', img}) => {

  return (
    <Card>
        <CardContent>
            <Box>

                <CardMedia
                component="img"
                src={img}
                style={{height:'200px', width:'200px'}}
                >
                </CardMedia>
            </Box>

            
            <Typography>Name:{name}</Typography>
            <Typography>Category:{category}</Typography>
            <Typography>Price:{price}</Typography>
            <Button>Add To Cart</Button>
        </CardContent>
    </Card>
  )
}
