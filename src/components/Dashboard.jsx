import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <p>this dashboard</p>
      <Link to={"/products"} className="underline">
        Go to the Products
      </Link>
    </div>
  )
}

export default Dashboard
