import { action } from 'typesafe-actions'
import { StocksTypes, Stock } from './types'

export const loadRequest = (data: string) =>
    action(StocksTypes.LOAD_REQUEST, data)
export const loadSuccess = (data: Stock) =>
    action(StocksTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(StocksTypes.LOAD_FAILURE)
export const addRecent = (data: Stock) =>
    action(StocksTypes.ADD_RECENT, { data })
export const deleteRecent = () => action(StocksTypes.DELETE_RECENT)
