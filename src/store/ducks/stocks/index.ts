import { StocksState, StocksTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: StocksState = {
    stockData: {},
    stockLogo: '',
    error: false,
    loading: false,
    recent: [],
    favorites: [],
    stockHistory: [],
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
                stockData: action.payload.data,
            }
        case StocksTypes.LOAD_FAILURE:
            alert(
                'Falha ao pesquisar ação. Verifique se a sigla está correta ou se não há problemas de conexão.'
            )
            return { ...state, loading: false, error: true, data: {} }
        case StocksTypes.GET_LOGO:
            return {
                ...state,
                stockLogo: action.payload.data.url,
            }
        case StocksTypes.ADD_RECENT:
            return {
                ...state,
                recent: [
                    ...state.recent,
                    { ...state.stockData, src: state.stockLogo },
                ],
            }
        case StocksTypes.DELETE_RECENT:
            return { ...state, recent: [] }
        case StocksTypes.ADD_FAVORITE:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    { ...state.stockData, src: state.stockLogo },
                ],
            }
        case StocksTypes.DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(
                    stock => stock.symbol !== action.payload.data.symbol
                ),
            }
        case StocksTypes.GET_HISTORY:
            return {
                ...state,
                stockHistory: action.payload,
            }
        default:
            return state
    }
}

export default reducer
