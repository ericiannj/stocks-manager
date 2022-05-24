import React from 'react'
import {
    StockCardContainer,
    StockCardTextContainer,
    StockCardImage,
    StockCardSymbol,
    StockCardName,
    StockCardDataContainer,
    StockCardData,
    GraphImage,
} from './styled'
import StockIcon from '@/assets/icons/stock-icon.png'
import GraphUpIcon from '@/assets/icons/graph-up-icon.png'
import GraphDownIcon from '@/assets/icons/graph-down-icon.png'

type IStockCardProps = {
    title?: string
    text?: string
    data?: number
    onClick?: () => void
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
                    <StockCardData data={data}>{data}%</StockCardData>
                    {data! >= 0 ? (
                        <GraphImage src={GraphUpIcon} />
                    ) : (
                        <GraphImage src={GraphDownIcon} />
                    )}
                </StockCardDataContainer>
            </StockCardContainer>
        </>
    )
}

export default StockCard
