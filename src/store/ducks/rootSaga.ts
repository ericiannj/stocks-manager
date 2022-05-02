import { all } from 'redux-saga/effects'

import stocks from '@/store/ducks/stocks/sagas'

export default function* rootSaga(): Generator {
    return yield all([stocks])
}
