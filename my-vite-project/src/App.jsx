import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
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

  const [cart, setCart] = useState({})
  function addCart(item,amount ){

    console.log(cart)
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
      }
    ]
  )

  return (
    <>
    <SearchAppBar></SearchAppBar>
    {element}
    </>
  )
}

export default App
