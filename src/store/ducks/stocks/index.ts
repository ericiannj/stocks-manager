import { StocksState, StocksTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: StocksState = {
    data: {},
    error: false,
    loading: false,
    recent: [],
}

const reducer: Reducer<StocksState> = (state = INITIAL_STATE, action) => {
    const recentArray = state.recent

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
            alert('Ação Inexistente.')
            return { ...state, loading: false, error: true, data: {} }
        case StocksTypes.ADD_RECENT:
            recentArray.push(action.payload.data)
            console.log(recentArray)
            return { ...state, recent: recentArray }
        case StocksTypes.DELETE_RECENT:
            console.log(recentArray)
            return { ...state, recent: [] }
        default:
            return state
    }
}

export default reducer
