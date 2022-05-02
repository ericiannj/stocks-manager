import { call, put, all, takeLatest, StrictEffect } from 'redux-saga/effects'
import api from '@/services/api'
import { loadSuccess, loadFailure, loadRequest } from './actions'
import { Stock, StocksTypes } from './types'
import { AxiosResponse } from 'axios'
const apiKey = process.env.REACT_APP_IEX_API_TOKEN

type loadParams = ReturnType<typeof loadRequest>
export function* load({
    payload,
}: loadParams): Generator<StrictEffect, any, AxiosResponse<Stock>> {
    try {
        const response = yield call(
            api.get,
            `/stock/${payload.data.symbol}/quote?token=${apiKey}`
        )

        yield put(loadSuccess(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}

export default all([takeLatest(StocksTypes.LOAD_REQUEST, load)])
