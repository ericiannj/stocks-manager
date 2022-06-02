export enum NewsTypes {
    LOAD_REQUEST = '@news/LOAD_REQUEST',
    LOAD_SUCCESS = '@news/LOAD_SUCCESS',
    LOAD_FAILURE = '@news/LOAD_FAILURE',
    GET_NEWS_LOGO = '@news/GET_NEWS_LOGO',
}

export type News = {
    datetime: number
    headline: string
    source: string
    url: string
    summary: string
    related: string
    image: string
}

export type NewsLogo = {
    url: string
}

export type NewsState = {
    readonly newsData: News[]
    readonly newsLogo: string
    readonly loading: boolean
    readonly error: boolean
}
