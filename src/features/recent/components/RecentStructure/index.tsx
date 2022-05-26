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
    RecentStockContainer,
} from './styled'
import TrashIcon from '@/assets/icons/trash-icon.png'
import { loadRequest, deleteRecent } from '@/store/ducks/stocks/actions'

const DashboardStructure: React.FC = () => {
    const dispatch = useDispatch()
    const recentStock = useSelector(
        (store: ApplicationState) => store.stocks.recent
    )

    const selectStock = (symbol: string) => {
        dispatch(loadRequest(symbol))
    }

    const deleteRecentStocks = () => {
        dispatch(deleteRecent())
    }

    return (
        <>
            <RecentHeaderContainer>
                <SectionHeader title="Recent Companies" icon={StatsIcon} />
                {recentStock.length > 0 && (
                    <DeleteRecentButton
                        aria-label="Clear search history"
                        data-balloon-pos="up"
                        className="tooltip-primary"
                        onClick={deleteRecentStocks}
                    >
                        <TrashImage src={TrashIcon} />
                    </DeleteRecentButton>
                )}
            </RecentHeaderContainer>

            <RecentStocksContainer>
                {recentStock.reverse().map((stock, index) => (
                    <RecentStockContainer
                        key={index}
                        onClick={() => selectStock(stock.symbol!)}
                    >
                        <StockCard
                            title={stock.symbol}
                            logo={stock.src}
                            text={
                                stock.companyName !== undefined &&
                                stock.companyName.length > 12
                                    ? stock.companyName.substring(0, 12) + '...'
                                    : stock.companyName
                            }
                            data={Math.round(stock.changePercent! * 100) / 100}
                        />
                    </RecentStockContainer>
                ))}
            </RecentStocksContainer>
        </>
    )
}

export default DashboardStructure
