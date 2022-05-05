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
import { deleteFavorite } from '@/store/ducks/stocks/actions'
import { Stock } from '@/store/ducks/stocks/types'

const FavoritesStructure: React.FC = () => {
    const dispatch = useDispatch()
    const favoritesStocks = useSelector(
        (store: ApplicationState) => store.stocks.favorites
    )

    const deleteFavoriteStock = (stock: Stock) => {
        dispatch(deleteFavorite(stock))
    }

    return (
        <>
            <SectionHeader
                title="Empresas favoritas"
                icon={FullStarIcon}
                style={{
                    height: '16px',
                    width: '16px',
                    verticalAlign: 'text-top',
                }}
            />
            {favoritesStocks.map((stock, index) => (
                <FavoriteStockContainer key={index}>
                    <StockCard
                        title={stock.symbol}
                        text={
                            stock.companyName !== undefined &&
                            stock.companyName.length > 16
                                ? stock.companyName.substring(0, 16) + '...'
                                : stock.companyName
                        }
                        data={stock.changePercent?.toFixed(2) + '%'}
                    />
                    <DeleteFavoritesButton
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
