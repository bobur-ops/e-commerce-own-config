import React from 'react'

import classNames from 'classnames'
import { APP_ROUTES } from 'config/routes'
import { useGlobalStore } from 'context/GlobalContext'
import { observer } from 'mobx-react-lite'
import { BsPerson } from 'react-icons/bs'
import { FiShoppingCart, FiStar } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/img/svg/headerLogo.svg'
import styles from './Header.module.scss'

const Header = () => {
  const { chartStore } = useGlobalStore()
  const [isBurgerOpened, SetIsBurgerOpened] = React.useState(false)

  const toggleBurger = () => SetIsBurgerOpened((prev) => !prev)

  return (
    <div className={`${styles.header} container flex-between-center`}>
      <NavLink to={APP_ROUTES.PRODUCTS} className={styles.header__logo}>
        <img src={Logo} alt="logo" />
      </NavLink>
      <ul className={styles[`header-navbar`]}>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <li className={classNames(styles['header-navbar__item'])}>Product</li>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <li className={styles['header-navbar__item']}>Services</li>
        </NavLink>
        <NavLink
          to="/article"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <li className={styles['header-navbar__item']}>Article</li>
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <li className={styles['header-navbar__item']}>About us</li>
        </NavLink>
      </ul>
      <div className={styles['header-profile']}>
        <NavLink
          className={({ isActive }) => `${isActive && styles.active}`}
          to={APP_ROUTES.FAVORITES}
        >
          <FiStar />
        </NavLink>
        <NavLink
          className={({ isActive }) => `${isActive && styles.active}`}
          to={APP_ROUTES.CHART}
        >
          <div className={styles['header-cart']}>
            <FiShoppingCart />
            {chartStore.totalAmount ? (
              <div className={styles['header-cart__total']}>
                {chartStore.totalAmount}
              </div>
            ) : null}
          </div>
        </NavLink>
        <NavLink
          to={APP_ROUTES.PROFILE}
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <BsPerson />
        </NavLink>
      </div>
      <div onClick={toggleBurger} className={styles['burger-open']}>
        <GiHamburgerMenu />
      </div>
      <div
        className={classNames(
          styles['burger-menu'],
          isBurgerOpened && styles['burger-menu--active']
        )}
      >
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <div className={classNames(styles['burger-menu__item'])}>Product</div>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <div className={styles['burger-menu__item']}>Services</div>
        </NavLink>
        <NavLink
          to="/article"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <div className={styles['burger-menu__item']}>Article</div>
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => `${isActive && styles.active}`}
        >
          <div className={styles['burger-menu__item']}>About us</div>
        </NavLink>
        <div className={styles['burger-profile']}>
          <NavLink
            className={({ isActive }) => `${isActive && styles.active}`}
            to={APP_ROUTES.FAVORITES}
          >
            <FiStar />
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive && styles.active}`}
            to={APP_ROUTES.CHART}
          >
            <div className={styles['burger-cart']}>
              <FiShoppingCart />
              {chartStore.totalAmount ? (
                <div className={styles['burger-cart__total']}>
                  {chartStore.totalAmount}
                </div>
              ) : null}
            </div>
          </NavLink>
          <NavLink
            to={APP_ROUTES.PROFILE}
            className={({ isActive }) => `${isActive && styles.active}`}
          >
            <BsPerson />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default observer(Header)
