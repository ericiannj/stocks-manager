import React from 'react'
import {
    StockInfoContainer,
    StockTextContainer,
    StockSymbol,
    StockCompanyName,
    StockData,
    StockDataContainer,
    FavoriteButton,
    StarImage,
} from './styled'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store'
import StarIcon from '@/assets/icons/star-icon.png'

const StockInfo: React.FC = () => {
    const stock = useSelector((store: ApplicationState) => store.stocks.data)

    return (
        <>
            <StockInfoContainer>
                {stock.symbol !== undefined && (
                    <FavoriteButton>
                        <StarImage src={StarIcon} />
                    </FavoriteButton>
                )}
                <StockTextContainer>
                    <StockSymbol>{stock.symbol}</StockSymbol>
                    <StockCompanyName>{stock.companyName}</StockCompanyName>
                </StockTextContainer>
                <StockDataContainer>
                    <StockData>
                        {stock.symbol !== undefined && '$'} {stock.latestPrice}
                    </StockData>
                </StockDataContainer>
            </StockInfoContainer>
        </>
    )
}

export default StockInfo
