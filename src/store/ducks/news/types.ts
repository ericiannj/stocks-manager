export enum NewsTypes {
    LOAD_REQUEST = '@news/LOAD_REQUEST',
    LOAD_SUCCESS = '@news/LOAD_SUCCESS',
    LOAD_FAILURE = '@news/LOAD_FAILURE',
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

export type NewsState = {
    readonly newsData: News[]
    readonly loading: boolean
    readonly error: boolean
}
