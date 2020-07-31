import React from 'react'
import './App.css'

import { Header } from './Header'
import { Book } from './Book'

function App() {
  return (
    <div>
      <Header />
      <div className='book-container'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  )
}

export default App
