import React from 'react'
import EmptyIcon from '@/assets/icons/empty-news-icon.png'
import {
    EmptyNewsContainer,
    EmptyNewsImage,
    EmptyNewsImageContainer,
    EmptyNewsTitle,
} from './styled'

const StockInfo: React.FC = () => {
    return (
        <>
            <EmptyNewsContainer>
                <EmptyNewsTitle>
                    Search for a company's News by its symbol
                </EmptyNewsTitle>
                <EmptyNewsImageContainer>
                    <EmptyNewsImage src={EmptyIcon} />
                </EmptyNewsImageContainer>
            </EmptyNewsContainer>
        </>
    )
}

export default StockInfo
