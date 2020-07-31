import React from 'react'
import './Book.css'

export const Book = () => {
  return (
    <div className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'
        alt="The cover of the book Harry Potter and the Sorcerer's Stone."
      />
      <p className='title'>Harry Potter and the Sorcerer's Stone</p>
      <p className='author'>JK Rowling</p>
    </div>
  )
}
