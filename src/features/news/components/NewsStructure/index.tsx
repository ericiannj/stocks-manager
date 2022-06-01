import React from 'react'
import { PageHeader } from '@/components'
import NewspaperIcon from '@/assets/icons/newspaper-icon.png'
import InputNews from '../InputNews'
import NewsPanel from '../NewsPanel'

const NewsStructure: React.FC = () => {
    return (
        <>
            <PageHeader title="News" icon={NewspaperIcon} />
            <InputNews />
            <NewsPanel />
        </>
    )
}

export default NewsStructure
