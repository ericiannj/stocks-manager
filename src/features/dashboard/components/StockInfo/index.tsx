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
import FullStarIcon from '@/assets/icons/star-full-icon.png'
import EmptyIcon from '@/assets/icons/empty-icon.png'
import { useDispatch } from 'react-redux'
import { addFavorite } from '@/store/ducks/stocks/actions'

const StockInfo: React.FC = () => {
    const stock = useSelector((store: ApplicationState) => store.stocks.data)
    const stockFavorites = useSelector(
        (store: ApplicationState) => store.stocks.favorites
    )
    const dispatch = useDispatch()

    const addToFavoritesStocks = () => {
        dispatch(addFavorite(stock))
    }

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
                    <StockInfoContainer>
                        {stock.symbol !== undefined &&
                            stockFavorites.some(
                                item => item.symbol === stock.symbol
                            ) && (
                                <FavoriteButton onClick={addToFavoritesStocks}>
                                    <StarImage src={FullStarIcon} />
                                </FavoriteButton>
                            )}
                        {stock.symbol !== undefined &&
                            stockFavorites.every(
                                item => item.symbol !== stock.symbol
                            ) && (
                                <FavoriteButton onClick={addToFavoritesStocks}>
                                    <StarImage src={StarIcon} />
                                </FavoriteButton>
                            )}
                        <StockTextContainer>
                            <StockSymbol>{stock.symbol}</StockSymbol>
                            <StockCompanyName>
                                {stock.companyName !== undefined &&
                                stock.companyName.length > 70
                                    ? stock.companyName.substring(0, 70) + '...'
                                    : stock.companyName}
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
