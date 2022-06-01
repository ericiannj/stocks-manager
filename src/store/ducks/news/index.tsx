import { NewsState, NewsTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: NewsState = {
    newsData: [],
    error: false,
    loading: false,
}

const reducer: Reducer<NewsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NewsTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case NewsTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                newsData: action.payload.data,
            }
        case NewsTypes.LOAD_FAILURE:
            alert(
                'Failed to search stock. Check that the acronym is correct or that there are no connection problems.'
            )
            return { ...state, loading: false, error: true, newsData: [] }
        default:
            return state
    }
}

export default reducer
