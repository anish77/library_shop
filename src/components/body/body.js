import React from 'react'
import './body.css'

export const Body = () => {

const scrollWin = () => {
  window.scrollTo(0,600)
}
  return (
    <div className="hero">
      <div className='banner'>
        <h1 className='banner-title'>book collection</h1>
        <button className='banner-btn' onClick={scrollWin}>shop now</button>
      </div>
    </div>
  )
}

