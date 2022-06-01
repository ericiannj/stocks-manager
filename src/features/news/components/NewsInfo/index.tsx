import React from 'react'
import EmptyIcon from '@/assets/icons/empty-news-icon.png'
import {
    EmptyNewsContainer,
    EmptyNewsImage,
    EmptyNewsImageContainer,
    EmptyNewsTitle,
} from './styled'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store'

const StockInfo: React.FC = () => {
    const news = useSelector((store: ApplicationState) => store.news.newsData)

    console.log(news)

    return (
        <>
            {news.length === 0 ? (
                <EmptyNewsContainer>
                    <EmptyNewsTitle>
                        Search for a company's News by its symbol
                    </EmptyNewsTitle>
                    <EmptyNewsImageContainer>
                        <EmptyNewsImage src={EmptyIcon} />
                    </EmptyNewsImageContainer>
                </EmptyNewsContainer>
            ) : (
                <h1>Olá!</h1>
            )}
        </>
    )
}

export default StockInfo
