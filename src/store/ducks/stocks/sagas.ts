import { call, put, all, takeLatest, StrictEffect } from 'redux-saga/effects'
import api from '@/services/api'
import {
    loadSuccess,
    loadFailure,
    loadRequest,
    addRecent,
    getLogo,
    getStockHistory,
} from './actions'
import { Stock, StockHistory, StockLogo, StocksTypes } from './types'
import { AxiosResponse } from 'axios'
const apiKey = process.env.REACT_APP_IEX_API_TOKEN

type loadParams = ReturnType<typeof loadRequest>

export function* getStockLogo({
    payload,
}: loadParams): Generator<StrictEffect, any, AxiosResponse<StockLogo>> {
    try {
        const response = yield call(
            api.get,
            `/stock/${payload}/logo?token=${apiKey}`
        )

        yield put(getLogo(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}

export function* load({
    payload,
}: loadParams): Generator<StrictEffect, any, AxiosResponse<Stock>> {
    try {
        const response = yield call(
            api.get,
            `/stock/${payload}/quote?token=${apiKey}`
        )

        yield put(loadSuccess(response.data))
        yield put(addRecent(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}

export function* getHistory({
    payload,
}: loadParams): Generator<StrictEffect, any, AxiosResponse<StockHistory>> {
    try {
        const response = yield call(
            api.get,
            `/stock/${payload}/chart/dynamic/20220504?token=${apiKey}`
        )

        yield put(getStockHistory(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}

export default all([
    takeLatest(StocksTypes.LOAD_REQUEST, getStockLogo),
    takeLatest(StocksTypes.LOAD_REQUEST, load),
    takeLatest(StocksTypes.LOAD_REQUEST, getHistory),
])
