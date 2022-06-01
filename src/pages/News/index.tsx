import React from 'react'
import {
    GlobalContainer,
    DashboardContainer,
    ProfileContainer,
} from '@/pages/styled'
import { SideBar, ProfileSelector } from '@/components'
import { FavoritesStructure } from '@/features/favorites/components'
import NewsStructure from '@/features/news/components/NewsStructure'

const News: React.FC = () => {
    return (
        <GlobalContainer>
            <SideBar />
            <DashboardContainer>
                <NewsStructure />
            </DashboardContainer>
            <ProfileContainer>
                <ProfileSelector />
                <FavoritesStructure />
            </ProfileContainer>
        </GlobalContainer>
    )
}

export default News
