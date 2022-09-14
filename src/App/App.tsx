import * as React from 'react'

import Footer from 'components/Footer/Footer'
import Header from 'components/Header'
import { APP_ROUTES } from 'config/routes'
import { GlobalContextProvider } from 'context/GlobalContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Chart from './pages/Chart/Chart'
import Empty from './pages/Empty/Empty'
import Favorites from './pages/Favorites/Favorites'
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={APP_ROUTES.PRODUCTS} element={<Products />} />
          <Route path={APP_ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={APP_ROUTES.CHART} element={<Chart />} />
          <Route path={APP_ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={APP_ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={APP_ROUTES.PROFILE} element={<Profile />} />
          <Route path={APP_ROUTES.FAVORITES} element={<Favorites />} />
          <Route path={APP_ROUTES.SERVICES} element={<Empty />} />
          <Route path={APP_ROUTES.ARTICLE} element={<Empty />} />
          <Route path={APP_ROUTES.ABOUT_US} element={<Empty />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
