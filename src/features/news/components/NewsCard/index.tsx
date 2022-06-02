import React from 'react'
import {
    NewsContainer,
    NewsImage,
    NewsSubtitle,
    NewsText,
    NewsTextContainer,
    NewsTitle,
} from './styled'

type INewsCardProps = {
    title: string
    source: string
    datetime: number | string
    text: string
    image: string
    url?: string
}

const NewsCard: React.FC<INewsCardProps> = ({
    title,
    source,
    datetime,
    text,
    image,
}) => {
    return (
        <>
            <NewsContainer>
                <NewsTextContainer>
                    <NewsTitle>{title}</NewsTitle>
                    <NewsSubtitle>
                        {source} | {datetime}
                    </NewsSubtitle>
                    <NewsText>{text}</NewsText>
                </NewsTextContainer>
                <NewsImage src={image} />
            </NewsContainer>
        </>
    )
}

export default NewsCard
