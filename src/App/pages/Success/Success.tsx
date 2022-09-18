import React, { useEffect, useState } from 'react'

import { useGlobalStore } from 'context/GlobalContext'
import { BsBagCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import runFireWorks from 'utils/canvas'

import styles from './Success.module.scss'

const Success = () => {
  const { chartStore } = useGlobalStore()

  useEffect(() => {
    chartStore.clearChart()
    runFireWorks()
  }, [])

  return (
    <div className={styles['success-wrapper']}>
      <div className={styles.success}>
        <p className={styles.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={styles['email-msg']}>
          Check your email inbox for the receipt.
        </p>
        <p className={styles['description']}>
          If you have ant questions, please email
          <a className={styles.email} href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link to="/">
          <button type="button" className={styles.btn}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
