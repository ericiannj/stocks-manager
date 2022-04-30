import React from 'react'
import {
    SectionTitleContainer,
    SectionTitleIcon,
    SectionTitleText,
} from './styled'

type ISectionHeaderProps = {
    title: string
    icon: string
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({ title, icon }) => {
    return (
        <>
            <SectionTitleContainer>
                <SectionTitleIcon src={icon} />
                <SectionTitleText>{title}</SectionTitleText>
            </SectionTitleContainer>
        </>
    )
}

export default SectionHeader
