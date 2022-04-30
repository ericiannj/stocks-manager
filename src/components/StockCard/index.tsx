import React from 'react'
import {
    StockCardContainer,
    StockCardTextContainer,
    StockCardImage,
    StockCardSymbol,
    StockCardName,
    StockCardDataContainer,
    StockCardData,
} from './styled'
import StockIcon from '@/assets/icons/stock-icon.png'

type IStockCardProps = {
    title: string
    text: string
    data: string
}

const StockCard: React.FC<IStockCardProps> = ({ title, text, data }) => {
    return (
        <>
            <StockCardContainer>
                <StockCardImage src={StockIcon} />
                <StockCardTextContainer>
                    <StockCardSymbol>{title}</StockCardSymbol>
                    <StockCardName>{text}</StockCardName>
                </StockCardTextContainer>
                <StockCardDataContainer>
                    <StockCardData>{data}</StockCardData>
                </StockCardDataContainer>
            </StockCardContainer>
        </>
    )
}

export default StockCard
