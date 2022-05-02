import { action } from 'typesafe-actions'
import { StocksTypes, Stock } from './types'

export const loadRequest = () => action(StocksTypes.LOAD_REQUEST)
export const loadSuccess = (data: Stock) =>
    action(StocksTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(StocksTypes.LOAD_FAILURE)
