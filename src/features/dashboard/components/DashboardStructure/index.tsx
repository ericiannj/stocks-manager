import React from 'react'
import { PageHeader } from '@/components'
import InputDash from '../inputDash'
import DashboardPanel from '../DashboardPanel'
import DashIcon from '@/assets/icons/dash-icon.png'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DashboardStructure: React.FC = () => {
    const newsError = useSelector(
        (store: ApplicationState) => store.stocks.error
    )
    return (
        <>
            {newsError === true &&
                toast.error(
                    'Search failure! Check your connection and the stock symbol.',
                    {
                        position: toast.POSITION.TOP_CENTER,
                    }
                ) && <ToastContainer />}
            <PageHeader title="Stock Dashboard" icon={DashIcon} />
            <InputDash />
            <DashboardPanel />
        </>
    )
}

export default DashboardStructure
