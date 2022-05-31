import React from 'react'
import { ApplicationState } from '@/store'
import { useSelector } from 'react-redux'
import { StockInfo, StockChart } from '../index'
import { DashboardPanelContainer } from './styled'

const DashboardPanel: React.FC = () => {
    const stock = useSelector(
        (store: ApplicationState) => store.stocks.stockData
    )
    return (
        <>
            <DashboardPanelContainer>
                <StockInfo />
                {stock.symbol === undefined ? <div /> : <StockChart />}
            </DashboardPanelContainer>
        </>
    )
}

export default DashboardPanel
