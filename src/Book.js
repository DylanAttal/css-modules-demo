import React from 'react'
import './Book.css'

export const Book = (props) => {
  return (
    <div className='book'>
      <img src={props.src} alt={`The cover of the book ${props.title}`} />
      <p className='title'>{props.title}</p>
      <p className='author'>{props.author}</p>
    </div>
  )
}
