import React from 'react'
import './App.css'

import { Header } from './Header'
import { Book } from './Book'

function App() {
  const listOfBooks = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'JK Rowling',
      src:
        'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'JK Rowling',
      src:
        'https://www.wizardingworld.com/assets/_next/static/images/rectangle-2-312-d69c5cce3cdf1a37a03b312c38335ad1.png',
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'JK Rowling',
      src: 'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg',
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      author: 'JK Rowling',
      src:
        'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780439139595/primary/renditions/700?useMissingImage=true',
    },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'JK Rowling',
      src: 'https://images-na.ssl-images-amazon.com/images/I/91TpLHDnuFL.jpg',
    },
    {
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'JK Rowling',
      src: 'https://images-na.ssl-images-amazon.com/images/I/61sXBXmAWML.jpg',
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      author: 'JK Rowling',
      src:
        'https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL._AC_SY741_.jpg',
    },
  ]
  return (
    <div>
      <Header />
      <div className='book-container'>
        {listOfBooks.map((book) => {
          return <Book title={book.title} author={book.author} src={book.src} />
        })}
      </div>
    </div>
  )
}

export default App
