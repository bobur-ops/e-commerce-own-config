import ChartStore from './ChartStore'
import QueryParamsStore from './QueryParamsStore'
import UserStore from './UserStore'

export default class RootStore {
  readonly query = new QueryParamsStore()
  readonly chart = new ChartStore()
  readonly user = new UserStore()
}
