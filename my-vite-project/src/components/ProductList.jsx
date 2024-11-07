import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';
import { Box } from '@mui/material';

export const ProductList = ({items,addCart}) => {
  return (
        <>
        {
          items.length > 0 && items.map(item => {
              return (<ProductCard name={item.title} category={item.category} price={item.price} img={item.image}  id={item.id}></ProductCard>)
            })
        }
        </>
        

  )
}
