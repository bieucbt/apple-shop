import React, { useContext } from 'react'
import './product.scss'
import {CartContext} from '../../context/shopContext'




const Product = (props) => {

    const shopContext = useContext(CartContext)
    const {cart, addToCart} = shopContext

  return (
    <div className="products">
        <div className="heading">Apple shop</div>

        <div className="productsData">
            {
                props.data.map(item => (
                    <div className="item" key={item.id}>
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="content">
                            <div className="name">{item.name}</div>
                            <div className="price">${item.price}</div>
                            <button onClick={() => addToCart(item.id)}>Add to cart {cart[item.id] > 0 && <>({cart[item.id]})</>} </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Product