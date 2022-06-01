import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './ducks/rootReducer'
import { StocksState } from './ducks/stocks/types'
import rootSaga from './ducks/rootSaga'
import { NewsState } from './ducks/news/types'

export type ApplicationState = {
    stocks: StocksState
    news: NewsState
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
