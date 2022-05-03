import React from 'react'
import {
    EmptyStockContainer,
    EmptyStockTitle,
    EmptyStockImageContainer,
    EmptyStockImage,
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
import EmptyIcon from '@/assets/icons/empty-icon.png'

const StockInfo: React.FC = () => {
    const stock = useSelector((store: ApplicationState) => store.stocks.data)

    return (
        <>
            {stock.symbol === undefined ? (
                <EmptyStockContainer>
                    <EmptyStockTitle>
                        Procure por ações de uma empresa por meio de sua sigla
                    </EmptyStockTitle>
                    <EmptyStockImageContainer>
                        <EmptyStockImage src={EmptyIcon} />
                    </EmptyStockImageContainer>
                </EmptyStockContainer>
            ) : (
                <>
                    {' '}
                    <StockInfoContainer>
                        {stock.symbol !== undefined && (
                            <FavoriteButton>
                                <StarImage src={StarIcon} />
                            </FavoriteButton>
                        )}
                        <StockTextContainer>
                            <StockSymbol>{stock.symbol}</StockSymbol>
                            <StockCompanyName>
                                {stock.companyName}
                            </StockCompanyName>
                        </StockTextContainer>
                        <StockDataContainer>
                            <StockData>
                                {stock.symbol !== undefined && '$'}{' '}
                                {stock.latestPrice}
                            </StockData>
                        </StockDataContainer>
                    </StockInfoContainer>
                </>
            )}
        </>
    )
}

export default StockInfo
