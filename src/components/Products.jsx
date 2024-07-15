import React from 'react';
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
     <p>
     This the product page
     </p>
      <Link to={"/"} className='underline'>
        Go to the Dashboard
      </Link>
    </div>
  )
}
