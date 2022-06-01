import React from 'react'
import NewsInfo from '../NewsInfo'
import { NewsPanelContainer } from './styled'

const NewsPanel: React.FC = () => {
    return (
        <>
            <NewsPanelContainer>
                <NewsInfo />
            </NewsPanelContainer>
        </>
    )
}

export default NewsPanel
