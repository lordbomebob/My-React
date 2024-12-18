import React, { createContext, useState } from 'react'
const ShoppingContext=createContext()
export const ShoppingCart = ({children}) => {
    const [cart, setCart] = useState({})
    function addItem(item,amount){
        setCart((prevCart)=>{
            const itemExists = prevCart[item.id]
            if(itemExists && itemExists.amount-amount< 1){
                return removeItem(item)
            }

            return {
                ...prevCart,
                [item.id]: {
                    item,
                    amount: itemExists ? itemExists.amount + amount : amount
                }
            }
        })
    }

    function removeItem(item){
        setCart((prevCart)=>{
            const itemExists = prevCart[item.id]
            if(!itemExists){
                return prevCart
            }
            return delete prevCart[item.id]
        })
    }
    function clearCart(){
        setCart({})
    }
  return (
    <ShoppingContext.Provider value={{cart, addItem, removeItem, clearCart}}>
        {children}
    </ShoppingContext.Provider>
  )
}
export default ShoppingContext