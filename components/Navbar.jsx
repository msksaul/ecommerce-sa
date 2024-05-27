/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'

import { useStateContext } from '../context/StateContext'

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities, setCartItems, setTotalPrice, setTotalQuantities, setQty } = useStateContext()
  
  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket'))
    if(basket != null) {
      setCartItems(basket.items)
      setTotalPrice(basket.price)
      setTotalQuantities(basket.quantities)
    }
  }, [])

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/' onClick={() => setQty(1)}>
          JS Store
        </Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar