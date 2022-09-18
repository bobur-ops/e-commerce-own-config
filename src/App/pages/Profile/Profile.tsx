import React from 'react'

import profileLogo from 'assets/img/svg/profile.svg'
import { Button, ButtonColor } from 'components/Button'
import { useGlobalStore } from 'context/GlobalContext'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

import styles from './Profile.module.scss'

const Profile = () => {
  const { userStore } = useGlobalStore()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!userStore.user) {
      navigate('/signup')
    }
  }, [])

  const logout = () => {
    userStore.logOut()
    navigate('/')
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <img src={profileLogo} alt="avatar" />
        <div className={styles['profile-content']}>
          <div className={styles['profile-side']}>
            <div className={styles['profile-side__field']}>Login</div>
            <div className={styles['profile-side__field']}>Email</div>
          </div>
          <div className={styles['profile-side']}>
            <div className={styles['profile-side__value']}>
              {userStore.user?.login}
            </div>
            <div className={styles['profile-side__value']}>
              {userStore.user?.email}
            </div>
          </div>
        </div>
        <Button
          onClick={logout}
          color={ButtonColor.secondary}
          className={styles['profile-logout']}
        >
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default observer(Profile)
