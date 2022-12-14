import React, { useEffect, useState } from 'react'

import { Button } from 'components/Button'
import Input from 'components/Input'
import { useGlobalStore } from 'context/GlobalContext'
import { observer } from 'mobx-react-lite'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { Meta } from 'utils/meta'

import styles from './SignIn.module.scss'

const SignIn = () => {
  const { userStore } = useGlobalStore()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const data = {
      email,
      password,
    }
    await userStore.signIn(data)
    if (userStore.meta !== Meta.loading && userStore.meta !== Meta.error) {
      navigate('/')
    }
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles['wrapper-title']}>Sign In</div>
        <div className={styles.form}>
          <div className={styles['form-field']}>
            <div className={styles['form-field__label']}>Email</div>
            <Input
              className={styles['form-field__input']}
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </div>
          <div className={styles['form-field']}>
            <div className={styles['form-field__label']}>Password</div>
            <Input
              className={styles['form-field__input']}
              value={password}
              onChange={(value) => setPassword(value)}
              type="password"
            />
          </div>
          <Button
            disabled={password.length === 0 || email.length === 0}
            onClick={handleSubmit}
            className={styles['form-btn']}
          >
            Sign In
          </Button>
          <div className={styles['form-extra']}>
            Not registered yet?
            <span>
              <Link to="/signup">Click</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(SignIn)
