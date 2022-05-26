import React from 'react'
import { SectionHeader, StockCard } from '@/components'
import FullStarIcon from '@/assets/icons/star-full-icon.png'
import {
    FavoriteStockContainer,
    DeleteFavoritesButton,
    TrashImage,
} from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from '@/store'
import TrashIcon from '@/assets/icons/trash-icon.png'
import { deleteFavorite, loadRequest } from '@/store/ducks/stocks/actions'
import { Stock } from '@/store/ducks/stocks/types'

const FavoritesStructure: React.FC = () => {
    const dispatch = useDispatch()
    const favoritesStocks = useSelector(
        (store: ApplicationState) => store.stocks.favorites
    )

    const selectStock = (symbol: string) => {
        dispatch(loadRequest(symbol))
    }

    const deleteFavoriteStock = (stock: Stock) => {
        dispatch(deleteFavorite(stock))
    }

    return (
        <>
            <SectionHeader
                title="Favorite Companies"
                icon={FullStarIcon}
                style={{
                    height: '16px',
                    width: '16px',
                    verticalAlign: 'text-top',
                }}
            />
            {favoritesStocks !== undefined &&
                favoritesStocks.map(stock => (
                    <FavoriteStockContainer
                        key={stock.symbol}
                        onClick={() => selectStock(stock.symbol!)}
                    >
                        <StockCard
                            title={stock.symbol}
                            logo={stock.src}
                            text={
                                stock.companyName !== undefined &&
                                stock.companyName.length > 16
                                    ? stock.companyName.substring(0, 16) + '...'
                                    : stock.companyName
                            }
                            data={Math.round(stock.changePercent! * 100) / 100}
                        />
                        <DeleteFavoritesButton
                            aria-label="Remove favorite"
                            data-balloon-pos="up"
                            className="tooltip-primary"
                            onClick={() => deleteFavoriteStock(stock)}
                        >
                            <TrashImage src={TrashIcon} />
                        </DeleteFavoritesButton>
                    </FavoriteStockContainer>
                ))}
        </>
    )
}

export default FavoritesStructure
