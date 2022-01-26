import React from 'react'
import { BookItem } from '../../components/book-item'
import './home-page.css'

const BOOKS = [
  {
    id: 1,
    title: 'Siate affamati siate folli',
    price: 12.99,
    image: './images/book-1.jpg',
    author: 'George Beahm',
  },
  {
    id: 2,
    title: "The Judge's List",
    price: 19.96,
    image: './images/book-2.jpeg',
    author: 'John Grisham',
  },
  {
    id: 3,
    title: 'Wish You Were Here',
    price: 20.29,
    image: './images/book-3.jpeg',
    author: 'Jodi Picoult',
  },
  {
    id: 4,
    title: 'The Stranger in the Lifeboat',
    price: 16.79,
    image: './images/book-4.jpeg',
    author: 'Mitch Albom',
  },
  {
    id: 5,
    title: 'The Lincoln Highway',
    price: 23.99,
    image: './images/book-5.jpeg',
    author: 'Amor Towles',
  },
  {
    id: 6,
    title: 'The Midnight Library',
    price: 19.99,
    image: './images/book-6.jpeg',
    author: 'Matt Haig',
  },
  {
    id: 7,
    title: 'Cloud Cuckoo Land',
    price: 23.99,
    image: '../images/book-7.jpeg',
    author: ' Anthony Doerr',
  },
  {
    id: 8,
    title: 'Call Us What We Carry',
    price: 21.99,
    image: '../images/book-8.jpeg',
    author: ' Amanda Gorman',
  },
  {
    id: 9,
    title: 'Will',
    price: 23.99,
    image: '../images/book-9.jpeg',
    author: 'Will Smith, Mark Manson (Editor)',
  },
  {
    id: 10,
    title: 'The Storyteller: Tales of Life and Music',
    price: 23.99,
    image: '../images/book-10.jpeg',
    author: 'Dave Grohl',
  },
]

export const HomePage = () => {
  return (
    <div className="home-page">
      { BOOKS.map((book) => 
        <BookItem book={book} key={book.id} />
      )}
    </div>
  )
}
