import React from 'react'

function Card({ image, title, description }) {
  return (
    <div className="border p-4 rounded w-72">
      <img src={image} alt={title} className="w-64 mb-3" />
      <h1 className="text-2xl bg-green-50 p-3 rounded mb-2">
        {title}
      </h1>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Card
