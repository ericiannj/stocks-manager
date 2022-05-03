//Action types
export enum StocksTypes {
    LOAD_REQUEST = '@stocks/LOAD_REQUEST',
    LOAD_SUCCESS = '@stocks/LOAD_SUCCESS',
    LOAD_FAILURE = '@stocks/LOAD_FAILURE',
    ADD_RECENT = '@stocks/ADD_RECENT',
    DELETE_RECENT = '@stocks/DELETE_RECENT',
}
//Data types
export type Stock = {
    symbol?: string
    companyName?: string
    latestPrice?: number
}
//State type
export type StocksState = {
    readonly data: Stock
    readonly loading: boolean
    readonly error: boolean
    readonly recent: Stock[]
}
