import { all, takeLatest } from 'redux-saga/effects'

import { StocksTypes } from '@/store/ducks/stocks/types'
import { load } from '@/store/ducks/stocks/sagas'

export default function* rootSaga() {
    return yield all([takeLatest(StocksTypes.LOAD_REQUEST, load)])
}
