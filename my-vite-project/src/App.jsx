import { useEffect, useState } from 'react'
import './App.css'

import { SearchAppBar } from './components/SearchAppBar'
import { Button, Box } from '@mui/material'
import { ProductList } from './components/ProductList'

function App() {
  const [allItem, setAllItem]=useState({})
  useEffect(()=>{
    fetchData()
    
  },[])
  
  const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products')
      const jsonData = await data.json();
      console.log(jsonData)
      setAllItem(jsonData)
      
  }

  const [cart, setCart] = useState([])
  function addCart(){
    cart.push(1)
    console.log(cart)
  }
  

  return (
    <>
      <SearchAppBar></SearchAppBar>
      <Box sx={{flexDirection:'row'}}>
      <ProductList items={allItem}></ProductList>
      </Box>
      
    </>
  )
}

export default App
