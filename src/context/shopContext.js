import React, {createContext, useState} from 'react'
import {productsData} from '../Data/productsData'


export const CartContext = createContext(null)



let defaultCart = {}
for(let index in productsData){
    defaultCart[index] = 0
}

export const ShopContext = (props) => {
  const [cart, setCart] = useState(defaultCart)


  let totalAmount = 0;
  for(let index in productsData){
    if(cart[index] > 0){
      totalAmount+= productsData[index].price * cart[index]
    }
  }

  const changeItemcount = (newAmount, id) => {
    newAmount >= 1 ? setCart(prev => ({...prev, [id]: newAmount})) : setCart(prev => ({...prev, [id]: 1}))
    // setCart(prev => ({...prev, [id]: newAmount}))
  }

  const addToCart = (id) => {
    
     setCart(prev => ({...prev, [id]: prev[id] + 1}))
  }
  const removeToCart = (id) => {
    // cart[id] <= 1 ? setCart(prev => ({...prev, [id]: 1})) : setCart(prev => ({...prev, [id]: prev[id] - 1}))
    setCart(prev => ({...prev, [id]: prev[id] - 1}))
  }

  const value = {cart, addToCart, removeToCart, totalAmount, changeItemcount}
  return (
    <CartContext.Provider value={value} >
        {props.children}
    </CartContext.Provider>
  )
}

