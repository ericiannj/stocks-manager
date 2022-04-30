import React from 'react'
import { SectionHeader, StockCard } from '@/components'
import StatsIcon from '@/assets/icons/stats-icon.png'

const DashboardStructure: React.FC = () => {
    return (
        <>
            <SectionHeader title="Empresas recentes" icon={StatsIcon} />
            <StockCard title="FB" text="facebook" data="3,2%" />
        </>
    )
}

export default DashboardStructure
