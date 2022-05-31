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
    LogoImage,
    StockLogoContainer,
} from './styled'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store'
import StarIcon from '@/assets/icons/star-icon.png'
import FullStarIcon from '@/assets/icons/star-full-icon.png'
import EmptyIcon from '@/assets/icons/empty-icon.png'
import { useDispatch } from 'react-redux'
import { addFavorite } from '@/store/ducks/stocks/actions'

const StockInfo: React.FC = () => {
    const stock = useSelector(
        (store: ApplicationState) => store.stocks.stockData
    )
    const stockLogo = useSelector(
        (store: ApplicationState) => store.stocks.stockLogo
    )
    const stockFavorites = useSelector(
        (store: ApplicationState) => store.stocks.favorites
    )
    const dispatch = useDispatch()

    const addToFavoritesStocks = () => {
        if (stockFavorites.some(item => item.symbol === stock.symbol)) {
            alert('Ação já favoritada')
            return
        }
        dispatch(addFavorite())
    }

    return (
        <>
            {stock.symbol === undefined ? (
                <EmptyStockContainer>
                    <EmptyStockTitle>
                        Search for a company's stock by its symbol
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
                                <FavoriteButton
                                    aria-label="Stock already favorited"
                                    data-balloon-pos="up"
                                    className="tooltip-primary"
                                    onClick={addToFavoritesStocks}
                                >
                                    <StarImage src={FullStarIcon} />
                                </FavoriteButton>
                            )}
                        {stock.symbol !== undefined &&
                            stockFavorites.every(
                                item => item.symbol !== stock.symbol
                            ) && (
                                <FavoriteButton
                                    aria-label="Add to Favorites"
                                    data-balloon-pos="up"
                                    className="tooltip-primary"
                                    onClick={addToFavoritesStocks}
                                >
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
                        <StockLogoContainer>
                            <LogoImage src={stockLogo} />
                        </StockLogoContainer>
                        <StockDataContainer>
                            <StockData>
                                {stock.symbol !== undefined && '$'}{' '}
                                {stock.latestPrice?.toFixed(2)}
                            </StockData>
                        </StockDataContainer>
                    </StockInfoContainer>
                </>
            )}
        </>
    )
}

export default StockInfo
