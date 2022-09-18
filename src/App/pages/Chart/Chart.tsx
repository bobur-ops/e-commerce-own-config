import React from 'react'

import { useGlobalStore } from 'context/GlobalContext'
import getStripe from 'lib/getStripe'
import { observer } from 'mobx-react-lite'
import toast from 'react-hot-toast'

import styles from './Chart.module.scss'
import { ChartList, ChartTotal } from './components'
const Chart = () => {
  const { chartStore, userStore } = useGlobalStore()

  const handleCheckout = async () => {
    if (userStore.user !== null) {
      const stripe = await getStripe()

      const response = await fetch(
        'http://localhost:5000/stripe/create-checkout-session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(chartStore.chartProducts),
        }
      )

      if (response.status === 500) return

      const data = await response.json()
      toast.loading('Redirecting...')

      stripe.redirectToCheckout({ sessionId: data.id })
    } else {
      toast.error('You are not authenticated')
    }
  }

  return (
    <div className="container">
      <div className={styles['chart-title']}>Chart</div>
      <div className={styles['chart-content']}>
        {chartStore.chartProducts.length ? (
          <>
            <ChartList
              increaseCount={chartStore.increaseItemCount}
              decreaseCount={chartStore.decreaseItemCount}
              data={chartStore.chartProducts}
              deleteItem={chartStore.changeProductChart}
            />
            <ChartTotal
              checkout={handleCheckout}
              productsLength={chartStore.chartProducts.length}
              totalPrice={chartStore.totalPrice}
            />
          </>
        ) : (
          <div>There is no item in your chart</div>
        )}
      </div>
    </div>
  )
}

export default observer(Chart)
