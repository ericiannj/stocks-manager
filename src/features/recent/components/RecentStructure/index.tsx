import React from 'react'
import { SectionHeader, StockCard } from '@/components'
import StatsIcon from '@/assets/icons/stats-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '@/store'
import {
    DeleteRecentButton,
    RecentHeaderContainer,
    TrashImage,
    RecentStocksContainer,
} from './styled'
import TrashIcon from '@/assets/icons/trash-icon.png'
import { deleteRecent } from '@/store/ducks/stocks/actions'

const DashboardStructure: React.FC = () => {
    const dispatch = useDispatch()
    const recentStock = useSelector(
        (store: ApplicationState) => store.stocks.recent
    )

    const deleteRecentStocks = () => {
        dispatch(deleteRecent())
    }

    return (
        <>
            <RecentHeaderContainer>
                <SectionHeader title="Empresas recentes" icon={StatsIcon} />
                {recentStock.length > 0 && (
                    <DeleteRecentButton onClick={deleteRecentStocks}>
                        <TrashImage src={TrashIcon} />
                    </DeleteRecentButton>
                )}
            </RecentHeaderContainer>

            <RecentStocksContainer>
                {recentStock.map((stock, index) => (
                    <StockCard
                        key={index}
                        title={stock.symbol}
                        text={
                            stock.companyName !== undefined &&
                            stock.companyName.length > 20
                                ? stock.companyName.substring(0, 20) + '...'
                                : stock.companyName
                        }
                        data="3,2%"
                    />
                ))}
            </RecentStocksContainer>
        </>
    )
}

export default DashboardStructure
