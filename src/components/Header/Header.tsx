import classNames from 'classnames'
import { APP_ROUTES } from 'config/routes'
import { useGlobalStore } from 'context/GlobalContext'
import { observer } from 'mobx-react-lite'
import { BsPerson } from 'react-icons/bs'
import { FiShoppingCart, FiStar } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'

import Bag from '../../assets/img/svg/headerBag.svg'
import Logo from '../../assets/img/svg/headerLogo.svg'
import User from '../../assets/img/svg/headerUser.svg'
import Star from '../../assets/img/svg/star.svg'
import styles from './Header.module.scss'

const Header = () => {
  const { chartStore } = useGlobalStore()

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
    </div>
  )
}

export default observer(Header)
