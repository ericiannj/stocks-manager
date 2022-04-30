import React from 'react'
import { PageTitleContainer, PageTitleIcon, PageTitleText } from './styled'

type IPageHeaderProps = {
    title: string
    icon: string
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, icon }) => {
    return (
        <>
            <PageTitleContainer>
                <PageTitleIcon src={icon} />
                <PageTitleText>{title}</PageTitleText>
            </PageTitleContainer>
        </>
    )
}

export default PageHeader
