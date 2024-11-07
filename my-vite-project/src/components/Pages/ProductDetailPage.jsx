import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDetail } from '../ProductDetail'
export const ProductDetailPage = () => {
    const {id}= useParams()
    const [item, setItem]=useState()
    useEffect(()=>{
        fetchData()
    },[id])
    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const jsonData = await data.json();
        console.log(jsonData)
        setItem(jsonData)
    }
  return (
    <>
        {item?<ProductDetail item={item}></ProductDetail>:'loading'}
    </>
  )
}
