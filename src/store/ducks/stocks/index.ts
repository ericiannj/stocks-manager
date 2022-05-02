import { StocksState, StocksTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: StocksState = {
    data: {},
    error: false,
    loading: false,
}

const reducer: Reducer<StocksState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StocksTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case StocksTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            }
        case StocksTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: {} }
        default:
            return state
    }
}

export default reducer
