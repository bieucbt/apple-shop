import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/shopContext'
import './productCart.scss'

const ProductCart = (props) => {
    const {cart, addToCart, removeToCart, totalAmount, changeItemcount} = useContext(CartContext)
    const {data} = props

    
  return (
        totalAmount > 0 ? <div className="productCart">
            <h2 className="heading">your cart items</h2>
            {data.map(item => cart[item.id] > 0 && <div className="product" key={item.id}>
                <div className="img">
                    <img src={item.img} alt="" />
                </div>    
                <div className="content">
                    <div className="productName">{item.name}</div>
                    <p className="price">${item.price}</p>
                    <div>
                        <button onClick={() =>removeToCart(item.id)}>-</button>
                        <input type="text" value={cart[item.id]} onChange={(e) => changeItemcount(parseFloat(e.target.value) , item.id)} />
                        <button onClick={() => addToCart(item.id)}>+</button>
                    </div>
                </div>
            </div>)}
            <div className="total">
                <>subtotal: ${totalAmount.toFixed(2)}</>
                <div className="btn-cart">
                    <button><Link to="/apple-shop">Continue Shopping</Link> </button>
                    <button>Checkout</button>
                </div>
                </div>
        </div> : <h2 className='heading'>Your cart is Empty</h2>
    )
  }

export default ProductCart
