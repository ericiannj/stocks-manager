import { combineReducers } from 'redux'

import stocks from './stocks'
import news from './news'

export default combineReducers({
    stocks,
    news,
})
