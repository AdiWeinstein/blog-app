import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div>
            <h2>Sorry</h2>
            <p>Page Not Found</p>
            <Link to='/' >Back To Home Page</Link>
        </div>
    )
}

export default NotFoundPage
