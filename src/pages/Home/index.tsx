import React /* , { useState }  */ from 'react'
/* import { QuotesServices, CompanyServices, HistoryServices } from '@/services' */
import { GlobalContainer, DashboardContainer, ProfileContainer } from './styled'
import { SideBar, ProfileSelector } from '@/components'
import { DashboardStructure } from '@/features/dashboard/components'
import { RecentStructure } from '@/features/recent/components'
import { FavoritesStructure } from '@/features/favorites/components'

const Home: React.FC = () => {
    /* const [useStockInfo, setStockInfo] = useState()
    const [useCompanyInfo, setCompanyInfo] = useState()
    const [useHistoryInfo, setHistoryInfo] = useState() */

    /* React.useEffect(() => {
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
    }, []) */

    return (
        <GlobalContainer>
            <SideBar />
            <DashboardContainer>
                <DashboardStructure />
                <RecentStructure />
            </DashboardContainer>
            <ProfileContainer>
                <ProfileSelector />
                <FavoritesStructure />
            </ProfileContainer>
        </GlobalContainer>
    )
}

export default Home
