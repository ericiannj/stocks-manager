import { call, put, all, takeLatest, StrictEffect } from 'redux-saga/effects'
import api from '@/services/api'
import { loadSuccess, loadFailure, loadRequest, getNewsLogo } from './actions'
import { News, NewsLogo, NewsTypes } from './types'
import { AxiosResponse } from 'axios'
const apiKey = process.env.REACT_APP_IEX_API_TOKEN

type loadParams = ReturnType<typeof loadRequest>

export function* loadNews({
    payload,
}: loadParams): Generator<StrictEffect, any, AxiosResponse<News[]>> {
    try {
        const response = yield call(
            api.get,
            `/stock/${payload}/news/last/5?token=${apiKey}`
        )
        yield put(loadSuccess(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}

export function* getLogo({
    payload,
}: loadParams): Generator<StrictEffect, any, AxiosResponse<NewsLogo>> {
    try {
        const response = yield call(
            api.get,
            `/stock/${payload}/logo?token=${apiKey}`
        )

        yield put(getNewsLogo(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}

export default all([
    takeLatest(NewsTypes.LOAD_REQUEST, loadNews),
    takeLatest(NewsTypes.LOAD_REQUEST, getLogo),
])
