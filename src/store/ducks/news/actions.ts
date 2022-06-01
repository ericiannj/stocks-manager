import { action } from 'typesafe-actions'
import { NewsTypes, News } from './types'

export const loadRequest = (data: string) =>
    action(NewsTypes.LOAD_REQUEST, data)
export const loadSuccess = (data: News[]) =>
    action(NewsTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(NewsTypes.LOAD_FAILURE)
