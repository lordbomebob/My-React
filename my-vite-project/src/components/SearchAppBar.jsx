import { AppBar, Box, TextField, Typography, Link, Button} from '@mui/material'
import React from 'react'

export const SearchAppBar = () => {
    const linkColour= {color:'white'}
  return (
    <Box>
        <AppBar sx={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', backgroundColor:'grey'}}>
            <Link sx={linkColour} href="#">Store</Link>
            <Link sx={linkColour}>Cart</Link>
            <Link sx={linkColour}>Checkout</Link>
            <Box>
                <TextField label='Search'></TextField>
                <Button>Search</Button>
            </Box>
        </AppBar>
    </Box>
  )
}
