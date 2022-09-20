import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Button } from 'components/Button'
import Input from 'components/Input'
import { useGlobalStore } from 'context/GlobalContext'
import { observer } from 'mobx-react-lite'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { Meta } from 'utils/meta'

import styles from './SignUp.module.scss'

const SignUp = () => {
  const { userStore } = useGlobalStore()
  const navigate = useNavigate()

  const [loginValue, setLoginValue] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async () => {
    const data = {
      email,
      login: loginValue,
      password: password,
      confirmPassword,
    }
    await userStore.signUp(data)
    if (userStore.meta !== Meta.loading && userStore.meta !== Meta.error) {
      navigate('/')
    }
  }

  const isBtnDisabled =
    email.length === 0 ||
    loginValue.length === 0 ||
    password.length === 0 ||
    confirmPassword.length === 0

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles['wrapper-title']}>Sign Up</div>
        <div className={styles.form}>
          <div className={styles['form-row']}>
            <div className={styles['form-field']}>
              <div className={styles['form-field__label']}>Login</div>
              <Input
                className={styles['form-field__input']}
                value={loginValue}
                onChange={(value) => setLoginValue(value)}
              />
            </div>
            <div className={styles['form-field']}>
              <div className={styles['form-field__label']}>Email</div>
              <Input
                className={styles['form-field__input']}
                value={email}
                onChange={(value) => setEmail(value)}
              />
            </div>
          </div>
          <div className={styles['form-field']}>
            <div className={styles['form-field__label']}>Password</div>
            <Input
              type="password"
              className={styles['form-field__input']}
              value={password}
              onChange={(value) => setPassword(value)}
            />
          </div>
          <div className={styles['form-field']}>
            <div className={styles['form-field__label']}>
              Confirm the password
            </div>
            <Input
              type="password"
              className={styles['form-field__input']}
              value={confirmPassword}
              onChange={(value) => setConfirmPassword(value)}
            />
          </div>
          <Button
            disabled={isBtnDisabled}
            onClick={handleSubmit}
            className={styles['form-btn']}
          >
            Sign Up
          </Button>
          <div className={styles['form-extra']}>
            Already have an account?
            <span>
              <Link to="/signin">Click</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(SignUp)
