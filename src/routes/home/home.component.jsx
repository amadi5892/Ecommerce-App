import React from 'react'
import Directory from '../../components/directory/directory.component'

const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "Men's",
            "imageUrl": "mens"
        },
        {
            "id": 2,
            "title": "Women's",
            "imageUrl": "womens"
        },
        {
            "id": 3,
            "title": "Unisex",
            "imageUrl": "unisex"
        }
    ]

  return (
    <Directory categories={categories} />
  )
}

export default Home
