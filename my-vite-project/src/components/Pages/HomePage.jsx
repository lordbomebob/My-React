import { Box } from '@mui/material'
import React from 'react'
import { ProductList } from '../ProductList'
import { SearchAppBar } from '../SearchAppBar'
export const HomePage = ({allItem}) => {
  return (
    <>
        <SearchAppBar></SearchAppBar>
        <Box sx={{ flexDirection: 'row' }}>
            <ProductList items={allItem}></ProductList>
        </Box>
    </>
  )
}
