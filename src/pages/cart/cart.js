import React, { useContext } from 'react'
import ProductCart from '../../components/productCart/productCart'
import {productsData} from '../../Data/productsData'
import {CartContext} from '../../context/shopContext'


export const Cart = () => {

  return (
    <div className="cart">
      <ProductCart data = {productsData}/>
    </div>
  )
}
