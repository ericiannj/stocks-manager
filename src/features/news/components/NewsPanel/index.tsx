import React from 'react'
import { useSelector } from 'react-redux'
import NewsInfo from '../NewsInfo'
import { NewsImage, NewsImageContainer, NewsPanelContainer } from './styled'
import { ApplicationState } from '@/store'

const NewsPanel: React.FC = () => {
    const newsLogo = useSelector(
        (store: ApplicationState) => store.news.newsLogo
    )

    return (
        <>
            <NewsPanelContainer>
                {newsLogo.length !== 0 && (
                    <NewsImageContainer>
                        <NewsImage src={newsLogo} />
                    </NewsImageContainer>
                )}
                <NewsInfo />
            </NewsPanelContainer>
        </>
    )
}

export default NewsPanel
