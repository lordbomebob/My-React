import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
export const ProductCard = ({item}) => {

  return (
    <Card>
        <CardHeader>
          
        </CardHeader>
        <CardContent sx={{flexDirection:'column'}}>
            <Box>

                <CardMedia
                component="img"
                src={item.image}
                style={{height:'200px', width:'200px'}}
                >
                </CardMedia>
            </Box>

            <Box>
              <Typography>Name:{item.title}</Typography>
              <Typography>Category:{item.category}</Typography>
              <Typography>Price:{item.price}</Typography>
              
              <Button href={`/My-React/product-detail/${item.id}`}>Product Detail</Button>
            </Box>
        </CardContent>
    </Card>
  )
}
