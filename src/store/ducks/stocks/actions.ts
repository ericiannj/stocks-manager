import { action } from 'typesafe-actions'
import { StocksTypes, Stock, StockHistory, StockLogo } from './types'

export const loadRequest = (data: string) =>
    action(StocksTypes.LOAD_REQUEST, data)
export const loadSuccess = (data: Stock) =>
    action(StocksTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(StocksTypes.LOAD_FAILURE)
export const getLogo = (data: StockLogo) =>
    action(StocksTypes.GET_LOGO, { data })
export const addRecent = (data: Stock) =>
    action(StocksTypes.ADD_RECENT, { data })
export const deleteRecent = () => action(StocksTypes.DELETE_RECENT)
export const addFavorite = () => action(StocksTypes.ADD_FAVORITE)
export const deleteFavorite = (data: Stock) =>
    action(StocksTypes.DELETE_FAVORITE, { data })
export const getStockHistory = (data: StockHistory) =>
    action(StocksTypes.GET_HISTORY, data)
