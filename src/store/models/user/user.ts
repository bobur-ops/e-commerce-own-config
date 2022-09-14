import { IProductModel } from '../product'

export interface IUserType {
  login: string
  password: string
  email: string
  favProducts: IProductModel[]
  _id: string
}
