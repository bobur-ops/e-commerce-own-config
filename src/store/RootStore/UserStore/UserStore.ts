import { addToFavs, signIn, signUp } from 'api/fetchApi'
import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import { IProductModel } from 'store/models/product'
import { IUserType } from 'store/models/user'
import { Meta } from 'utils/meta'

type PrivateFields = '_user' | '_meta'

export default class UserStore {
  private _user: IUserType | null = JSON.parse(
    localStorage.getItem('user') || 'null'
  )
  private _meta: Meta = Meta.initial

  constructor() {
    makeObservable<UserStore, PrivateFields>(this, {
      _user: observable,
      _meta: observable,
      //computed
      user: computed,
      meta: computed,
      // actions
      signUp: action.bound,
      signIn: action.bound,
      logOut: action.bound,
      addToFavs: action.bound,
      isProductInFavs: action.bound,
    })
  }

  get user(): IUserType | null {
    return this._user
  }
  get meta(): Meta {
    return this._meta
  }

  signUp = async (data: {
    email: string
    login: string
    password: string
    confirmPassword: string
  }): Promise<void> => {
    try {
      this._meta = Meta.loading
      const response = await signUp(data)
      console.log(response)

      this._meta = Meta.success
      this._user = response.data.result
      localStorage.setItem('user', JSON.stringify(response.data.result))
    } catch (error) {
      this._meta = Meta.error
    }
  }
  signIn = async (data: { email: string; password: string }): Promise<void> => {
    try {
      this._meta = Meta.loading
      const response = await signIn(data)

      runInAction(() => {
        this._meta = Meta.success
        this._user = response.data.result
        localStorage.setItem('user', JSON.stringify(response.data.result))
      })
    } catch (error) {
      this._meta = Meta.error
    }
  }

  addToFavs = async (product: IProductModel) => {
    try {
      if (this._user) {
        const response = await addToFavs(this._user._id, product)
        localStorage.setItem('user', JSON.stringify('user', response.data))
        this._user = response.data
      }
    } catch (error) {}
  }

  isProductInFavs = (product: IProductModel): boolean | undefined => {
    return this._user?.favProducts.some(
      (el: IProductModel) => el.id === product.id
    )
  }

  logOut = () => {
    this._user = null
    localStorage.removeItem('user')
  }
}
