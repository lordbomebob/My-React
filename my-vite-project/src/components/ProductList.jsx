import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductList = ({items,addCart}) => {
  
    

  
  return (
        <>
        {
          items.length > 0 && items.map(item => {
              return (<ProductCard item={item} ></ProductCard>)
            })
        }
        </>
    )
}

