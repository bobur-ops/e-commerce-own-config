import React, { useEffect, useState } from 'react'

import { Button, ButtonColor } from 'components/Button'
import Card from 'components/Card'
import { useGlobalStore } from 'context/GlobalContext'
import { observer } from 'mobx-react-lite'
import { IProductModel } from 'store/models/product'

import styles from './Favorites.module.scss'

const Favorites = () => {
  const { userStore } = useGlobalStore()
  const [favProducts, setFavProducts] = useState<IProductModel[] | undefined>(
    userStore.user?.favProducts
  )

  const handleDeleteFavProduct = (product: IProductModel) => {
    setFavProducts((prev) =>
      prev?.filter((el: IProductModel) => el.id !== product.id)
    )
    userStore.addToFavs(product)
  }

  return (
    <div className="container">
      <div className={styles.favorites}>
        <div className={styles['favorites-title']}>Favorite Products</div>
        {userStore.user !== null ? (
          <div className={styles['favorites-cards']}>
            {favProducts?.length ? (
              favProducts?.map((el: IProductModel) => (
                <div key={el.id}>
                  <Card
                    id={el.id}
                    image={el.image}
                    subtitle={el.description}
                    title={el.title}
                    category={el.category}
                    content={el.price}
                  />
                  <Button
                    onClick={() => handleDeleteFavProduct(el)}
                    className={styles.card__button}
                    color={ButtonColor.secondary}
                  >
                    Remove
                  </Button>
                </div>
              ))
            ) : (
              <div>There is no favorite products</div>
            )}
          </div>
        ) : (
          <div>Sign In to see your favorite products</div>
        )}
      </div>
    </div>
  )
}

export default observer(Favorites)
