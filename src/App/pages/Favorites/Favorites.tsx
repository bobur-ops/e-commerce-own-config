import { useGlobalStore } from 'context/GlobalContext'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { IProductModel } from 'store/models/product'
import styles from './Favorites.module.scss'

const Favorites = () => {
  const { userStore } = useGlobalStore()

  return (
    <div className="container">
      <div className={styles['favorites-title']}>Favorite Products</div>
      {userStore.user?.favProducts?.map((el: IProductModel) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  )
}

export default observer(Favorites)
