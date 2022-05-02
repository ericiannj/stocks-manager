import React from 'react'
import { StockInfo } from '../index'
import { DashboardPanelContainer } from './styled'

const DashboardPanel: React.FC = () => {
    return (
        <>
            <DashboardPanelContainer>
                <StockInfo />
            </DashboardPanelContainer>
        </>
    )
}

export default DashboardPanel
