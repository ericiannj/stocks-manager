import { NewsState, NewsTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: NewsState = {
    newsData: [],
    newsLogo: '',
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
        case NewsTypes.GET_NEWS_LOGO:
            return {
                ...state,
                newsLogo: action.payload.data.url,
            }
        case NewsTypes.LOAD_FAILURE:
            console.log(
                'Failed to search stock. Check that the acronym is correct or that there are no connection problems.'
            )
            return {
                ...state,
                loading: false,
                error: true,
                newsLogo: '',
                newsData: [],
            }
        default:
            return state
    }
}

export default reducer
