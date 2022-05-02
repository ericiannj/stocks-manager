import { call, put } from 'redux-saga/effects'
import api from '@/services/api'
import { loadSuccess, loadFailure } from './actions'
import { Stock } from './types'
const apiKey = process.env.IEX_API_TOKEN

export type ResponseGenerator = {
    data: Stock
}

export function* load(symbol: string) {
    try {
        const response: ResponseGenerator = yield call(
            api.get,
            `/stock/${symbol}/quote?token=${apiKey}`
        )

        yield put(loadSuccess(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}
