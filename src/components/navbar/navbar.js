import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart as Cart} from 'phosphor-react'
import './navbar.scss'
import {CartContext} from '../../context/shopContext'

const Navbar = () => {
  const {cart} = useContext(CartContext)
  let amount = 0
  for(let i in cart){
    if(cart[i] > 0)
    amount += 1
  }
  return (
    <div className="navbar">
        <Link to="/apple-shop">Home</Link>
        <Link to="/cart">
            <Cart size={32} />
            {
              amount > 0 && <div className='amount'>{amount}</div>
            }
        </Link>
    </div>
  )
}

export default Navbar
