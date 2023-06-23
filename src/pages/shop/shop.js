import React from 'react'
import Product from '../../components/product/product'
import {productsData} from '../../Data/productsData'

export const Shop = () => {
  return (
    <div className="shop">
        <Product data= {productsData} />
    </div>
  )
}
