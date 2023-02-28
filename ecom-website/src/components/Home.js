import React from 'react'
import Products from './Products'
import Navber from './Navber'
import '../css/Home.css'
export default function Home() {
  return (
    <div className='wrapper'>
        <Navber/>
      <Products/>
    </div>
  )
}
