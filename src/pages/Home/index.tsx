import React, { useState } from 'react'
import {
    QuotesServices,
    CompanyServices,
    HistoryServices,
} from '../../services'
import SideBar from '../../components/SideBar'
import ProfileSelector from '../../components/ProfileSelector'

import { GlobalContainer, DashboardContainer, ProfileContainer } from './styled'
import PageHeader from '../../components/PageHeader'
import DashboardPanel from '../../features/dashboard/components/DashboardPanel'
import InputDash from '../../features/dashboard/components/inputDash'
import SectionHeader from '../../components/SectionHeader'
import StockCard from '../../components/StockCard'

import DashIcon from '../../assets/icons/dash-icon.png'
import StatsIcon from '../../assets/icons/stats-icon.png'
import FullStarIcon from '../../assets/icons/star-full-icon.png'

const Home: React.FC = () => {
    const [useStockInfo, setStockInfo] = useState()
    const [useCompanyInfo, setCompanyInfo] = useState()
    const [useHistoryInfo, setHistoryInfo] = useState()

    React.useEffect(() => {
        QuotesServices.getQuotes('BAC')
            .then(data => setStockInfo(data))
            .catch(e => console.log(e))
        CompanyServices.getCompany('BAC')
            .then(data => setCompanyInfo(data))
            .catch(e => console.log(e))
        HistoryServices.getHistory('APPL', '1y', '20201012')
            .then(data => setHistoryInfo(data))
            .catch(e => console.log(e))

        console.log(useStockInfo)
        console.log(useCompanyInfo)
        console.log(useHistoryInfo)
    }, [])

    return (
        <GlobalContainer>
            <SideBar />
            <DashboardContainer>
                <PageHeader title="Dashboard" icon={DashIcon} />
                <InputDash />
                <DashboardPanel />
                <SectionHeader title="Empresas recentes" icon={StatsIcon} />
                <StockCard title="FB" text="facebook" data="3,2%" />
            </DashboardContainer>
            <ProfileContainer>
                <ProfileSelector />
                <SectionHeader title="Empresas favoritas" icon={FullStarIcon} />
            </ProfileContainer>
        </GlobalContainer>
    )
}

export default Home
