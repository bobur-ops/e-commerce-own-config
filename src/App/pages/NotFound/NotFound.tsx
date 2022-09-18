import { APP_ROUTES } from 'config/routes'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.title}>
        Page not found!{' '}
        <Link to={APP_ROUTES.PRODUCTS}>Go Back to Home Page</Link>
      </div>
    </div>
  )
}

export default NotFound
