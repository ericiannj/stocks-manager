import {
    legacy_createStore as createStore,
    applyMiddleware,
    Store,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './ducks/rootReducer'
import { StocksState } from './ducks/stocks/types'
import rootSaga from './ducks/rootSaga'

export type ApplicationState = {
    stock: StocksState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
