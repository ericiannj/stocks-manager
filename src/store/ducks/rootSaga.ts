import { all } from 'redux-saga/effects'

import stocks from '@/store/ducks/stocks/sagas'
import news from '@/store/ducks/news/sagas'

export default function* rootSaga(): Generator {
    return yield all([stocks, news])
}
