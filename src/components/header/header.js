import React from 'react'
import './header.css'
import { ReactComponent as Logo } from './logo.svg'
import { CartBlock } from '../cart-block'

export const Header = () => {
  return (
<nav className='navbar'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='navbar-center'>
        <div className="logoImg">
          <Logo />
        </div>
        <div className='cart-btn'>
          <div className="wrapper header_cart-btn-wrapper">
            <CartBlock />
          </div>
        </div>
      </div>
    </nav>
  )
}
