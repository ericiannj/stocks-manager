export enum StocksTypes {
    LOAD_REQUEST = '@stocks/LOAD_REQUEST',
    LOAD_SUCCESS = '@stocks/LOAD_SUCCESS',
    LOAD_FAILURE = '@stocks/LOAD_FAILURE',
    GET_LOGO = '@stocks/GET_LOGO',
    ADD_RECENT = '@stocks/ADD_RECENT',
    DELETE_RECENT = '@stocks/DELETE_RECENT',
    ADD_FAVORITE = '@stocks/ADD_FAVORITE',
    DELETE_FAVORITE = '@stocks/DELETE_FAVORITE',
    GET_HISTORY = '@stocks/GET_HISTORY',
}

export type Stock = {
    symbol?: string
    companyName?: string
    latestPrice?: number
    changePercent?: number
    src?: string
}

export type StockLogo = {
    url?: string
}

export type StockHistory = {
    date: string
    minute: string
    label: number
    high: number
    low: number
    open: number
    close: number
    marketAverage: number
    volume: number
    notional: number
    numberOfTrades: number
}

export type StocksState = {
    readonly data: Stock
    readonly dataLogo: string
    readonly dataHistory: StockHistory[]
    readonly loading: boolean
    readonly error: boolean
    readonly recent: Stock[]
    readonly favorites: Stock[]
}
