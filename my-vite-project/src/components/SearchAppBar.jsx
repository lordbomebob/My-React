import { AppBar, Box, Button, Link, TextField } from '@mui/material'
import React, { useState } from 'react'

export const SearchAppBar = () => {
    const linkColour= {color:'white'}
    const [searchTarget,setSearchTarget]= useState('')
    function handleSearch(){
      
    }
    function handleSearchChange(e){
      setSearchTarget(e.target.value)
    }
  return (
    <Box>
        <AppBar sx={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', backgroundColor:'grey'}}>
            <Link sx={linkColour}>Store</Link>
            <Link sx={linkColour}>Cart</Link>
            <Link sx={linkColour}>Checkout</Link>
            <Box>
                <TextField label='Search' value={searchTarget} onChange={()=>handleSearchChange}></TextField>
                <Button onClick={()=>handleSearch}>Search</Button>
            </Box>
        </AppBar>
    </Box>
  )
}
