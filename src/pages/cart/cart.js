import React from 'react'
import ProductCart from '../../components/productCart/productCart'
import {productsData} from '../../Data/productsData'


export const Cart = () => {

  return (
    <div className="cart">
      <ProductCart data = {productsData}/>
    </div>
  )
}
