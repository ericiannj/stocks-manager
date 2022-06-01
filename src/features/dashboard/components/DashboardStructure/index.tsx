import React from 'react'
import { PageHeader } from '@/components'
import { InputDash, DashboardPanel } from '../../components'
import DashIcon from '@/assets/icons/dash-icon.png'

const DashboardStructure: React.FC = () => {
    return (
        <>
            <PageHeader title="Stock Dashboard" icon={DashIcon} />
            <InputDash />
            <DashboardPanel />
        </>
    )
}

export default DashboardStructure
