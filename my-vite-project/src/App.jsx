import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import { UserCardAssignment } from './components/AssignmentParentComponents/UserCardAssignment'
import { ShoppingCart } from './components/Context/ShoppingCart'
import { HomePage } from './components/Pages/HomePage'
import { ProductDetailPage } from './components/Pages/ProductDetailPage'
import { SearchAppBar } from './components/SearchAppBar'


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
  
  
  let element= useRoutes(
    [
      {
        path:'/My-React/',
        element:<HomePage allItem={allItem}></HomePage>
      },
      {
        path:'/My-React/product-detail/:id',
        element:<ProductDetailPage></ProductDetailPage>
      },
      {
        path:'/My-React/search/:target',
        element:<HomePage allItem={allItem}></HomePage>
      }
    ]
  )

  return (
    <>
    <ShoppingCart>
    
      <SearchAppBar></SearchAppBar>
      
      {element}
    </ShoppingCart>
    <Typography variant='h1'>User Card Assignment</Typography>
    <UserCardAssignment></UserCardAssignment>
    </>
  )
}

export default App
