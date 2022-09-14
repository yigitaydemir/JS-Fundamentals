import React from 'react'
import { Link } from 'react-router-dom'

const BooksList = () => {
  return (
    <div>
        <h1>Books List:</h1>
        <Link to="/books/1">Book 1</Link>
        <Link to="/books/2">Book 2</Link>
    </div>
  )
}

export default BooksList