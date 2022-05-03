import React from 'react'
import {
    SectionTitleContainer,
    SectionTitleIcon,
    SectionTitleText,
} from './styled'

type ISectionHeaderProps = {
    title: string
    icon: string
    style?: React.CSSProperties
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({
    title,
    icon,
    style,
}) => {
    return (
        <>
            <SectionTitleContainer>
                <SectionTitleIcon src={icon} style={style} />
                <SectionTitleText>{title}</SectionTitleText>
            </SectionTitleContainer>
        </>
    )
}

export default SectionHeader
