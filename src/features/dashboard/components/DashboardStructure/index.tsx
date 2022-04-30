import React from 'react'
import { PageHeader } from '@/components'
import { InputDash, DashboardPanel } from '@/features/dashboard/components'
import DashIcon from '../../../../assets/icons/dash-icon.png'

const DashboardStructure: React.FC = () => {
    return (
        <>
            <PageHeader title="Dashboard" icon={DashIcon} />
            <InputDash />
            <DashboardPanel />
        </>
    )
}

export default DashboardStructure
