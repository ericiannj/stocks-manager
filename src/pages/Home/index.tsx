import React from 'react'
import { GlobalContainer, DashboardContainer, ProfileContainer } from './styled'
import { SideBar, ProfileSelector } from '@/components'
import { DashboardStructure } from '@/features/dashboard/components'
import { RecentStructure } from '@/features/recent/components'
import { FavoritesStructure } from '@/features/favorites/components'

const Home: React.FC = () => {
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
